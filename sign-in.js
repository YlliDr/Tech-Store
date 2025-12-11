document.getElementById("SignIn").addEventListener("click", function () {

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    // Password not empty
    if (!password) {
        alert("Please enter your password.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        alert("Incorrect email or password.");
        return;
    }

    // Login successful
    sessionStorage.setItem("currentUser", JSON.stringify(user));
    alert("Login successful!");
    window.location.href = "index.html";
});
