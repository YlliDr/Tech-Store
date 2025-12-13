const products = [


    {
    img: "images/card-1.jpeg",
    title: "Apple iPhone 17 Pro Max",
    price: 1699.5,
    desc: "Smartfon flagship i Apple me performancë maksimale dhe kamera profesionale.",
    specs: [
      "256GB Storage",
      "A18 Bionic",
      "6.9\" OLED ProMotion 120Hz",
      "48MP Triple Camera",
      "Titanium Frame",
      "Face ID"
    ],
    category: "Smartphones",
    warranty: "12 muaj",
    stock: true
    },


    {
    img: "images/card-2.jpeg",
    title: "Gigabyte GeForce GT 710",
    price: 82.5,
    desc: "Kartelë grafike bazike për përdorim zyre dhe multimedia.",
    specs: [
      "2GB DDR3",
      "Low Profile",
      "HDMI / VGA",
      "Silent Cooling",
      "PCIe 2.0"
    ],
    category: "Graphics Cards",
    warranty: "24 muaj",
    stock: true
    },


    {
    img: "images/card-3.jpeg",
    title: "Blow BT460 Bluetooth Speaker",
    price: 29.5,
    desc: "Altoparlant portativ me Bluetooth dhe bass të theksuar.",
    specs: [
      "Bluetooth 5.0",
      "10W Output",
      "FM Radio",
      "USB / AUX",
      "Battery 1200mAh"
    ],
    category: "Audio",
    warranty: "12 muaj",
    stock: true
    },


    {
    img: "images/card-4.jpeg",
    title: "Samsung Galaxy Tab A9+ LTE",
    price: 249.5,
    desc: "Tablet praktik për studim dhe argëtim me lidhje LTE.",
    specs: [
      "6GB RAM / 128GB Storage",
      "11\" Display",
      "LTE Connectivity",
      "Android 14",
      "Quad Speakers"
    ],
    category: "Tablets",
    warranty: "12 muaj",
    stock: true
    },


    {
    img: "images/card-5.jpeg",
    title: "Tastierë Redragon K606 Lakshmi Red",
    price: 37.5,
    desc: "Tastierë mekanike për gaming me Lakshmi Red.",
    specs: [
        "Cherry MX Red",
        "Anti-ghosting",
        "RGB lighting",
        "USB connection"
    ],
    category: "Gaming",
    warranty: "12 muaj",
    stock: true
    },


    {
    img: "images/card-6.jpeg",
    title: "MediaTech ZONE MT1258 Mechanical Keyboard",
    price: 31.5,
    desc: "Tastierë mekanike për gaming me Cherry MX Red.",
    specs: [
        "Cherry MX Red",
        "Anti-ghosting",
        "RGB lighting",
        "USB connection"
    ],
    category: "Gaming",
    warranty: "12 muaj",
    stock: true
    },


    {
    img: "images/card-7.jpeg",
    title: "Grundig 65GIQ8950B QLED TV",
    price: 35,
    desc: "Televizor QLED 65\" me cilësi premium të figurës.",
    specs: [
        "65\" QLED",
        "4K Ultra HD",
        "HDR10+",
        "Smart TV"
    ],
    category: "TV",
    warranty: "24 muaj",
    stock: true
    },


    {
    img: "images/card-8.webp",
    title: "Lenovo B210 Laptop Backpack",
    price: 19.5,
    desc: "Çantë shpine praktike dhe rezistente për laptopë deri në 15.6\".",
    specs: [
        "Laptop deri 15.6\"",
        "Material rezistent ndaj ujit",
        "Xhep i brendshëm i mbrojtur",
        "Dizajn minimalist"
    ],
    category: "Accessories",
    warranty: "6 muaj",
    stock: true
    },


    {
    img: "images/card-9.webp",
    title: "Iso Trade XXL Mousepad",
    price: 9.5,
    desc: "Mauspad XXL për gaming dhe punë profesionale.",
    specs: [
      "900 x 400 mm",
      "Anti-slip base",
      "Water-resistant",
      "Smooth surface"
    ],
    category: "Accessories",
    warranty: "6 muaj",
    stock: true
    },


    {
    img: "images/card-10.webp",
    title: "SENSE7 Spellcaster Gaming Chair",
    price: 119.5,
    desc: "Karrige ergonomike për gaming dhe punë të gjatë.",
    specs: [
      "Adjustable height",
      "Lumbar support",
      "PU leather",
      "Max load 150kg"
    ],
    category: "Gaming",
    warranty: "24 muaj",
    stock: true
    },


    {
    img: "images/card-11.webp",
    title: "SENSE7 Classic Desk",
    price: 99.5,
    desc: "Tavolinë solide për gaming dhe punë profesionale.",
    specs: [
        "140 x 60 cm",
        "Konstruksion metalik",
        "Sipërfaqe rezistente",
        "Stabilitet i lartë"
    ],
    category: "Furniture",
    warranty: "12 muaj",
    stock: true
    },


    {
    img: "images/card-12.webp",
    title: "Lenovo LOQ Gaming Laptop",
    price: 689.5,
    desc: "Laptop gaming i balancuar për performancë dhe çmim.",
    specs: [
      "AMD Ryzen 5 7235HS",
      "16GB DDR5",
      "512GB SSD",
      "RTX 3050",
      "15.6\" FHD 144Hz"
    ],
    category: "Laptops",
    warranty: "24 muaj",
    stock: false
    },
  

    {
    img: "images/card-13.webp",
    title: "Logitech MK470 Wireless Combo",
    price: 79.5,
    desc: "Set elegant tastierë dhe maus wireless për zyrë.",
    specs: [
        "Wireless 2.4GHz",
        "Ultra-slim design",
        "Silent keys",
        "Battery life 18 muaj"
    ],
    category: "Peripherals",
    warranty: "24 muaj",
    stock: true
    },


    {
    img: "images/card-14.webp",
    title: "Lenovo Legion T5 Gaming PC",
    price: 879.5,
    desc: "Desktop gaming i fuqishëm për performancë të lartë.",
    specs: [
        "Intel Core i5-12400",
        "16GB RAM",
        "1TB SSD",
        "RTX 3060 Ti"
    ],
    category: "Desktops",
    warranty: "24 muaj",
    stock: true
    },


    {
    img: "images/card-15.webp",
    title: "Xiaomi Robot Vacuum S20",
    price: 169.5,
    desc: "Fshesë robotike inteligjente me funksion shtupë.",
    specs: [
        "Navigation smart",
        "Vacuum + Mop",
        "App control",
        "Battery 3200mAh"
    ],
    category: "Home Appliances",
    warranty: "12 muaj",
    stock: true
    },


    {
    img: "images/card-16.webp",
    title: "HP 27\" Monitor Series",
    price: 179.5,
    desc: "Monitor elegant për punë dhe multimedia.",
    specs: [
        "27\" Full HD",
        "100Hz Refresh Rate",
        "IPS Panel",
        "Slim bezels"
    ],
    category: "Monitors",
    warranty: "24 muaj",
    stock: true
    },


    {
    img: "images/card-17.webp",
    title: "AMD Ryzen 7 9800X3D",
    price: 449.5,
    desc: "Procesor ekstrem për gaming dhe performancë të lartë.",
    specs: [
      "8 Cores / 16 Threads",
      "3D V-Cache",
      "AM5 Socket",
      "Up to 5.2GHz"
    ],
    category: "Processors",
    warranty: "36 muaj",
    stock: true
    },


    {
    img: "images/card-18.webp",
    title: "Nintendo Switch 2 + Mario Kart World",
    price: 569.5,
    desc: "Konzolë hibride për argëtim familjar dhe gaming portativ.",
    specs: [
      "OLED Display",
      "4K Dock Output",
      "Joy-Con Controllers",
      "Mario Kart Included"
    ],
    category: "Consoles",
    warranty: "12 muaj",
    stock: true
    },


    {
    img: "images/card-19.webp",
    title: "Lenovo Legion PRO 7",
    price: 1349.5,
    desc: "Laptop gaming premium për entuziastë.",
    specs: [
        "Intel Ultra 9 275HX",
        "32GB RAM",
        "2TB SSD",
        "RTX 5080 16GB"
    ],
    category: "High-End Laptops",
    warranty: "24 muaj",
    stock: false
    },


    {
    img: "images/card-20.webp",
    title: "Samsung Galaxy S25 Ultra",
    price: 3766.5,
    desc: "Smartfon flagship me teknologjinë më të fundit Samsung.",
    specs: [
        "6.9\" AMOLED",
        "12GB RAM / 512GB",
        "200MP Camera",
        "Titanium Body"
    ],
    category: "Smartphones",
    warranty: "12 muaj",
    stock: false
    },


    {
    img: "images/card-21.webp",
    title: "Kysona Jupiter Ultra Mouse",
    price: 59.5,
    desc: "Maus gaming ultra-preciz me polling rate 8K.",
    specs: [
        "8K polling rate",
        "Ultra-lightweight",
        "RGB lighting",
        "Wireless + Wired"
    ],
    category: "Gaming",
    warranty: "12 muaj",
    stock: true
    },


    {
    img: "images/card-22.webp",
    title: "Dunlop 6/12V Battery Charger",
    price: 53.5,
    desc: "Karikues për bateri të makinave dhe pajisje 6/12V me rregullim automatik të tensionit.",
    specs: [
        "6/12V output",
        "1A current",
        "Lead & Gel compatible",
        "LED indicator"
    ],
    category: "Accessories",
    warranty: "12 muaj",
    stock: true
    },

    {
    img: "images/card-23.webp",
    title: "MSI Titan 18 HX",
    price: 5289.5,
    desc: "Laptop ekstrem për profesionistë dhe gaming high-end.",
    specs: [
      "Intel i9-14900HX",
      "128GB RAM",
      "4TB SSD",
      "RTX 4090",
      "18\" 4K Mini-LED"
    ],
    category: "High-End Laptops",
    warranty: "24 muaj",
    stock: false
    },
    

    {
    img: "images/card-24.webp",
    title: "HyperX Cloud III Headset",
    price: 89.5,
    desc: "Kufje gaming me cilësi të lartë audio dhe komoditet gjatë përdorimit të gjatë.",
    specs: [
        "7.1 Surround Sound",
        "Noise-cancelling mic",
        "Memory foam ear cushions",
        "USB connectivity"
    ],
    category: "Audio",
    warranty: "12 muaj",
    stock: true
    },

    {
    img: "images/card-25.webp",
    title: "Apple iPhone 17 Pro Max Clear Case",
    price: 69.5,
    desc: "Këllëf transparent për iPhone 17 Pro Max me mbrojtje të fortë dhe mbështetje MagSafe.",
    specs: [
        "Transparent design",
        "MagSafe compatible",
        "Shock absorption",
        "Scratch-resistant"
    ],
    category: "Accessories",
    warranty: "6 muaj",
    stock: true
    },


    {
    img: "images/card-26.webp",
    title: "SENSE7 Spellcaster FUKU XL Chair",
    price: 149.5,
    desc: "Karrige ekstra e madhe për gaming dhe punë me lëkurë dhe material rezistent.",
    specs: [
        "Adjustable height & recline",
        "PU + Fabric",
        "Max load 200kg",
        "Ergonomic lumbar support"
    ],
    category: "Gaming",
    warranty: "24 muaj",
    stock: true
    },


    {
    img: "images/card-27.webp",
    title: "Apple MacBook Air 13.6\" M2",
    price: 1199.5,
    desc: "Laptop i lehtë dhe i fuqishëm për punë dhe studim me procesor Apple M2.",
    specs: [
        "M2 8-core CPU",
        "16GB RAM",
        "256GB SSD",
        "8-core GPU",
        "13.6\" Retina Display"
    ],
    category: "Laptops",
    warranty: "12 muaj",
    stock: true
    },


    {
    img: "images/card-28.webp",
    title: "muPAD L10 Tablet",
    price: 49.5,
    desc: "Tablet 10.1\" për përdorim bazik me 4GB RAM dhe 64GB storage, LTE e përfshirë.",
    specs: [
        "10.1\" IPS Display",
        "4GB RAM / 64GB Storage",
        "LTE Connectivity",
        "Android 13",
        "Protective case included"
    ],
    category: "Tablets",
    warranty: "12 muaj",
    stock: true
    },

        
    {
    img: "images/card-29.webp",
    title: "Krux Space Carpet MAX Mousepad",
    price: 29.5,
    desc: "Mauspad XXL shumëngjyrësh me sipërfaqe të lëmuar për gaming dhe punë.",
    specs: [
        "1200 x 600 mm",
        "Smooth surface",
        "Anti-slip base",
        "Water-resistant"
    ],
    category: "Accessories",
    warranty: "6 muaj",
    stock: true
    },


    {
    img: "images/card-30.webp",
    title: "Philips XB2125/09 Vacuum Cleaner",
    price: 149.9,
    desc: "Thithëse elektrike për pastrim të shpejtë dhe efikas me motor 850W.",
    specs: [
        "850W Power",
        "Bagless",
        "HEPA filter",
        "Lightweight design"
    ],
    category: "Home Appliances",
    warranty: "12 muaj",
    stock: true
    },


    {
    img: "images/card-31.webp",
    title: "Apple AirPods Pro (3rd Gen)",
    price: 299.5,
    desc: "Kufje wireless premium me anulim aktiv të zhurmës.",
    specs: [
        "Active Noise Cancellation",
        "Transparency Mode",
        "MagSafe Case USB-C",
        "Spatial Audio"
    ],
    category: "Audio",
    warranty: "12 muaj",
    stock: true
    },


    {
    img: "images/card-32.webp",
    title: "Samsung Galaxy A56 5G",
    price: 359.5,
    desc: "Smartfon me performancë të mirë dhe lidhje 5G për përdorim të shpejtë dhe efikas.",
    specs: [
        "6.5\" AMOLED Display",
        "8GB RAM / 128GB Storage",
        "64MP + 12MP Camera",
        "5G Connectivity",
        "Android 14"
    ],
    category: "Smartphones",
    warranty: "12 muaj",
    stock: true
    },

];


// get product id from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");


const product = products[id];
const container = document.getElementById("productDetails");



if (!product) {
  container.innerHTML = "<h2>Product not found</h2>";
} else {
    let stockQty;
    if (product.price < 50) stockQty = 120;
    else if (product.price < 150) stockQty = 60;
    else if (product.price < 500) stockQty = 25;
    else stockQty = 8;

const stockText =
  stockQty > 20 ? "In stock" :
  stockQty > 0 ? "Limited stock" :
  "Out of stock";
  container.innerHTML = `
<div class="product-page">
  <div class="row g-5">

    <!-- LEFT -->
    <div class="col-md-6">
      <div class="product-img-box mb-4">
        <img src="${product.img}" class="img-fluid" />
      </div>

      <ul class="nav product-tabs">
        <li class="nav-item">
          <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#desc">
            Description
          </button>
        </li>
        <li class="nav-item">
          <button class="nav-link" data-bs-toggle="tab" data-bs-target="#specs">
            Specifications
          </button>
        </li>
      </ul>

      <div class="tab-content product-tab-content">
        <div class="tab-pane fade show active" id="desc">
          <p>${product.desc}</p>
          <p>
            This product is designed to meet modern user needs, combining
            performance, durability, and elegant design. Ideal for both
            professional and everyday use, it offers reliable operation,
            optimized efficiency, and long-term value.
          </p>
          <p>
            Carefully selected materials and advanced technology ensure
            consistent performance even under intensive usage.
          </p>
        </div>

        <div class="tab-pane fade" id="specs">
          <ul>
            ${product.specs.map(s => `<li>${s}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>

    <!-- RIGHT -->
    <div class="col-md-6">
      <div class="buy-box">
        <div class="d-flex justify-content-between align-items-start">
          <h2>${product.title}</h2>
          <button class="wishlist" title="Add to wishlist">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>

        <p class="price">$${product.price}</p>
        <p class="small fw-semibold">
          Availability: <span class="${stockQty > 20 ? "text-success" : "text-warning"}">
            ${stockText} (${stockQty} pcs)
          </span>
        </p>

        <!-- COLOR -->
        <div class="option-group mb-3">
          <label>Color</label>
          <div class="d-flex gap-2">
            <div class="color-option active" style="background:#000"></div>
            <div class="color-option" style="background:#777"></div>
            <div class="color-option" style="background:#c96"></div>
          </div>
        </div>

        <!-- QUANTITY -->
        <div class="option-group mb-4">
          <label>Quantity</label>
          <input type="number" min="1" max="${stockQty}" value="1" class="form-control qty-input">
          <small class="text-muted">Max ${stockQty} per order</small>
        </div>

        <button class="card-btn w-100 mb-3" ${stockQty === 0 ? "disabled" : ""}>
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>

        <!-- TRUST -->
        <div class="trust-icons mt-3">
          <p class="small mb-2 fw-semibold">Why buy from us?</p>
          <i class="fas fa-truck-fast"></i> Fast delivery (24–48h)<br>
          <i class="fas fa-shield-halved"></i> Official warranty<br>
          <i class="fas fa-rotate-left"></i> 14-day return policy
        </div>
      </div>
    </div>

  </div>
</div>
`;
}
