// load HTML components (header / footer)
function loadComponent(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback();
    })
    .catch(err => console.error(`Error loading ${file}`, err));
}

// load header + footer
loadComponent("header-placeholder", "components/header.html", initHeaderLogic);
loadComponent("footer-placeholder", "components/footer.html");

// HEADER + LOGIN
function initHeaderLogic() {
  const profileBtn = document.getElementById("profile-btn");
  const profileMenu = document.getElementById("profile-menu");

  if (!profileBtn || !profileMenu) return;

  // dropdown open / close
  profileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    profileMenu.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!profileBtn.contains(e.target) && !profileMenu.contains(e.target)) {
      profileMenu.classList.remove("active");
    }
  });

  // login state
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");
  const logoutBtn = document.getElementById("logout-btn");

  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

  if (currentUser) {
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
    profileBtn.title = `Logged in as ${currentUser.fullName}`;
  } else {
    loginBtn.style.display = "inline-block";
    signupBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
  }

  logoutBtn.addEventListener("click", () => {
    sessionStorage.removeItem("currentUser");
    location.reload();
  });
}
