export type Product = {
  id: number;
  name?: string;
  title?: string;
  description: string;
  price: string;
  image: string;
  tiktokLink?: string;
  link?: string;
};

export type Category = 'tous' |'sport' | 'homme_mode' | 'femme_mode' | 'outils' | 'bijoux' | 'beaute';

export const products: Record<string, Product[]> = {
  tous: [], // Cette catégorie peut rester vide ou être générée dynamiquement

 sport: [
     {
    id: 1,
    name: "Basketball Painting Wall Art",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/b27a5fd6703749f68ae2bbdff3c04f55~tplv-o3syd03w52-resize-webp:260:260.webp",
    price: "29.99€",
    description: "Poster décoratif pour chambre ou salon sur le thème du basketball.",
    tiktokLink: "https://www.tiktok.com/view/product/1729481815282915439",
  },
  {
    id: 2,
    name: "Basketballkorb NEON Hoop",
    image: "https://p16-oec-eu-common-useast2a.ibyteimg.com/tos-useast2a-i-tulkllf4y5-euttp/4e4795ebdbd0404694a7f5fc42c4e8dc~tplv-tulkllf4y5-resize-webp:260:260.webp",
    price: "49.99€",
    description: "Panier de basketball design NEON pour l’intérieur et l’extérieur.",
    tiktokLink: "https://www.tiktok.com/view/product/1729481553638103831",
  },
  {
    id: 3,
    name: "Men's Basketball Training Set",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/e373c7d449694533b1d8fd2ede1203c9~tplv-o3syd03w52-resize-webp:260:260.webp",
    price: "34.99€",
    description: "Ensemble t-shirt et short de basketball respirant pour l'été.",
    tiktokLink: "https://www.tiktok.com/view/product/1729481586467314124",
  },
  {
    id: 4,
    name: "Basketball Taille 7 + Pompe",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/3166569145fa4e3da1cce2adbf2d3652~tplv-o3syd03w52-resize-webp:260:260.webp",
    price: "24.99€",
    description: "Ballon de basketball extérieur antidérapant avec pompe.",
    tiktokLink: "https://www.tiktok.com/view/product/1729489617001027913",
  },
  {
    id: 5,
    name: "Basketball Kids Two-piece Set",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/b5ebe78bbe1d4b5ab9541d3e0a8cb0fb~tplv-o3syd03w52-resize-webp:260:260.webp",
    price: "27.99€",
    description: "Set respirant pour enfants, parfait pour les matchs de basketball.",
    tiktokLink: "https://www.tiktok.com/view/product/1729484114341567051",
  },
  {
    id: 6,
    name: "Men's Colorblock Basketball Sneakers",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/f583504032f54427a0f888904b012528~tplv-o3syd03w52-resize-webp:260:260.webp",
    price: "59.99€",
    description: "Baskets légères et confortables pour le sport et la ville.",
    tiktokLink: "https://www.tiktok.com/view/product/1729480302220187827",
  },
  {
    id: 7,
    name: "Unisex Colorblock Basketball Shoes",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/8013842615eb4d69950c47dbb4746ec2~tplv-o3syd03w52-resize-webp:260:260.webp",
    price: "54.99€",
    description: "Chaussures de basketball antidérapantes et respirantes.",
    tiktokLink: "https://www.tiktok.com/view/product/1729480988273842980",
  },
  {
    id: 8,
    name: "High Top Colorful Basketball Shoes",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/cfd5ec271590455db70d06febaf1f19b~tplv-o3syd03w52-resize-webp:260:260.webp",
    price: "64.99€",
    description: "Sneakers montantes colorées antidérapantes pour le quotidien.",
    tiktokLink: "https://www.tiktok.com/view/product/1729480606759688654",
  },
  {
    id: 9,
    name: "Unisex Basketball Shoes Non-slip",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/3701fe51d2974ce5bffd6c3d2ba9f433~tplv-o3syd03w52-resize-webp:260:260.webp",
    price: "49.99€",
    description: "Chaussures sportives confortables pour homme et femme.",
    tiktokLink: "https://www.tiktok.com/view/product/1729480586420590963",
  },
  {
    id: 10,
    name: "Women's Lace Up Platform Sneakers",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/e6d6781b461c48e29b6acac6cc3bd232~tplv-o3syd03w52-resize-webp:260:260.webp",
    price: "44.99€",
    description: "Baskets compensées confortables et respirantes pour femme.",
    tiktokLink: "https://www.tiktok.com/view/product/1729480014334892240",
  },
  
  {
    id: 11,
    name: "Colorblock Lace Up Sneakers",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/8757f8a963204f8f8b920b2ce212bdba~tplv-o3syd03w52-resize-webp:260:260.webp",
    price: "39.99€",
    description: "Chaussures de sport confortables et respirantes pour un usage quotidien.",
    tiktokLink: "https://www.tiktok.com/view/product/1729480664506866126",
  },
  
  {
  id: 12,
  name: "Two-Piece Boy's Basketball Set",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/f49f7bc2339b45ebbe07fa0f447adb63~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "29.99€",
  description: "Ensemble 2 pièces garçon avec sweat-shirt et short à motif basketball.",
  tiktokLink: "https://www.tiktok.com/view/product/1729481635933297138",
},

{
  id: 13,
  name: "POSTURE Haltungstrainer",
  image: "https://p16-oec-eu-common-no.tiktokcdn-eu.com/tos-no1a-i-t5fjg24jzw-no/c6a62bae21dc4dabbe8c18626626bd6e~tplv-t5fjg24jzw-resize-webp:260:260.webp",
  price: "29.99€",
  description: "Haltungstrainer für verbesserte Körperhaltung und muskuläre Stärkung.",
  tiktokLink: "https://www.tiktok.com/view/product/1729489255039408667"
},
{
  id: 14,
  name: "Fußballschuhe für Jungen und Mädchen",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/a119d41ef16047f29317cd561b666836~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "34.99€",
  description: "Professionelle Trainings- und Wettkampfschuhe mit langen Spikes, Unisex für Teenager.",
  tiktokLink: "https://www.tiktok.com/view/product/1729540863620978785"
},
{
  id: 15,
  name: "Skipping Rope with Ball Bearings",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/3b1cc191ef2343b8bae3fc596267fbbe~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "19.99€",
  description: "Rapid Jump Skipping Ropes for Aerobic Exercise Speed Training & Jumping Training Accessories.",
  tiktokLink: "https://www.tiktok.com/view/product/1729480320958830962"
},
],

  homme_mode: [
    {
  id: 1,
  name: "Men's Letter Print Round Neck Tee",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c58276a2749444bb864f9ad5b723bd4e~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "19.99€",
  description: "Regular Fit Casual Short Sleeve Crew Neck T-Shirt for Summer.",
  tiktokLink: "https://www.tiktok.com/view/product/1729490583109605513"
},
{
  id: 2,
  name: "Men's Letter & Number Print Round Neck Tee",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/d65a69ddf7e040ecae58bca81231543c~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "19.99€",
  description: "Casual Short Sleeve Crew Neck T-Shirt for Summer, Tropical Style.",
  tiktokLink: "https://www.tiktok.com/view/product/1729490563639188462"
},
{
  id: 3,
  name: "Men's Basketball Print Shorts",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/855088104a5249a88d80b7409b5c91a7~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "24.99€",
  description: "Loose Casual Relaxed Fit Breathable Comfortable Shorts for Summer Gym & Basketball.",
  tiktokLink: "https://www.tiktok.com/view/product/1729482769530591485"
},
{
  id: 4,
  name: "Men's Letter Print Denim Shorts",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/d6ebee90280d4b85b73e00aa3b2f4d7c~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "29.99€",
  description: "Casual Loose Fit Shorts for Summer, Fashion Men's Bottoms for Daily Wear.",
  tiktokLink: "https://www.tiktok.com/view/product/1729500909793024819"
},
{
  id: 5,
  name: "Men's Thermal Lined Side Stripe Hoodie & Pants Set",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/5132c40825674b24bcfbb910d0d45b9b~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "59.99€",
  description: "Casual Regular Fit Hooded Sweatshirt & Jogger Pants for Daily Wear, Fall & Winter.",
  tiktokLink: "https://www.tiktok.com/view/product/1729518710852589570"
}, {
  id: 6,
  name: "Retro Striped Loose Sweater",
  image: "https://p16-oec-eu-common-no.tiktokcdn-eu.com/tos-no1a-i-t5fjg24jzw-no/3a57365881b24b90bb6d98c3e34e11c9~tplv-t5fjg24jzw-resize-webp:260:260.webp",
  price: "49.99€",
  description: "American Retro Striped Printed Loose Pullover for Men and Women.",
  tiktokLink: "https://www.tiktok.com/view/product/1729544929579408083"
},
{
  id: 7,
  name: "2025 Neue ES Doppelnaht Hoodie Set",
  image: "https://p16-oec-eu-common-no.tiktokcdn-eu.com/tos-no1a-i-t5fjg24jzw-no/c5df9a11013649b8abb06b52536297ee~tplv-t5fjg24jzw-resize-webp:260:260.webp",
  price: "59.99€",
  description: "Lockere Fleece Herren und Damen Hoodie Set 2025, Doppelnaht Design.",
  tiktokLink: "https://www.tiktok.com/view/product/1729546005373557459"
}, 
{
  id: 8,
  name: "Stylish Men's 2-Piece Waffle Knit Shorts Set - Summer Sportswear",
  image: "https://p16-oec-eu-common-no.tiktokcdn-eu.com/tos-no1a-i-t5fjg24jzw-no/2c900aa8b7474ab18c2e54f22bffa18a~tplv-t5fjg24jzw-resize-webp:260:260.webp",
  price: "49.99€",
  description: "Comfortable & Fashionable Casual Outfit for Active Lifestyle, perfect for summer sportswear.",
  tiktokLink: "https://www.tiktok.com/view/product/1729527733324651356"
},
{
  id: 8,
  name: "New York Embroidery Baseball Cap",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/e9bee29fe10f47ee8f234b5bdef68645~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "19.99€",
  description: "Casual Outdoor Sports Hat for Men & Women, Vintage All-match Sun Hat for Daily Wear.",
  tiktokLink: "https://www.tiktok.com/view/product/1729480149563644055"
},
{
  id: 9,
  name: "Men's Fashionable Lace Up Mid Top Sneakers",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/5391be0ade99480c85aabcc3445d8dad~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "49.99€",
  description: "Casual Comfortable Breathable Sports Running Shoes. Male All-match Chunky Sneakers for Daily Life.",
  tiktokLink: "https://www.tiktok.com/view/product/1729491822869518959"
},
{
  id: 10,
  name: "Men's Sporty Lace Up Running Shoes",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/f11c4a8a09204745afff6b2dce93f448~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "54.99€",
  description: "Casual Comfortable Breathable Hollow Out Air Cushion Sneakers. Fashion Sneakers for Daily Wear.",
  tiktokLink: "https://www.tiktok.com/view/product/1729480473791535414"
},
{
  id: 12,
  name: "2025 American Casual Jogging Set with Zipper & Hoodie",
  image: "https://p16-oec-eu-common-no.tiktokcdn-eu.com/tos-no1a-i-t5fjg24jzw-no/06fb84d4b27146e083be5f8fff3c1f23~tplv-t5fjg24jzw-resize-webp:260:260.webp",
  price: "18,89 €", 
  description: "Zweiteilige Y2K Streetwear mit Stickerei – Hip-Hop Freizeitanzug für Herren (Jogginghose + Kapuzenjacke).",
  tiktokLink: "https://www.tiktok.com/view/product/1729519345784101861"
},
{
  id: 18,
  name: "Nike Air Force 1 Sneakers for Women",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/24aba51afe4344b9b507522ab4f5e964~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "89.99€",
  description: "Classic Nike Air Force 1 DD8959 – Comfortable, stylish sneakers perfect for everyday wear. Timeless design for women.",
  tiktokLink: "https://www.tiktok.com/view/product/1729545254344366942"
},

 ],
 
  femme_mode: [
   {
  id: 1,
  name: "Women's Embroidering Design Pocket Denim Pants",
  image: "https://p16-oec-eu-common-no.tiktokcdn-eu.com/tos-no1a-i-t5fjg24jzw-no/bc030196f6c747019c6adee266abaf9f~tplv-t5fjg24jzw-resize-webp:260:260.webp",
  price: "39.99€",
  description: "Casual Fashion Loose Comfy Wide Leg Trousers for Daily Wear, Love Handles Low Waist Jeans, All Seasons.",
  tiktokLink: "https://www.tiktok.com/view/product/1729520822522714812"
},
{
  id: 2,
  name: "Women's Cut Out Ripped Wide Leg Jeans",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/21208c5a3cb24425bb43fa95b235aa4f~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "39.99€",
  description: "Fashion Casual High Waist Straight Leg Distressed Denim Pants for Daily Outdoor Wear, All Seasons.",
  tiktokLink: "https://www.tiktok.com/view/product/1729481800901826808"
},
{
  id: 3,
  name: "Two-Piece Women's Jacket & Skirt Set",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/f85538ccc3ba482b84f7f8f3c3786b91~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "49.99€",
  description: "Letter Embroidery Button Front Jacket & PU Skirt, Casual Fashion for Daily Wear, All Seasons.",
  tiktokLink: "https://www.tiktok.com/view/product/1729488609782176467"
},
{
  id: 4,
  name: "Two-piece Solid Crop Top & Shorts Set",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/2ce52dcc706649ed8bdaa359356e69a6~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "34.99€",
  description: "Solid Button Front Crop Top & Shorts Set, Casual Fashion for Summer Daily Wear.",
  tiktokLink: "https://www.tiktok.com/view/product/1729488923301091956"
},
{
  id: 5,
  name: "Women's Ribbed Crop Top & Pants Set",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/092f456f0ae84e289c094940ccb29766~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "39.99€",
  description: "Solid Ribbed Ruched Drawstring Crop Tank Top & High Waist Pants Set for Daily Wear.",
  tiktokLink: "https://www.tiktok.com/view/product/1729481968261765508"
},
{
  id: 6,
  name: "Women's Butterfly Print Tee & Pants Set",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/bcc1bd567a0c419ebafaf08c6a01a6d1~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "39.99€",
  description: "Casual Round Neck Short Sleeve T-shirt & Trousers for Daily Wear.",
  tiktokLink: "https://www.tiktok.com/view/product/1729513878777403866"
},
{
  id: 7,
  name: "Two-Piece Women's Side Striped Tube Top & Pants",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/b705c8f9465740608bcd5bba52b35b75~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "39.99€",
  description: "Casual Fashion Cozy Set for Daily Outdoor Wear, All Seasons.",
  tiktokLink: "https://www.tiktok.com/view/product/1729504672829511877"
},
{
  id: 8,
  name: "Women's All Over Print Tube Dress",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/6ae6b2e5641748a18d3a480337cbd737~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "39.99€",
  description: "Elegant Fashion Casual Strapless Dress for Daily Outdoor Wear, suitable for all seasons.",
  tiktokLink: "https://www.tiktok.com/view/product/1729486623767501822"
},

{
  id: 10,
  name: "Women's 2 Counts Solid Backless Crop Tube Top & High Waist Skirt Set",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/91271c0a6901434db1cf094ff1b39382~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "34.99€",
  description: "Sleeveless Strapless Top & Bodycon Skirt Set for Party Club Dating, Ladies Summer Clothes.",
  tiktokLink: "https://www.tiktok.com/view/product/1729485724500400433"
},

{
  id: 11,
  name: "Women's Plain Split Thigh Drawstring Ruched Cami Dress",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/1fb681f2906648deb284bc072d20c054~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "39.99€",
  description: "Elegant Cut Out Halter Neck Long Dress for Party Club Dating Wear, Ladies Summer Clothes.",
  tiktokLink: "https://www.tiktok.com/view/product/1729480293721545095"
},
{
  id: 12,
  name: "Women's Plain Ruched Bodycon Dress",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/842647616ca4497cb8c7d3e07f824ae9~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "29.99€",
  description: "Elegant Tie Back Wrap Dress for Party, Club & Dating. Ladies Summer Clothes.",
  tiktokLink: "https://www.tiktok.com/view/product/1729486772865243441"
},
{
  id: 13,
  name: "Sporty Women's Plain Square Neck Sports Dress",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/afcc61a172894dc48eef79dccf3d2e54~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "34.99€",
  description: "Sports Sleeveless Skorts Dress for Golf, Tennis, Running. Ladies Sportswear Indoor & Outdoor.",
  tiktokLink: "https://www.tiktok.com/view/product/1729487716676508507"
},
{
  id: 14,
  name: "Women's 3 Counts Solid Backless Sports Vest",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/17f2043583ab429eac417c87c0be14bd~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "8,55€", 
  description: "Adjustable Strap Seamless Workout Athletic Cami Top, Ladies Sportswear for Indoor Outdoor Wear.",
  tiktokLink: "https://www.tiktok.com/view/product/1729497281839799291"
},
{
  id: 13,
  name: "Women's Crop Halter Top & Wide Leg Pants Set",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/eeec88b5a49441bc8c429561d8f8031c~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "15,86€",
  description: "Casual & comfy two-piece outfit for daily outdoor wear. Fashionable ladies set for all seasons.",
  tiktokLink: "https://www.tiktok.com/view/product/1729498020764293590"
},
{
  id: 14,
  name: "Schlappen Susa Gold",
  image: "https://p16-oec-eu-common-useast2a.ibyteimg.com/tos-useast2a-i-tulkllf4y5-euttp/94038b344c4c4eb4af83323f1b0654ca~tplv-tulkllf4y5-resize-webp:260:260.webp",
  price: "19.99€",
  description: "Stylish golden slippers – lightweight, elegant and perfect for indoor & casual summer wear.",
  tiktokLink: "https://www.tiktok.com/view/product/1729449671511152910"
},
{
  id: 15,
  name: "Louis Vuitton - Pool Kissenrutsche (Schwarz)",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/eb13aedae52441429691853a3ef4fd10~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "49.99€",
  description: "Luxe schwarze Pool-Slides von Louis Vuitton – stylisch, bequem und perfekt für Sommer oder Zuhause.",
  tiktokLink: "https://www.tiktok.com/view/product/1729523892031363469"
},
{
  id: 16,
  name: "Women's Fashionable Slide Sandals",
  image: "https://p16-oec-eu-common-no.tiktokcdn-eu.com/tos-no1a-i-t5fjg24jzw-no/adad337d5ee448c1b37f6e86e6df0db2~tplv-t5fjg24jzw-resize-webp:260:260.webp",
  price: "19.99€",
  description: "Casual flat sandals for beach vacation or everyday wear – comfortable, stylish, and easy to match.",
  tiktokLink: "https://www.tiktok.com/view/product/1729515688113904471"
},
{
  id: 17,
  name: "Women's Solid Tube Top & Wide Leg Pants Set",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/eeb36cc4dc4d464d94e1b435cf5a6b24~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "29.99€",
  description: "Casual and comfortable two-piece summer outfit with a tube top and wide leg pants – perfect for daily or outdoor wear.",
  tiktokLink: "https://www.tiktok.com/view/product/1729492317840840719"
},

 ],
 
  outils: [
{
  id: 1,
  name: "Stanley Quencher H2.0 Becher 2025",
  image: "https://p16-oec-eu-common-no.tiktokcdn-eu.com/tos-no1a-i-t5fjg24jzw-no/35a3196e17b64f7dacf76deb82779c1e~tplv-t5fjg24jzw-resize-webp:260:260.webp",
  price: "39.99€",
  description: "850ml Edelstahl-Isolierbecher mit Griff & Strohhalm, Flowstate Deckel, BPA-frei, ideal für Reisen.",
  tiktokLink: "https://www.tiktok.com/view/product/1729523138086738199"
},
{
  id: 2,
  name: "USB Rechargeable Selfie Ring Light",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/a05bc39c437b4db09597df1dc4489f4d~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "19.99€",
  description: "36-LED Selfie Ring Light, Night Selfie Enhancing Light for Phone Photography.",
  tiktokLink: "https://www.tiktok.com/view/product/1729481045978487174"
},
{
  id: 3,
  name: "Luminous Metal Laser Sword Toy",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/6e0fca7091f2433584bec3ca56abe2ff~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "24.99€",
  description: "Color Changing Light Sword Toy with Sound & Light Effects, perfect Valentine's Day Gift.",
  tiktokLink: "https://www.tiktok.com/view/product/1729512864450320600"
},
{
  id: 4,
  name: "10000mAh Wireless Fast Charging Power Bank",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/077a93a7168744dda40c78bf0cf42d95~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "59.99€",
  description: "Portable Magnetic Mobile Power with LED Display, Universal Power Bank for iPhone 15/14/13/12/Pro/Mini/Pro Max, Chargeable.",
  tiktokLink: "https://www.tiktok.com/view/product/1729529909647809403"
},
{
  id: 5,
  name: "4K Video Recording Digital Camera",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/22fafe92b57d4e5da5a16243beb7fdad~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "99.99€",
  description: "48MP Auto Focus Pixel Digital Camera with 16X Digital Zoom, 32G Memory Card included, perfect for beginners.",
  tiktokLink: "https://www.tiktok.com/view/product/1729481888520313729"
},



  ],
  
    bijoux: [
    {
  id: 1,
  name: "Rhinestone Decorated Bangle Bracelet",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/70a0cd48f0c24bd39383dd306ec61901~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "29.99€",
  description: "Fashionable Jewelry for Women & Men for Party, Daily Clothing Decor, Trendy All-match & Exquisite Jewelry for Gift.",
  tiktokLink: "https://www.tiktok.com/view/product/1729480602598546200"
},
{
  id: 2,
  name: "2024 Summer Rhinestone Decorated Trendy Bangle",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/61e9736ead154fbf9935a0a5739cbd5e~tplv-o3syd03w52-resize-webp:260:260.webp",
  price: "29.99€",
  description: "Elegant Fashion Accessories for Women & Men Daily Wear, Minimalist Aesthetic Jewelry Gift.",
  tiktokLink: "https://www.tiktok.com/view/product/1729491660882811397"
},
],

  	  beaute: [
{
  id: 1,
  name: "Stanley Quencher H2.0 Becher 2025",
  image: "https://p16-oec-eu-common-no.tiktokcdn-eu.com/tos-no1a-i-t5fjg24jzw-no/35a3196e17b64f7dacf76deb82779c1e~tplv-t5fjg24jzw-resize-webp:260:260.webp",
  price: "39.99€",
  description: "850ml Edelstahl-Isolierbecher mit Griff & Strohhalm, Flowstate Deckel, BPA-frei, ideal für Reisen.",
  tiktokLink: "https://www.tiktok.com/view/product/1729523138086738199"
},

  ],
};
