

export interface Product {
  id: number;
  qty: number;
  title: string;
  size: string;
  price: number;
  image: string;
  description: string;
}

export const nikeFootballBoots: Product[] = [
  {
    id: 1,
    qty: 15,
    title: "Nike Vapor 16 Elite FG",
    size: "40",
    price: 275,
    image:
      "https://www.nike.qa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw45cbf6c4/nk/NK_/N/K/I/O/3/7/NK_NKIO3791_701_198960585641_1.jpg?sw=1040&sh=1040&sm=fit",
    description:
      "Built for speed with an ultra-responsive 3/4 Air Zoom unit and Vaporposite+ upper for maximum grip and ball control.",
  },
  {
    id: 2,
    qty: 8,
    title: "Nike Superfly 10 Academy",
    size: "41",
    price: 300,
    image:
      "https://therugbyshop.co.uk/wp-content/uploads/2026/09/Screenshot-2026-09-28-at-12.59.41-450x450.png",
    description:
      "Features a Dynamic Fit collar wrapping your ankle in soft, stretchy fabric for a secure, locked-in feel on firm ground.",
  },
  {
    id: 3,
    qty: 20,
    title: "Nike Phantom GX 2 Elite",
    size: "39",
    price: 260,
    image:
      "https://therugbyshop.co.uk/wp-content/uploads/2026/09/Screenshot-2026-09-28-at-14.30.21-450x450.png",
    description:
      "Designed for precision playmakers featuring revolutionary Nike Gripknit technology for optimal touch in dry or wet conditions.",
  },
  {
    id: 4,
    qty: 12,
    title: "Nike Tiempo Legend 10 Academy",
    size: "40",
    price: 230,
    image:
      "https://therugbyshop.co.uk/wp-content/uploads/2026/10/Screenshot-2026-10-02-at-15.14.31-450x450.png",
    description:
      "Engineered FlyTouch Plus leather delivers an incredibly soft feel that molds to your foot without over-stretching.",
  },
  {
    id: 5,
    qty: 5,
    title: "Nike Premier 3 FG",
    size: "39",
    price: 120,
    image:
      "https://therugbyshop.co.uk/wp-content/uploads/2026/02/Screenshot-2026-02-06-at-20.35.26-450x450.png",
    description:
      "Classic design crafted with supple kangaroo leather for a timeless look and uncompromised comfort on the pitch.",
  },
];

export const adidasFootballBoot: Product[] = [
  {
    id: 6,
    qty: 12,
    title: "Adidas Predator Elite FG",
    size: "UK 9",
    price: 260,
    image:
      "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/f02e642f60824bc896b0c26b70dd2d2d_9366/F50_HYPERFAST_LEAGUE_Mid_Soft_Ground_Football_Boots_Black_HQ2376_01_00_standard_hover.jpg",
    description:
      "Engineered for precision and goals, featuring Strikeskin fins for maximum grip on the ball and a HybridTouch 2.0 upper.",
  },
  {
    id: 7,
    qty: 8,
    title: "Adidas X Crazyfast.1 FG",
    size: "UK 8.5",
    price: 240,
    image:
      "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/2863c235a4864236947fa105787385ed_9366/F50_MESSI_ELITE_Firm_Ground_Football_Boots_Red_IH1893_14_hover_standard.jpg",
    description:
      "Designed for ultimate speed and quick acceleration with lightweight Aerocage support and Speedframe outsole.",
  },
  {
    id: 8,
    qty: 15,
    title: "Adidas Copa Pure 2 Pro FG",
    size: "UK 10",
    price: 180,
    image:
      "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/e95a40f1dba04da0a2cd7edf016d4a4a_9366/F50_HYPERFAST_LEAGUE_Laceless_Artificial_Ground_Football_Boots_White_LA1552_01_00_standard_hover.jpg",
    description:
      "Classic leather touch meets modern performance with Fusionskin upper for pure comfort and soft touch on firm ground.",
  },
  {
    id: 9,
    qty: 5,
    title: "Adidas Speedportal.1 SG",
    size: "UK 9.5",
    price: 220,
    image:
      "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/4a99c478c14f4cf39c6112dd3afb460e_9366/Predator_Elite_L-TECH_Fold-Over_Tongue_Soft_Ground_Football_Boots_Black_LA6693_01_00_standard_hover.jpg",
    description:
      "Optimized for soft, muddy pitches with removable steel studs and lightweight Primeknit collar for lock-in support.",
  },
  {
    id: 10,
    qty: 20,
    title: "Adidas Kaiser 5 Liga FG",
    size: "UK 8",
    price: 100,
    image:
      "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/cf248e814697435f97a0efd94f129271_9366/F50_HYPERFAST_CLUB_Firm_Ground_-_Multi_Ground_Football_Boots_Black_KJ0992_01_00_standard_hover.jpg",
    description:
      "Timeless heritage football boot crafted from full-grain leather for classic comfort, durability, and natural feel.",
  },
];

export const allBootProduct: Product[] = [
  ...adidasFootballBoot,
  ...nikeFootballBoots,
];

export interface shirtProduct {
  id: number;
  title: string;
  size: string;
  price: number;
  qty: number;
  description: string;
  footballTeam: string;
  image: string;
}

export const footballShirt: shirtProduct[] = [
  {
    id: 1,
    title: "Real Madrid Home Jersey 2023/24",
    size: "L",
    price: 89.99,
    qty: 15,
    description:
      "Official classic white home jersey featuring gold accents and breathable AEROREADY fabric.",
    footballTeam: "Real Madrid",
    image:
      "https://www.prodirectsport.com/cdn/shop/files/1054071_list.jpg?v=1792060252&width=1200",
  },
  {
    id: 2,
    title: "Arsenal FC Home Shirt 2023/24",
    size: "M",
    price: 85.0,
    qty: 20,
    description:
      "Iconic red body with white sleeves and gold lightning detail on the collar.",
    footballTeam: "Arsenal FC",
    image:
      "https://www.prodirectsport.com/cdn/shop/files/1054048_list.jpg?v=1791999049&width=1200",
  },
  {
    id: 3,
    title: "FC Barcelona Home Jersey 2023/24",
    size: "XL",
    price: 92.5,
    qty: 8,
    description:
      "Traditional Blaugrana stripes performance kit featuring lightweight moisture-wicking technology.",
    footballTeam: "FC Barcelona",
    image:
      "https://www.prodirectsport.com/cdn/shop/files/1053713_main.jpg?v=1792266848&width=1200",
  },
  {
    id: 4,
    title: "Manchester City Away Kit 2023/24",
    size: "S",
    price: 88.0,
    qty: 12,
    description:
      "Sleek metallic off-white design inspired by Manchester's industrial heritage.",
    footballTeam: "Manchester City",
    image:
      "https://www.prodirectsport.com/cdn/shop/files/4000143_main.jpg?v=1792255675&width=1200",
  },
  {
    id: 5,
    title: "PSG Home Stadium Jersey 2023/24",
    size: "M",
    price: 95.0,
    qty: 10,
    description:
      "Classic navy jersey featuring off-center red and white fading stripe detail.",
    footballTeam: "Paris Saint-Germain",
    image:
      "https://www.prodirectsport.com/cdn/shop/files/1053688_main.jpg?v=1792150299&width=1200",
  },
];

export interface Accessory {
  id: number;
  title: string;
  qty: number;
  price: number;
  description: string;
  image: string;
}

export const accessory: Accessory[] = [
  {
    id: 1,
    title: "Pro Shin Guards",
    qty: 25,
    price: 24.99,
    description:
      "Lightweight ergonomic shin guards with high-impact protective shell and soft foam lining.",
    image:
      "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=600&h=600&q=80",
  },
  {
    id: 2,
    title: "Goalkeeper Match Gloves",
    qty: 15,
    price: 49.99,
    description:
      "Professional goalkeeper gloves featuring latex palms for superior grip in all weather conditions.",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&h=600&q=80",
  },
  {
    id: 3,
    title: "Official Match Football Size 5",
    qty: 30,
    price: 39.99,
    description:
      "Thermal-bonded seamless match ball designed for predictable trajectory and accurate touch.",
    image:
      "https://images.unsplash.com/photo-1614632537190-23e4146777db?auto=format&fit=crop&w=600&h=600&q=80",
  },
  {
    id: 4,
    title: "Sock",
    qty: 50,
    price: 9.99,
    description:
      "Elastic captain's armband with secure hook-and-loop closure, fits all arm sizes.",
    image:
      "https://www.futbolemotion.com/imagesarticulos/150176/medianas/calcetines-nike-everyday-3-pares-white-1.webp",
  },
  {
    id: 5,
    title: "Backpack football",
    qty: 40,
    price: 18.5,
    description:
      "Durable high-visibility marker cones perfect for speed, agility, and footwork drills.",
    image:
      "https://www.futbolemotion.com/imagesarticulos/291588/750/mochila-adidas-tiro-power-red-white-0.webp",
  },
];
