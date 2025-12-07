
// Login dropdown
      const profileBtn = document.getElementById("profile-btn");
      const profileMenu = document.getElementById("profile-menu");

      // Toggle menu on click
      profileBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent immediate document click
        profileMenu.classList.toggle("active");
      });

      // Close menu when clicking outside
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

      // Update button text
      if (btn.textContent === "Show more") {
        btn.textContent = "Show less";
      } else {
        btn.textContent = "Show more";
      }
    });

  // Anchor link

    document.getElementById("scrollToTopBtn").addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });