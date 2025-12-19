// ===================== DATA =====================
const products = [
  { img: "images/card-1.jpeg", desc: "Apple iPhone 17 Pro Max, 256GB, Cosmic Orange", price: 1699.50, date: "2025-01-15"},
  { img: "images/card-2.jpeg", desc: "Kartelë grafike Gigabyte GeForce GT 710, 2GB DDR3", price: 82.50, date: "2023-05-20" },
  { img: "images/card-3.jpeg", desc: "Altoparlant Blow BT460, hirtë", price: 29.50, date: "2023-05-20" },
  { img: "images/card-4.jpeg", desc: "Tablet Samsung Galaxy Tab A9+ LTE X216, 6/128, i hirtë", price: 249.50, date: "2024-09-01" },

  { img: "images/card-5.jpeg", desc: "Tablet Samsung Galaxy Tab A9+ LTE X216, 6/128, i hirtë", price: 249.50,date: "2024-09-01" },
  { img: "images/card-6.jpeg", desc: "Tastierë Redragon K606 Lakshmi Red", price: 37.5, date: "2024-04-14" },
  { img: "images/card-7.jpeg", desc: "Tastierë mekanike MediaTech ZONE MT1258, Cherry MX Red, e zezë", price: 35, date: "2023-12-02"},
  { img: "images/card-8.webp", desc: "Çantë shpine Lenovo B210 për laptop, 15.6", price: 19.5,date: "2024-03-09" },


  { img: "images/card-9.webp", desc: "Mauspad Iso Trade Trade, XXL, i zi", price: 9.5, date: "2023-07-25"},
  { img: "images/card-10.webp", desc: "Karrige SENSE7 Spellcaster, e zezë", price: 119.5,date: "2024-08-15" },
  
];


// ===================== ELEMENTS =====================
const productRows = document.getElementById("productRows");
const searchBox = document.getElementById("searchbox");
const sortRadios = document.querySelectorAll("input[name='sort']");


// ===================== RENDER PRODUCTS =====================
function renderProducts(list) {
  let html = "";

  list.forEach((p, i) => {
    html += `
      <div class="col-6 col-sm-12 col-md-6 col-lg-3 mb-3">
        <div class="card" onclick="goToProduct(${i})" style="cursor: pointer;">
          <img src="${p.img}" alt="Product image">
          <p class="prod-desc">${p.desc}</p>
          <p class="price">$${p.price}</p>

          <button class="card-btn" onclick="event.stopPropagation()">
            <i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Add to Cart
          </button>
        </div>
      </div>
    `;
  });

  productRows.innerHTML = `<div class="row g-2">${html}</div>`;
}


// ===================== FILTERING =====================
function applyFilters() {
  let filtered = [...products];

  // SEARCH
  const query = searchBox.value.toLowerCase();
  if (query) {
    filtered = filtered.filter(p => p.desc.toLowerCase().includes(query));
  }

  // SORT
  const sortValue = document.querySelector("input[name='sort']:checked").value;

  if (sortValue === "price_asc") {
    filtered.sort((a, b) => a.price - b.price);

  } else if (sortValue === "price_desc") {
    filtered.sort((a, b) => b.price - a.price);

  } else if (sortValue === "rating") {
    // You don’t have ratings, so shuffle
    filtered.sort(() => Math.random() - 0.5);

  } else if (sortValue === "new") {
    filtered = [...filtered]; // keep default order
  }

  renderProducts(filtered);
}


// ===================== EVENTS =====================
searchBox.addEventListener("input", applyFilters);
sortRadios.forEach(r => r.addEventListener("change", applyFilters));


// INITIAL RENDER
applyFilters();


// ===================== NAVIGATION =====================
function goToProduct(id) {
  window.location.href = `product.html?id=${id}`;
}


// ===================== SCROLL TO TOP =====================
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("visible", window.scrollY > 150);
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
