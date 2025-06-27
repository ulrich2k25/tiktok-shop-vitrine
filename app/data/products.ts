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

export type Category = 'tous_produits' |'sport' | 'homme_mode' | 'femme_mode' | 'outils' | 'bijoux' | 'beaute';

export const products: Record<string, Product[]> = {
  tous_produits: [], // Cette catégorie peut rester vide ou être générée dynamiquement

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
{
  id: 19, // ID unique suivant
  title: "Men's Peace Dove Print T-shirt",
  description: "T-shirt homme à col rond avec motif colombe – coupe régulière, style décontracté pour l'été et le quotidien.",
  price: "€13.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/a45a2f4ce8cb4ea2be1f0a7b43d8e9a5~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729507055983892617"
},
{
  id: 20,
  title: "Casual Men's Straight-Leg Pants",
  description: "Pantalon pour homme à jambe droite – cordon de serrage et détails bouton, léger et confortable pour le sport ou la détente.",
  price: "€16.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/8c09c5b2f9b2446b81060aecf8fa7499~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729494672400423481"
},
{
  id: 21,
  title: "Men's Ripped Denim Jacket",
  description: "Veste en jean pour homme avec effet déchiré – coupe régulière, manches longues, idéale pour un look tendance toutes saisons.",
  price: "€23.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/6b076acb898a47a0926b3673a83c3ab7~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729496192922786415"
},
{
  id: 22,
  title: "Men's Letter Print Flight Jacket",
  description: "Veste aviateur pour homme avec imprimé lettre, col baseball et boutons pression. Parfait pour un style décontracté en automne/hiver.",
  price: "€24.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/9aa2d14646814f98b7877e87e05cf639~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729531981575920367"
},
{
  id: 23,
  title: "Unisex Cartoon Bear Varsity Jacket",
  description: "Veste universitaire décontractée avec imprimé lettre et ours, poches à patchs, idéale pour l’automne/hiver. Unisexe et stylée.",
  price: "€29.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/62a0d00462014278823dc840733d8021~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729509272295217903"
},
{
  id: 24,
  title: "Men's Suspender Pants Suit Set",
  description: "Costume slim homme avec pantalon à bretelles, élégant et formel, parfait pour les mariages, fêtes et occasions estivales.",
  price: "€39.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/b0cda52043404e21ba1ff933387f09aa~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729493126665968193"
},
{
  id: 25,
  title: "Men's Plain Button Fly Raw Trim Jeans",
  description: "Jean slim décontracté pour homme avec braguette boutonnée, coupe confortable, parfait pour un usage quotidien toutes saisons.",
  price: "€29.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/39b8529a30fc4da4b096d23643507eaf~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729481083357927992"
},
{
  id: 26,
  title: "Men's Solid Color Ripped Jacket",
  description: "Veste homme casual avec effet déchiré, coupe mode à boutons, parfaite pour toutes les saisons.",
  price: "€34.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/07a6d29bf2fa427da2cae541e5193bef~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729480962119080504"
},
{
  id: 27,
  title: "Men's Ripped Zipper Pocket Design Jeans",
  description: "Jean homme large avec design déchiré et poches zippées – idéal pour un look casual tendance toute l'année.",
  price: "€29.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/206a4cd871b045359f244898f5faa1c5~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729480444824361528"
},
{
  id: 28,
  title: "Men's Solid Button Pocket Lapel Jacket & Cargo Pant Set",
  description: "Ensemble veste boutonnée avec col à revers et pantalon cargo à cordon – coupe régulière, look décontracté et respirant pour toutes les saisons.",
  price: "€34.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/8e3e3b8c538c41189b7ca9fa141880cf~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729480599174290011"
},
{
  id: 29,
  title: "Two-Piece Set Men's Letter Print Sweatshirt & Sweatpants",
  description: "Ensemble deux pièces pour homme – sweatshirt à épaules tombantes et pantalon de survêtement, look décontracté et respirant pour le printemps et l'automne.",
  price: "€28.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/59dc9e9a9c194ad4a413a1295671f6c8~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729524484246248047"
},
{
  id: 10048,
  title: "Chaussures Tendance Homme – Mocassins Confort",
  description: "Chaussures slip-on classiques pour hommes, style tendance et confortable. Idéal pour une tenue décontractée au quotidien ou pour sortir.",
  price: "€17.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/891a5bbd16d04c05a363c9cedb2794df~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729480302211537581"
},
{
  id: 10052,
  title: "Mocassins homme – Slip-on respirants",
  description: "Chaussures bateau décontractées pour homme, confortables, respirantes, bout rond. Style simple et élégant pour un usage quotidien.",
  price: "€24.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/0a8c71cded2241ba89a59b6dbeb1175d~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729480824191818206"
},
{
  id: 10052,
  title: "Mocassins homme – Slip-on respirants",
  description: "Chaussures bateau décontractées pour homme, confortables, respirantes, bout rond. Style simple et élégant pour un usage quotidien.",
  price: "€24.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/0a8c71cded2241ba89a59b6dbeb1175d~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729480824191818206"
},
{
  id: 10053,
  title: "Bottes homme style britannique",
  description: "Chaussures montantes pour homme – antidérapantes, résistantes à l’usure. Idéales pour la randonnée ou le quotidien, disponibles en plusieurs coloris.",
  price: "€29.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/dea91710f2e04c49b63d67d90811b9bf~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729521844536777202"
},
{
  id: 10054,
  title: "Mocassins cuir PU homme",
  description: "Chaussures à enfiler pour homme – cuir PU léger, respirant et confortable, parfaites pour une tenue décontractée au quotidien.",
  price: "€24.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/d1f58ca0c195468aa4b868b6de471fa3~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729481075195091832"
},
{
  id: 10055,
  title: "Baskets basses homme – tendance et confort",
  description: "Sneakers à lacets pour homme, look décontracté et sportif. Confortables pour un usage quotidien. Idéal pour les tenues modernes.",
  price: "€26.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/84b0c6c94fcc419cb406e8757cd0dd8d~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729514388009360154"
},
{
  id: 10056,
  title: "Sneakers sport – look dynamique",
  description: "Baskets stylées pour homme, idéales pour le sport ou un look urbain. Confortables, tendance et polyvalentes.",
  price: "€28.99",
  image: "https://p16-oec-eu-common-no.tiktokcdn-eu.com/tos-no1a-i-t5fjg24jzw-no/4ae816b1dbbc488eb29578149b7f93c6~tplv-t5fjg24jzw-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729494463422569355"
},
{
  id: 10057,
  title: "Sneakers respirants et stylés – homme",
  description: "Baskets basses à lacets, confortables, respirantes et tendance pour une utilisation quotidienne ou sportive.",
  price: "€27.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/3a32686f637e4c83a4e3b813ced7168e~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729518774192937754"
},
{
  id: 10058,
  title: "Baskets épaisses respirantes – femme",
  description: "Chaussures polyvalentes à semelles épaisses, respirantes et légères, idéales pour l’été ou un usage quotidien.",
  price: "€29.99",
  image: "https://p16-oec-eu-common-no.tiktokcdn-eu.com/tos-no1a-i-t5fjg24jzw-no/1635b678bd784070ae0ac8e9d63f5553~tplv-t5fjg24jzw-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729531790418483362"
},
{
  id: 10059,
  title: "Skateshoes blancs – homme",
  description: "Chaussures de sport décontractées pour hommes, style skateur avec semelle épaisse, idéales pour étudiants et usage quotidien.",
  price: "€32.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c2c5e16f7d6640b5834115f72f5ccb74~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729503063610530605"
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
{
  id: 18, // ID unique suivant
  title: "Women's Transparent High Heel Sandals",
  description: "Sandales à talon carré transparentes – design élégant et tendance, parfaites pour les soirées ou les looks quotidiens.",
  price: "€19.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/02f46e42498d4e2d95b8768f67d003ae~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729495779524647345"
},
{
  id: 19, // ID unique suivant
  title: "Clogs Charms Set (12pcs) – Bow & Pearl",
  description: "Set de 12 charms pour sabots – nœuds, perles et fleurs décoratives, parfait pour personnaliser vos chaussures style Crocs.",
  price: "€8.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/7f417fd963d943809a898dd3b9603eb6~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729496527164905475"
},
{
  id: 20, // ID unique suivant
  title: "Women's Patchwork Low Top Sneakers",
  description: "Baskets basses femme à empiècements – confortables, stylées et parfaites pour un look décontracté au quotidien.",
  price: "€24.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/04a28bd8b5f848c8875b96a3e816b981~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729489244585171070"
},
{
  id: 21, // ID unique suivant
  title: "Women's Patchwork Lace-Up Sneakers",
  description: "Baskets basses à lacets pour femme – design patchwork tendance, confortables et respirantes pour un usage quotidien.",
  price: "€23.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/cddc31ee336446e1964495ae98c77aa3~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729480264824232251"
},
{
  id: 22,
  title: "Women's Fashionable Plain Color Slides",
  description: "Claquettes plates pour femmes – confortables, légères et tendance, parfaites pour la plage, la maison ou les sorties quotidiennes.",
  price: "€9.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/9a35a20c1c6142d3b936a6812012e462~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729487911771609687"
},
{
  id: 23,
  title: "Women's Fashionable Lace Up High Heel Sandals",
  description: "Sandales à talons hauts pour femmes – élégantes, à lacets, parfaites pour l'été, le quotidien ou des sorties stylées.",
  price: "€12.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/29a1406d81454eca9311a3164612052b~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729480785688631710"
},
{
  id: 24,
  title: "Fashion Chain Decorated Slip on Sandals",
  description: "Sandales femmes avec chaîne décorative – confortables, légères, parfaites pour l'été et les looks du quotidien.",
  price: "€11.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/f76d4db9b8354563967d5e500dbc3fec~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729502790088498032"
},
{
  id: 25,
  title: "Coarse Heeled Sandals for Women – Summer 2025 Collection",
  description: "Sandales pour femmes à talons larges, style luxe et élégant. Idéales pour assortir avec jupes ou robes – nouvelle collection 2025.",
  price: "€13.99",
  image: "https://p16-oec-eu-common-no.tiktokcdn-eu.com/tos-no1a-i-t5fjg24jzw-no/a10a3a89ab5d44788576e9bd2ac6b80f~tplv-t5fjg24jzw-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729526532172717045"
},
{
  id: 27,
  title: "Ensemble Femme Veste Zippée Colorblock + Pantalon Élastique",
  description: "Tenue décontractée avec veste à col montant et pantalon confortable – idéale pour le printemps ou le quotidien.",
  price: "€14.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/2390f436d5734264b126771015b08090~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729545326834719146"
},
{
  id: 28,
  title: "Ensemble Femme Veste Zippée à Capuche + Pantalon Cargo",
  description: "Tenue décontractée colorblock pour femme – veste à capuche + pantalon cargo, idéale pour le printemps ou l’automne.",
  price: "€14.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/e12b10f8c4f94561aa7b59c55f6b0d16~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729541327621363792"
},
{
  id: 29,
  title: "Ensemble Femme Veste Courte Imprimée + Pantalon",
  description: "Tenue 2 pièces colorblock zippée pour femme – veste crop + pantalon assorti, confortable pour automne et hiver.",
  price: "€15.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c97c693b48b740a4939304f47e4f6a3f~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729480636265306430"
},
{
  id: 30,
  title: "Ensemble Femme Été T-shirt + Short Imprimé",
  description: "Tee-shirt à imprimé lettres et short à taille élastique – tenue légère et confortable pour l'été, idéale au quotidien.",
  price: "€13.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/4ae0578102d142cc838f97663d7a1fac~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729490569557547444"
},
{
  id: 39,
  title: "Short en Jean Femme Taille Haute Y2K",
  description: "Short en jean à taille haute pour femme – style Y2K déchiré avec franges et multi-poches, parfait pour l’été.",
  price: "€12.99",
  image: "https://p16-oec-eu-common-no.tiktokcdn-eu.com/tos-no1a-i-t5fjg24jzw-no/64ac4cb94081448399cb2d05aa0320bb~tplv-t5fjg24jzw-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729523847893916448"
},
{
  id:40,
  title: "Salopette en Jean Femme Décontractée",
  description: "Salopette en jean unie pour femme – coupe ample, confortable et tendance, parfaite pour toutes les saisons.",
  price: "€13.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/66f14532153f44a7b82ca563c1a3f00e~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729496873043139078"
},
{
  id: 41,
  title: "Robe Tube Fendue Femme – Été 2024",
  description: "Robe moulante sans manches, style bandeau avec fente sur le côté – idéale pour l’été, élégante et confortable.",
  price: "€10.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/79c4185a9ef94dafb2e595677c126cf3~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729482717129447911"
},
{
  id: 42,
  title: "Short Cargo 2-en-1 Femme – Multi-poches",
  description: "Short jupe en jean avec multiples poches, style casual tendance pour l’été – confortable et stylé pour un look streetwear.",
  price: "€11.49",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/4f2c706eff8e4ced93f37b55685c288a~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729494675198023928"
},
{
  id: 43,
  title: "Ensemble Top + Jupe Femme – Style chic et moulant",
  description: "Set 2 pièces avec top à col rond et manches courtes, jupe moulante – parfait pour un look élégant et féminin.",
  price: "€9.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/e839cb7500514d18a14d52a2f287d6eb~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729516254651456161"
},
{
  id: 44,
  title: "Y2K Ensemble Femme – Hoodie + Pantalon Camouflage Rose",
  description: "Tenue de sport Y2K pour femme – deux pièces, style Hip-Hop, coupe courte, confortable et tendance pour un look décontracté.",
  price: "€9.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/68d34c2140204e8ea0fcbf2bcb35d375~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729545808453212893"
},
{
  id: 45,
  title: "Leggings Sport Taille Haute – Grande Taille",
  description: "Leggings confortables et respirants à séchage rapide avec imprimé lettre. Idéals pour le yoga, la gym ou le sport au quotidien. Conviennent à toutes les saisons.",
  price: "€9.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/55e3b60ba0104ae9ab7773df44d49c54~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729483051453946414"
},
{
  id: 46,
  title: "Jean Femme Taille Haute Déchiré",
  description: "Jean tendance pour femmes, taille haute avec effet déchiré. Style streetwear idéal pour un look mode au quotidien. Convient à toutes les saisons.",
  price: "€14.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/46101450e6464f3babf4af3dd3e6e4de~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729521321272777527"
},
{
  id: 47,
  title: "Pantalon Évasé Femme – Style Bootcut",
  description: "Pantalon long évasé pour femmes, coupe bootcut confortable. Idéal pour un style casual chic au quotidien, adapté à toutes les saisons.",
  price: "€12.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c1fe0c52b0d243f58f18409624f11fba~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729490505928907349"
},
{
  id: 48,
  title: "Jean Déchiré Femme – Casual Denim",
  description: "Jean simple pour femmes, style déchiré moderne. Parfait pour un look décontracté au quotidien. Confortable et tendance pour toutes les saisons.",
  price: "€14.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/2afdb0a958c247a9a1978a4f1c4316bb~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729480060131514694"
},
{
  id: 49,
  title: "Sandales Femme Été – Double Boucle Confort",
  description: "Sandales plates légères avec double boucle, semelle confortable, revêtement PU et doublure en tissu. Idéales pour la plage ou les journées chaudes.",
  price: "€14.99",
  image: "https://p16-oec-eu-common-no.tiktokcdn-eu.com/tos-no1a-i-t5fjg24jzw-no/8af613792c03499f88b137a80fa9ae52~tplv-t5fjg24jzw-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729515685927230295"
},
{
  id: 10050,
  title: "Sandales Femme Élégantes à Enfiler – Bout Carré",
  description: "Sandales plates élégantes pour femme, design froncé, bout carré tendance. Idéales pour un look chic et confortable au quotidien.",
  price: "€12.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/bee4baa6b0634117b937d8e4b8746a2f~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729484228241168817"
},
{
  id: 10051,
  title: "New Balance 530 – Chaussures de marche unisexe",
  description: "Chaussures New Balance confortables et tendance, parfaites pour un usage quotidien. Design casual, pour hommes et femmes.",
  price: "€29.99",
  image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/740bd37ab9c34cedafe332a39adfaa87~tplv-aphluv4xwc-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729529180094437395"
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
{
  id: 6,
  title: "Stanley Quencher H2.0 850ml – Becher mit Griff & Strohhalm",
  description: "Isolierter Edelstahlbecher (Rosenquarz 2.0), mit 3-Positionen-Deckel, BPA-frei – perfekt für Reisen, Sport & Alltag.",
  price: "€17.99",
  image: "https://p16-oec-eu-common-no.tiktokcdn-eu.com/tos-no1a-i-t5fjg24jzw-no/827009fa944f4f96b9c4ff9e9d8e3fcb~tplv-t5fjg24jzw-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729523046518921385"
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
 {
    id: 3, // Use a unique ID that doesn’t conflict with other products
    title: "Magnetic Heart Charm Bracelet",
    description: "Trendy magnetic couple bracelet. Perfect romantic gift for birthdays or Valentine's Day.",
    price: "€12.99",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/f6739385c27c4f8c9c31c9f81355dc1c~tplv-o3syd03w52-resize-webp:260:260.webp",
    tiktokLink: "https://www.tiktok.com/view/product/1729483748220115545"
  },
   {
    id: 4, // Use a unique ID
    title: "Women's Elegant Watch & Bracelet Set",
    description: "Elegant fashion watch and bracelet set – perfect for parties, daily wear, or gifts.",
    price: "€15.99",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/5ff8c2e964a84559981d3fe51477ba63~tplv-o3syd03w52-resize-webp:260:260.webp",
    tiktokLink: "https://www.tiktok.com/view/product/1729503294841002300"
  },
   {
    id: 5, // Choisir un ID unique
    title: "Unisex Magnetic Heart Charm Bracelets (2pcs)",
    description: "Set de 2 bracelets magnétiques cœur – unisexe, style minimaliste vintage, idéal comme cadeau ou bijou quotidien.",
    price: "€9.99",
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/fe1c1618229a49d4b76996be0cd0ff59~tplv-o3syd03w52-resize-webp:260:260.webp",
    tiktokLink: "https://www.tiktok.com/view/product/1729480189943454057"
  },
  {
  id: 6, // ID unique suivant
  title: "Tennis Chain Necklace & Bracelet",
  description: "Collier et bracelet style Tennis – bijou tendance et élégant pour soirées, tenues quotidiennes ou cadeau d'anniversaire.",
  price: "€12.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/40310db664334089b22a96882b429a88~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729480258992708101"
},
{
  id: 7, // ID unique suivant
  title: "Fashion Chain Link Necklace & Bracelet",
  description: "Collier et bracelet chaîne avec strass – style hip-hop brillant pour femmes et hommes, idéal pour soirées ou tenues streetwear.",
  price: "€14.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/2a8256f40f684f33bac003079a56a838~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729494333214267884"
},
{
  id: 8, // ID unique suivant
  title: "Vintage Fashion Men's Ring",
  description: "Bague géométrique vintage pour homme – bijou tendance pour soirée ou usage quotidien, idéal comme cadeau stylé.",
  price: "€7.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/5447eb99b8ba4774a3ac910ce9aaf5f3~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729482129714944127"
},
{
  id: 9, // ID unique suivant
  title: "Men's Letter Pendant Bracelet",
  description: "Bracelet chaîne dorée avec pendentif lettre – acier inoxydable, élégant et moderne, parfait pour un style tendance ou en cadeau.",
  price: "€10.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/a1997a9575b44e77a6489975b6f6ddd6~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729508345649207791"
},
{
  id: 10, // ID unique suivant
  title: "Men's Street Trend Cuban Chain Bracelet",
  description: "Bracelet cubain pour homme en acier inoxydable – look streetwear et tendance, parfait pour sorties, fêtes ou en cadeau.",
  price: "€11.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/1a4cdc45dcdb4339afae9404297d1f9c~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729480718503091044"
},
{
  id: 11, // ID unique suivant
  title: "Boho Style Chain Bracelets",
  description: "Bracelets chaîne style bohème – minimalistes, tendance et élégants, parfaits pour les femmes et filles comme cadeau ou bijou quotidien.",
  price: "€6.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/ad70e8a2f7f4405bad1a3b78dd34dfd8~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729480134826367236"
},
{
  id: 12, // ID unique suivant
  title: "Minimalist Ring for Women",
  description: "Bague minimaliste et élégante – parfaite pour les femmes souhaitant un bijou tendance, discret et raffiné pour le quotidien ou les fêtes.",
  price: "€5.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/053cdc36c507453981f0b19c141ae4b0~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729480169076267837"
},
{
  id: 13, // ID unique suivant
  title: "Elegant Gemstone Ring for Women",
  description: "Bague élégante décorée de pierre précieuse artificielle – bijou raffiné et tendance, idéal pour femmes et filles en toute occasion.",
  price: "€7.49",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c3e14344efb942778b45dbfe5fd7e57e~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729489652411308854"
},
{
  id: 14, // ID unique suivant
  title: "Elegant Bangle Bracelet Set",
  description: "Set de bracelets joncs élégants en acier inoxydable – parfaits pour soirées, tenues quotidiennes et cadeaux raffinés.",
  price: "€9.49",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/260d5e5cd1a2406da0d1dbea85180cdc~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729480060201376146"
},
{
  id: 15, // ID unique suivant
  title: "Geometric Hoop Earrings for Women",
  description: "Boucles d’oreilles créoles géométriques torsadées – look élégant et moderne, parfaites pour les femmes en toute occasion.",
  price: "€6.49",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/fafb52a681ce418da34f033d9a82b04c~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729480074217691148"
},
{
  id: 16, // ID unique suivant
  title: "Vintage Sun Pendant Necklace",
  description: "Collier pendentif soleil style vintage – chaîne en acier inoxydable pour femme, bijou tendance pour tenue quotidienne ou soirée.",
  price: "€8.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/80b7b6d0e01345e89ed098dbc8a03bc6~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729520003944257987"
},
{
  id: 17, // ID unique suivant
  title: "Rhinestone Decorated Bracelet",
  description: "Bracelet décoré de strass – bijou tendance et raffiné pour femmes et hommes, idéal pour un style brillant et un cadeau élégant.",
  price: "€7.99",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/9cddc94d4dab4adab1ef8475f506cf6b~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729482623674652932"
},
{
  id: 18, // ID unique suivant
  title: "Flower Pendant Necklace",
  description: "Collier pendentif fleur avec strass – bijou élégant pour femme, idéal pour les fêtes, le quotidien ou en cadeau raffiné.",
  price: "€9.49",
  image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/d042de1cada44dfc935a5f703f94e236~tplv-o3syd03w52-resize-webp:260:260.webp",
  tiktokLink: "https://www.tiktok.com/view/product/1729483760280967371"
},
],

  	  beaute: [
{
  id: 1, 
  name: "Snowolf - Teddybär (110cm, 120cm, 140cm)",
  image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/24654632d60642fc9ff8e9848f571500~tplv-aphluv4xwc-resize-webp:260:260.webp",
  price: "29.99€",
  description: "Riesiger Teddybär, perfektes Geschenk für Kinder, Freundin, Weihnachten, Valentinstag, Geburtstag.",
  tiktokLink: "https://www.tiktok.com/view/product/1729509047093599085"
},
{
  id: 2,
  name: "Mini-Rosen-Teddybär",
  image: "https://p16-oec-eu-common-no.tiktokcdn-eu.com/tos-no1a-i-t5fjg24jzw-no/a4d1a992d86f4deb92b0f007f5b60617~tplv-t5fjg24jzw-resize-webp:260:260.webp",
  price: "14.99€",
  description: "Bezaubernder Mini-Rosen-Teddybär – Romantisches Geschenk für Valentinstag, Muttertag, Geburtstag oder Weihnachten.",
  tiktokLink: "https://www.tiktok.com/view/product/1729543362580159065"
},


  ],
};
