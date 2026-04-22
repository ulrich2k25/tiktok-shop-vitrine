import os
from decimal import Decimal, ROUND_HALF_UP
import pandas as pd
from supabase import create_client, Client

SUPABASE_URL = "https://mploijlpetckumfecvdh.supabase.co"

SUPABASE_KEY = os.getenv("SUPABASE_SECRET_KEY")
if not SUPABASE_KEY:
    raise RuntimeError("❌ SUPABASE_SECRET_KEY non définie")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# PARAMETRES PRICING
MIN_MARGIN_RATE = 0.15
LOW_STOCK_THRESHOLD = 5
LOW_STOCK_MARKUP = 0.10
MAX_COMPETITOR_GAP = 0.01


def round_price(value: float) -> float:
    return float(Decimal(str(value)).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP))


def calculate_price(row):
    supplier_price = row.get("supplier_price")
    competitor_price = row.get("competitor_price")
    stock = row.get("stock", 0)
    current_price = row.get("price")

    if supplier_price is None:
        return current_price

    base_price = float(supplier_price) * (1 + MIN_MARGIN_RATE)

    if competitor_price is not None:
        competitor_price = float(competitor_price)
        max_price = competitor_price * (1 + MAX_COMPETITOR_GAP)
        base_price = min(base_price, max_price)

    if stock is not None and int(stock) <= LOW_STOCK_THRESHOLD:
        base_price *= (1 + LOW_STOCK_MARKUP)

    final_price = round_price(base_price)

    if current_price is not None and abs(final_price - float(current_price)) < 0.01:
        return float(current_price)

    return final_price


def main():
    print("📦 Chargement des produits...")

    response = supabase.table("products").select("*").execute()
    data = response.data

    if not data:
        print("❌ Aucun produit trouvé")
        return

    df = pd.DataFrame(data)
    df["new_price"] = df.apply(calculate_price, axis=1)

    print(df[["id", "name", "supplier_price",
          "competitor_price", "stock", "price", "new_price"]])

    print("🚀 Mise à jour des prix...")

    for _, row in df.iterrows():
        if row["price"] != row["new_price"]:
            supabase.table("products").update({
                "price": row["new_price"]
            }).eq("id", row["id"]).execute()

    print("✅ Mise à jour terminée.")


if __name__ == "__main__":
    main()
