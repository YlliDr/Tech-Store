function validatePayment() {
  const name = document.getElementById("cardName");
  const number = document.getElementById("cardNumber");
  const expiry = document.getElementById("expiry");
  const cvv = document.getElementById("cvv");

  let valid = true;

  clearErrors();

  // Name
  if (!/^[A-Za-z ]{3,}$/.test(name.value.trim())) {
    setError(name, "Enter a valid name");
    valid = false;
  }

  // Card number
  const cleanNumber = number.value.replace(/\s+/g, "");
  if (!/^\d{16}$/.test(cleanNumber)) {
    setError(number, "Card number must be 16 digits");
    valid = false;
  }

  // Expiry
  if (!/^\d{2} \/ \d{2}$/.test(expiry.value)) {
    setError(expiry, "Format MM / YY");
    valid = false;
  } else {
    const [mm, yy] = expiry.value.split(" / ").map(Number);
    const now = new Date();
    const expDate = new Date(2000 + yy, mm);

    if (mm < 1 || mm > 12 || expDate <= now) {
      setError(expiry, "Card expired");
      valid = false;
    }
  }

  // CVV
  if (!/^\d{3,4}$/.test(cvv.value)) {
    setError(cvv, "Invalid CVV");
    valid = false;
  }

  if (valid) {
    alert("Payment validated ✔");
  }
}

function setError(input, message) {
  input.classList.add("error");
  const msg = document.createElement("small");
  msg.className = "error-text";
  msg.textContent = message;
  input.parentElement.appendChild(msg);
}

function clearErrors() {
  document.querySelectorAll(".error-text").forEach(e => e.remove());
  document.querySelectorAll(".error").forEach(e => e.classList.remove("error"));
}


// document.addEventListener("DOMContentLoaded", () => {
//   const cart = JSON.parse(localStorage.getItem("checkoutCart")) || [];

//   if (cart.length === 0) {
//     alert("No items to pay for.");
//     window.location.href = "index.html";
//     return;
//   }

//   let total = 0;
//   cart.forEach(item => {
//     total += item.price * item.qty;
//   });

//   console.log("Items being paid for:", cart);
//   console.log("Total:", total.toFixed(2));

//   // Render summary if you want
// });
