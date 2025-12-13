// GENERATING CARDS
const products = [
  { img: "images/card-1.jpeg", desc: "Apple iPhone 17 Pro Max, 256GB, Cosmic Orange", price: 1699.50},
  { img: "images/card-2.jpeg", desc: "Kartelë grafike Gigabyte GeForce GT 710, 2GB DDR3", price: 82.50 },
  { img: "images/card-3.jpeg", desc: "Altoparlant Blow BT460, hirtë", price: 29.50 },
  { img: "images/card-4.jpeg", desc: "Tablet Samsung Galaxy Tab A9+ LTE X216, 6/128, i hirtë", price: 249.50 },


  { img: "images/card-5.jpeg", desc: "Tablet Samsung Galaxy Tab A9+ LTE X216, 6/128, i hirtë", price: 249.50 },
  { img: "images/card-6.jpeg", desc: "Tastierë Redragon K606 Lakshmi Red", price: 37.5, },
  { img: "images/card-7.jpeg", desc: "Tastierë mekanike MediaTech ZONE MT1258, Cherry MX Red, e zezë", price: 35,},
  { img: "images/card-8.webp", desc: "Çantë shpine Lenovo B210 për laptop, 15.6", price: 19.5,},


  { img: "images/card-9.webp", desc: "Mauspad Iso Trade Trade, XXL, i zi", price: 9.5,  hidden: true  },
  { img: "images/card-10.webp", desc: "Karrige SENSE7 Spellcaster, e zezë", price: 119.5,  hidden: true  },
  { img: "images/card-11.webp", desc: "Tavolinë SENSE7 Classic Desk, 140cm x 60cm, e zezë", price: 99.5, hidden: true },
  { img: "images/card-12.webp", desc: "Laptop Lenovo LOQ, 15.6&quot, AMD Ryzen 5 7235HS, 16GB DDR5-SDRAM, 512GB SSD, NVIDIA GeForce RTX 3050, i hirtë", price: 689.5,  hidden: true },
  

  { img: "images/card-13.webp", desc: "Set tastierë dhe maus Logitech Slim Wireless MK470, të bardha", price: 79.5, hidden: true },
  { img: "images/card-14.webp", desc: "Kompjuter Lenovo Gaming Legion T5 26IAB7, Intel Core i5-12400, 1TB SSD, 16 GB RAM, NVIDIA GeForce RTX 3060 Ti, i zi", price: 879.5, hidden: true },
  { img: "images/card-15.webp", desc: "Fshesë robotike Xiaomi S20, me shtupë, e bardhë", price: 169.5, hidden: true },
  { img: "images/card-16.webp", desc: "Monitor HP 27-inch Series, 27&quot, 1920 x 1080, 100 Hz, i bardhë", price: 179.5, hidden: true },

  { img: "images/card-17.webp", desc: "Procesor AMD Ryzen 7 9800X3D, Tray", price: 449.5,  hidden: true  },
  { img: "images/card-18.webp", desc: "Konzolë Nintendo Switch 2 + Mario Card World", price: 569.5, hidden: true },
  { img: "images/card-19.webp", desc: "Laptop Lenovo Legion PRO 7 16IAX10H, 16&quot, WQXGA, Intel Ultra9 275HX, 32GB RAM, 2TB SSD, Nvidia RTX 5080 16GB, i zi", price: 1349.5, hidden: true },
  { img: "images/card-20.webp", desc: "Celular Samsung Galaxy S25 Ultra, 6.9&quot, 12GB/ 512GB, Titanium Gray", price: 3766.5, hidden: true },


  { img: "images/card-21.webp", desc: "Maus Kysona Jupiter Ultra dual 8k, i kuq", price: 59.5, hidden: true },
  { img: "images/card-22.webp", desc: "Karikues për bateri Dunlop 6/12 V 1A Lead & Gel", price: 53.5, hidden: true },
  { img: "images/card-23.webp", desc: "Laptop MSI Titan 18 HX A14VIG, 18&quot, 4K, Intel i9-14900HX, 128GB RAM, 2TB + 2TB SSD, RTX 4090, i zi", price: 5289.5, hidden: true },
  { img: "images/card-24.webp", desc: "Kufje HyperX Cloud III (727A9AA), të zeza/ kuqe", price: 89.5, hidden: true },



  { img: "images/card-25.webp", desc: "Apple iPhone 17 Pro Max Clear Case with MagSafe", price: 69.5, hidden: true },
  { img: "images/card-26.webp", desc: "Karrige SENSE7 Spellcaster FUKU XL, material+lëkurë, e zezë/ hirtë", price: 149.5, hidden: true },
  { img: "images/card-27.webp", desc: "Apple MacBook Air 13.6&quot, M2 8-core, 16GB, 256GB, 8-core GPU, Midnight", price: 1199.5, hidden: true },
  { img: "images/card-28.webp", desc: "Tablet muPAD L10, 10.1&quot, 4GB/ 64GB, LTE, i argjendtë + Këllëf mbrojtës", price: 49.5, hidden: true },
  
  { img: "images/card-29.webp", desc: "Mauspad Krux Space Carpet MAX, XXXL, shumëngjyrësh", price: 29.5, hidden: true },
  { img: "images/card-30.webp", desc: "Thithëse elektrike Philips XB2125/09, 850 W, e kaltër", price: 149.9, hidden: true },
  { img: "images/card-31.webp", desc: "Apple AirPods Pro3 with MagSafe Case (USB-C)", price: 299.5, hidden: true },
  { img: "images/card-32.webp", desc: "Celular Samsung Galaxy A56 5G, 8/128GB, i zi", price: 359.5, hidden: true },
  
  
  
  { img: "images/card-33.webp", desc: "Monitorues për foshnje Avent SCD921/26", price: 419.5, hidden: true },
  { img: "images/card-34.webp", desc: "Celular Samsung Galaxy S25 Ultra, 6.9&quot, 12GB/ 512GB, Titanium Black", price: 1349.5, hidden: true },
  { img: "images/card-35.webp", desc: "Fshesë robotike Xiaomi Robot Vacuum X10 EU", price: 492.5, hidden: true },
  { img: "images/card-36.webp", desc: "Maus Logitech MX Master 3S, grafit", price: 99.5, hidden: true },
  
  
  { img: "images/card-37.webp", desc: "Kuletë kartash për celular ESR, e kaftë", price: 19.5, hidden: true },
];

const productRows = document.getElementById("productRows");
let html = "";

products.forEach((p, i) => {
  if (i % 4 === 0) html += `<div class="row g-2">`; 

 html += `
  <div class="col-6 col-sm-12 col-md-6 col-lg-3">
    <div 
      class="card ${p.hidden ? "hidden" : ""}"  
      onclick="goToProduct(${i})"
      style="cursor: pointer;"
    >
      <img src="${p.img}" alt="Product image">
      <p class="prod-desc">${p.desc}</p>
      <p class="price">$${p.price}</p>

      <button 
        class="card-btn"
        onclick="event.stopPropagation()"
      >
        <i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Add to Cart
      </button>
    </div>
  </div>
`;
 
  if (i % 4 === 3) html += `</div>`;
});

productRows.innerHTML = html;


// SHOW MORE / SHOW LESS 
const btn = document.getElementById("toggleVisibility");
const hiddenCards = document.querySelectorAll(".card.hidden");

btn.addEventListener("click", () => {
  hiddenCards.forEach(card => card.classList.toggle("hidden"));

  btn.textContent =
    btn.textContent === "Show more" ? "Show less" : "Show more";
});


function goToProduct(id) {
  window.location.href = `product.html?id=${id}`;
}



// SCROLL TO TOP
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("visible", window.scrollY > 150);
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
