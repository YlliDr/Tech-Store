// GENERATING CARDS
const products = [
  { id:0, img: "images/card-1.jpeg", desc: "Apple iPhone 17 Pro Max, 256GB, Cosmic Orange", price: 1699.50, rating: 4.8 },
  { id:1, img: "images/card-2.jpeg", desc: "Kartelë grafike Gigabyte GeForce GT 710, 2GB DDR3", price: 82.50, rating: 3.2 },
  { id:2, img: "images/card-3.jpeg", desc: "Altoparlant Blow BT460, hirtë", price: 29.50, rating: 3.9 },
  { id:3, img: "images/card-4.jpeg", desc: "Tablet Samsung Galaxy Tab A9+ LTE X216, 6/128, i hirtë", price: 249.50, rating: 4.3 },

  { id:4, img: "images/card-5.jpeg", desc: "Tablet Samsung Galaxy Tab A9+ LTE X216, 6/128, i hirtë", price: 249.50, rating: 4.2 },
  { id:5, img: "images/card-6.jpeg", desc: "Tastierë Redragon K606 Lakshmi Red", price: 37.50, rating: 4.1 },
  { id:6, img: "images/card-7.jpeg", desc: "Tastierë mekanike MediaTech ZONE MT1258, Cherry MX Red, e zezë", price: 35.00, rating: 3.8 },
  { id:7, img: "images/card-8.webp", desc: "Çantë shpine Lenovo B210 për laptop, 15.6\"", price: 19.50, rating: 4.0 },

  { id:8, img: "images/card-9.webp", desc: "Mauspad Iso Trade Trade, XXL, i zi", price: 9.50, rating: 3.5 },
  { id:9, img: "images/card-10.webp", desc: "Karrige SENSE7 Spellcaster, e zezë", price: 119.50, rating: 4.4 },
  { id:10, img: "images/card-11.webp", desc: "Tavolinë SENSE7 Classic Desk, 140cm x 60cm, e zezë", price: 99.50, rating: 4.1 },
  { id:11, img: "images/card-12.webp", desc: "Laptop Lenovo LOQ, 15.6\", AMD Ryzen 5 7235HS, 16GB DDR5-SDRAM, 512GB SSD, NVIDIA GeForce RTX 3050, i hirtë", price: 689.50, rating: 4.6 },

  { id:12, img: "images/card-13.webp", desc: "Set tastierë dhe maus Logitech Slim Wireless MK470, të bardha", price: 79.50, rating: 4.2 },
  { id:13, img: "images/card-14.webp", desc: "Kompjuter Lenovo Gaming Legion T5 26IAB7, Intel Core i5-12400, 1TB SSD, 16 GB RAM, NVIDIA GeForce RTX 3060 Ti, i zi", price: 879.50, rating: 4.7 },
  { id:14, img: "images/card-15.webp", desc: "Fshesë robotike Xiaomi S20, me shtupë, e bardhë", price: 169.50, rating: 4.3 },
  { id:15, img: "images/card-16.webp", desc: "Monitor HP 27-inch Series, 27\", 1920 x 1080, 100 Hz, i bardhë", price: 179.50, rating: 4.0 },

  { id:16, img: "images/card-17.webp", desc: "Procesor AMD Ryzen 7 9800X3D, Tray", price: 449.50, rating: 4.9 },
  { id:17, img: "images/card-18.webp", desc: "Konzolë Nintendo Switch 2 + Mario Card World", price: 569.50, rating: 4.8 },
  { id:18, img: "images/card-19.webp", desc: "Laptop Lenovo Legion PRO 7 16IAX10H, 16\", WQXGA, Intel Ultra9 275HX, 32GB RAM, 2TB SSD, Nvidia RTX 5080 16GB, i zi", price: 1349.50, rating: 4.9 },
  { id:19, img: "images/card-20.webp", desc: "Celular Samsung Galaxy S25 Ultra, 6.9\", 12GB / 512GB, Titanium Gray", price: 3766.50, rating: 4.8 },

  { id:20, img: "images/card-21.webp", desc: "Maus Kysona Jupiter Ultra dual 8k, i kuq", price: 59.50, rating: 4.2 },
  { id:21, img: "images/card-22.webp", desc: "Karikues për bateri Dunlop 6/12 V 1A Lead & Gel", price: 53.50, rating: 3.6 },
  { id:22, img: "images/card-23.webp", desc: "Laptop MSI Titan 18 HX A14VIG, 18\", 4K, Intel i9-14900HX, 128GB RAM, 2TB + 2TB SSD, RTX 4090, i zi", price: 5289.50, rating: 4.9 },
  { id:23, img: "images/card-24.webp", desc: "Kufje HyperX Cloud III (727A9AA), të zeza / kuqe", price: 89.50, rating: 4.4 },

  { id:24, img: "images/card-25.webp", desc: "Apple iPhone 17 Pro Max Clear Case with MagSafe", price: 69.50, rating: 4.1 },
  { id:25, img: "images/card-26.webp", desc: "Karrige SENSE7 Spellcaster FUKU XL, material + lëkurë, e zezë / hirtë", price: 149.50, rating: 4.3 },
  { id:26, img: "images/card-27.webp", desc: "Apple MacBook Air 13.6\", M2 8-core, 16GB, 256GB, 8-core GPU, Midnight", price: 1199.50, rating: 4.6 },
  { id:27, img: "images/card-28.webp", desc: "Tablet muPAD L10, 10.1\", 4GB / 64GB, LTE, i argjendtë + Këllëf mbrojtës", price: 49.50, rating: 3.4 },

  { id:28, img: "images/card-29.webp", desc: "Mauspad Krux Space Carpet MAX, XXXL, shumëngjyrësh", price: 29.50, rating: 3.9 },
  { id:29, img: "images/card-30.webp", desc: "Thithëse elektrike Philips XB2125/09, 850 W, e kaltër", price: 149.90, rating: 4.2 },
  { id:30, img: "images/card-31.webp", desc: "Apple AirPods Pro3 with MagSafe Case (USB-C)", price: 299.50, rating: 4.7 },
  { id:31, img: "images/card-32.webp", desc: "Celular Samsung Galaxy A56 5G, 8/128GB, i zi", price: 359.50, rating: 4.1 },

  { id:32, img: "images/card-33.webp", desc: "Monitorues për foshnje Avent SCD921/26", price: 419.50, rating: 4.5 },
  { id:33, img: "images/card-34.webp", desc: "Celular Samsung Galaxy S25 Ultra, 6.9\", 12GB / 512GB, Titanium Black", price: 1349.50, rating: 4.8 },
  { id:34, img: "images/card-35.webp", desc: "Fshesë robotike Xiaomi Robot Vacuum X10 EU", price: 492.50, rating: 4.4 },
  { id:35, img: "images/card-36.webp", desc: "Maus Logitech MX Master 3S, grafit", price: 99.50, rating: 4.6 },

  { id:36, img: "images/card-37.webp", desc: "Kuletë kartash për celular ESR, e kaftë", price: 19.50, rating: 3.7 }
];


document.addEventListener("DOMContentLoaded", () => {


  const cartPopup = document.getElementById("cart-popup");
  const cartItemsEl = document.getElementById("cart-items");
  const cartTotalEl = document.getElementById("cart-total");
  const cartBtn = document.getElementById("cart-btn");
//   const checkoutBtn = document.getElementById("go-payment");
  

//   if (checkoutBtn) {
//   checkoutBtn.addEventListener("click", () => {
//     if (cart.length === 0) {
//       alert("Your cart is empty");
//       return;
//     }

//     // ✅ SAVE cart snapshot for payment page
//     localStorage.setItem("checkoutCart", JSON.stringify(cart));

//     // ✅ Redirect
//     window.location.href = "payment.html";
//   });
// }


  // ===================== SAFETY CHECK =====================
  if (typeof products === "undefined" || !Array.isArray(products)) {
    console.error("❌ products array is missing or invalid");
    return;
  }

  // ===================== DATA STATE =====================
  let filteredProducts = [...products];
  let visibleCount = 8;
  const STEP = 8;

  // ===================== ELEMENTS =====================
  const productRows = document.getElementById("productRows");
  const searchBox = document.getElementById("searchbox");
  const btn = document.getElementById("toggleVisibility");

  if (!productRows) {
    console.error("❌ #productRows not found");
    return;
  }

  // ===================== RENDER PRODUCTS =====================
  function renderProducts(list) {
    let html = "";

    list.slice(0, visibleCount).forEach((p, index) => {
      html += `
        <div class="col-6 col-sm-12 col-md-6 col-lg-3 mb-3">
          <div class="card product-card" data-id="${p.id}" style="cursor:pointer;">
            <img src="${p.img}" alt="${p.desc}">
            <p class="prod-desc">${p.desc}</p>
          <div class="price-rating">
            <p class="price">$${p.price.toFixed(2)}</p>

            <div class="rating-box">
              <span class="star">★</span>
              <span class="rating-number">${p.rating}</span>
            </div>
          </div>

           <button class="card-btn add-to-cart" data-id="${p.id}">
            <i class="fas fa-shopping-cart"></i>&nbsp;Add to Cart
          </button>

          </div>
        </div>
      `;
    });

    productRows.innerHTML = `<div class="row g-2">${html}</div>`;

    if (btn) {
      btn.style.display =
        visibleCount >= list.length ? "none" : "block";
    }



let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
productRows.addEventListener("click", (e) => {

  // 1️⃣ ADD TO CART CLICK
  const cartBtn = e.target.closest(".add-to-cart");
  if (cartBtn) {
    e.preventDefault();
    e.stopPropagation();

    const id = Number(cartBtn.dataset.id);
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({
        id: product.id,
        title: product.desc,
        price: product.price,
        img: product.img,
        qty: 1
      });
    }

    saveCart();
    renderCart();
    openCart();
    return; // ⛔ STOP HERE
  }

  // 2️⃣ PRODUCT CARD CLICK (NAVIGATION)
  const card = e.target.closest(".product-card");
  if (!card) return;

  const id = Number(card.dataset.id);
  window.location.href = `product.html?id=${id}`;
});




// RENDER CART
function renderCart() {
  if (!cartPopup || !cartItemsEl || !cartTotalEl) return;
  cartItemsEl.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;

    cartItemsEl.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}">
        <div class="cart-item-info">
          <p>${item.title}</p>
          <p>$${item.price}</p>
          <div class="qty-controls">
              <button data-action="dec" data-id="${item.id}">-</button>
              <span>${item.qty}</span>
              <button data-action="inc" data-id="${item.id}">+</button>
          </div>
        </div>
      </div>
    `;
  });

    cartTotalEl.textContent = `$${total.toFixed(2)}`;
  }

  // INITIAL LOAD
  renderCart();

  // UPDATE QTY
  function updateQty(id, change) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.qty += change;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== id);
    }

    saveCart();
    renderCart();
  }

  cartItemsEl.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const id = Number(btn.dataset.id);
    if (btn.dataset.action === "inc") updateQty(id, 1);
    if (btn.dataset.action === "dec") updateQty(id, -1);
  });



  // toggle cart from icon
  cartBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    cartPopup.classList.toggle("active");
  });

  // allow clicks inside cart
  cartPopup.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // close on outside click
  document.addEventListener("click", (e) => {
  if (!cartPopup.classList.contains("active")) return;

  if (
    cartPopup.contains(e.target) ||
    e.target.closest("#cart-btn")
  ) {
    return;
  }

  cartPopup.classList.remove("active");
});

  // STORAGE
  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // POPUP CONTROL
  function openCart() {
    cartPopup.classList.add("active");
  }

   const categoryButtons = document.querySelectorAll(".buy-btn");

  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category.toLowerCase();

      filteredProducts = filteredProducts.filter(p => {
        const d = p.desc.toLowerCase();

        if (category === "pc") {
          return d.includes("kompjuter") || d.includes("desktop");
        }

        if (category === "laptop") {
          return d.includes("laptop");
        }

        if (category === "monitor") {
          return d.includes("monitor");
        }

        return false;
      });

      visibleCount = 8;
      renderProducts(filteredProducts);
    });
  });
}


  // FILTERING
 function applyFilters() {
  filteredProducts = [...products];

  // SEARCH
  if (searchBox) {
    const query = searchBox.value.trim().toLowerCase();
    if (query) {
      filteredProducts = filteredProducts.filter(p =>
        p.desc.toLowerCase().includes(query)
      );
    }
  }

  // SORT
  const checkedSort = document.querySelector("input[name='sort']:checked");
  const sortValue = checkedSort ? checkedSort.value : "new";

  if (sortValue === "price_asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortValue === "price_desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortValue === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  visibleCount = 8;
  renderProducts(filteredProducts);
}

 
  

  const brandBoxes = document.querySelectorAll(".brand-box");

  brandBoxes.forEach(box => {
    box.addEventListener("click", () => {
      const brand = box.dataset.brand.toLowerCase();

      filteredProducts = products.filter(p =>
        p.desc.toLowerCase().includes(brand)
      );

      visibleCount = 8;
      renderProducts(filteredProducts);
    });
  });


  // ===================== SHOW MORE =====================
  if (btn) {
    btn.addEventListener("click", () => {
      visibleCount += STEP;
      renderProducts(filteredProducts);
    });
  }


  // ===================== INITIAL RENDER =====================
  renderProducts(filteredProducts);

  // ===================== EVENTS =====================
  if (searchBox) {
    searchBox.addEventListener("input", applyFilters);
  }

  document.querySelectorAll("input[name='sort']").forEach(radio => {
    radio.addEventListener("change", applyFilters);
  });

});

// SCROLL TO TOP
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("visible", window.scrollY > 150);
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
