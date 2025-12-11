document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.querySelector('input[placeholder="Full Name"]').value.trim();
    const email = document.querySelector('input[placeholder="Email Address"]').value.trim();
    const password = document.querySelector('input[placeholder="Password"]').value;
    const confirmPass = document.querySelector('input[placeholder="Confirm Password"]').value;

    // Name validation
    if (fullName.length < 2) {
        alert("Full Name must be at least 2 characters.");
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Confirm password
    if (password !== confirmPass) {
        alert("Passwords do not match!");
        return;
    }

    // Check if email already exists
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(u => u.email === email)) {
        alert("Email already registered!");
        return;
    }

    // Save user
    users.push({ fullName, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    window.location.href = "sign-in.html";
});
