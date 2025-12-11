




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

    const btn = document.getElementById("toggleVisibility");
    const hiddenCards = document.querySelectorAll(".card.hidden");

  // Show more products feature

    btn.addEventListener("click", () => {
      hiddenCards.forEach(card => card.classList.toggle("hidden"));

      if (btn.textContent === "Show more") {
        btn.textContent = "Show less";
      } else {
        btn.textContent = "Show more";
      }
    });

    // Anchor button

    const scrollBtn = document.getElementById("scrollToTopBtn");


    window.addEventListener("scroll", () => {
        if (window.scrollY > 150) {
            scrollBtn.classList.add("visible");
        } else {
            scrollBtn.classList.remove("visible");
        }
    });


    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Checking login status
    document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
    const logoutBtn = document.getElementById("logout-btn");

    // Check if user is logged in
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    if(currentUser) {
        // Hide login/signup
        loginBtn.style.display = "none";
        signupBtn.style.display = "none";

        // Show logout
        logoutBtn.style.display = "inline-block";

        // Optional: show user's name in the header
        const profileBtn = document.getElementById("profile-btn");
        profileBtn.title = `Logged in as ${currentUser.fullName}`;
    } else {
        // User not logged in
        loginBtn.style.display = "inline-block";
        signupBtn.style.display = "inline-block";
        logoutBtn.style.display = "none";
    }

    // Logout functionality
    logoutBtn.addEventListener("click", function() {
        sessionStorage.removeItem("currentUser");
        location.reload(); // refresh page to update header
    });
});

