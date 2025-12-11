// Login dropdown
const profileBtn = document.getElementById("profile-btn");
const profileMenu = document.getElementById("profile-menu");

profileBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  profileMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!profileBtn.contains(e.target) && !profileMenu.contains(e.target)) {
    profileMenu.classList.remove("active");
  }
});


// Checking login status
document.addEventListener("DOMContentLoaded", function() {
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");
  const logoutBtn = document.getElementById("logout-btn");

  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

  if(currentUser) {
      loginBtn.style.display = "none";
      signupBtn.style.display = "none";
      logoutBtn.style.display = "inline-block";

      const profileBtn = document.getElementById("profile-btn");
      profileBtn.title = `Logged in as ${currentUser.fullName}`;
  } else {
      loginBtn.style.display = "inline-block";
      signupBtn.style.display = "inline-block";
      logoutBtn.style.display = "none";
  }

  logoutBtn.addEventListener("click", function() {
      sessionStorage.removeItem("currentUser");
      location.reload();
  });
});


// GENERATING CARDS
const products = [
  { img: "images/card-1.jpeg", desc: "Soft cotton hoodie with relaxed fit.", price: 35 },
  { img: "images/card-2.jpeg", desc: "Minimalist beige sneakers for everyday wear.", price: 35 },
  { img: "images/card-3.jpeg", desc: "Classic black t-shirt with premium fabric.", price: 35 },
  { img: "images/card-4.jpeg", desc: "Lightweight jacket perfect for spring.", price: 35 },

  // Duplicate row
  { img: "images/card-1.jpeg", desc: "Soft cotton hoodie with relaxed fit.", price: 35 },
  { img: "images/card-2.jpeg", desc: "Minimalist beige sneakers for everyday wear.", price: 35 },
  { img: "images/card-3.jpeg", desc: "Classic black t-shirt with premium fabric.", price: 35 },
  { img: "images/card-4.jpeg", desc: "Lightweight jacket perfect for spring.", price: 35 },

  // Hidden row
  { img: "images/card-5.jpeg", desc: "Warm flannel shirt with modern styling.", price: 35, hidden: true },
  { img: "images/card-6.jpeg", desc: "Breathable running shoes with soft cushioning.", price: 35, hidden: true },
  { img: "images/card-7.jpeg", desc: "Stylish wool beanie for cold days.", price: 35, hidden: true },
  { img: "images/card-1.jpeg", desc: "Soft cotton hoodie with relaxed fit.", price: 35, hidden: true }
];

const productRows = document.getElementById("productRows");
let html = "";

products.forEach((p, i) => {
  if (i % 4 === 0) html += `<div class="row g-2">`;

  html += `
    <div class="col-6 col-sm-12 col-md-6 col-lg-3">
      <div class="card ${p.hidden ? "hidden" : ""}">
        <img src="${p.img}" alt="Product image">
        <p class="prod-desc">${p.desc}</p>
        <p class="price">$${p.price}</p>
        <button id="addToCart" class="card-btn">
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


// SCROLL TO TOP
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("visible", window.scrollY > 150);
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
