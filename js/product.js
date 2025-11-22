// Product Page JavaScript

// State Management
const state = {
    cart: [],
    currentProduct: {
        id: 1,
        name: 'Mixtopf mit Griff für Thermomix® TM6',
        price: 89.00,
        image: 'https://via.placeholder.com/400/708090/FFFFFF?text=Thermomix+TM6'
    }
};

// Add to Cart Functionality
document.addEventListener('DOMContentLoaded', () => {
    const addToCartBtn = document.getElementById('addToCartBtn');

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', addToCart);
    }

    // Initialize cart count
    updateCartCount();
});

function addToCart() {
    // Add product to cart
    state.cart.push(state.currentProduct);

    // Update cart count
    updateCartCount();

    // Show feedback
    showAddToCartFeedback();

    // Save to localStorage
    saveCartToStorage();
}

function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = state.cart.length;
    }
}

function showAddToCartFeedback() {
    const btn = document.getElementById('addToCartBtn');
    const originalText = btn.innerHTML;

    btn.innerHTML = '✓ Hinzugefügt!';
    btn.style.background = '#00b359';

    // Show notification if available
    if (window.showToast) {
        showToast(`${state.currentProduct.name} wurde zum Warenkorb hinzugefügt`, 'success');
    }

    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '#00cc66';
    }, 2000);
}

function saveCartToStorage() {
    try {
        localStorage.setItem('techstore_cart', JSON.stringify(state.cart));
    } catch (e) {
        console.error('Failed to save cart to localStorage:', e);
    }
}

function loadCartFromStorage() {
    try {
        const savedCart = localStorage.getItem('techstore_cart');
        if (savedCart) {
            state.cart = JSON.parse(savedCart);
            updateCartCount();
        }
    } catch (e) {
        console.error('Failed to load cart from localStorage:', e);
    }
}

// Load cart on page load
loadCartFromStorage();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Image zoom effect (optional enhancement)
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('.main-image img');

    if (mainImage) {
        mainImage.addEventListener('click', () => {
            mainImage.classList.toggle('zoomed');
        });
    }
});

