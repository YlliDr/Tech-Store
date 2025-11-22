// Product Card Component - Example of a reusable product display component
class ProductCard extends HTMLElement {
    connectedCallback() {
        // Get attributes (props)
        const name = this.getAttribute('name') || 'Product Name';
        const price = this.getAttribute('price') || '0.00';
        const image = this.getAttribute('image') || 'https://via.placeholder.com/300';
        const rating = parseInt(this.getAttribute('rating')) || 5;
        const reviews = this.getAttribute('reviews') || '0';
        const link = this.getAttribute('link') || '#';

        // Generate star rating
        const stars = '⭐'.repeat(Math.min(Math.max(rating, 1), 5));

        // Render the component
        this.innerHTML = `
      <a href="${link}" class="product-card-component">
        <div class="product-card-image">
          <img src="${image}" alt="${name}" loading="lazy">
        </div>
        <div class="product-card-content">
          <h3 class="product-card-title">${name}</h3>
          <div class="product-card-rating">
            <span class="stars">${stars}</span>
            <span class="review-count">(${reviews})</span>
          </div>
          <div class="product-card-footer">
            <p class="product-card-price">${price} €</p>
            <button class="quick-add-btn" data-product-name="${name}" data-product-price="${price}">
              🛒 Schnell hinzufügen
            </button>
          </div>
        </div>
      </a>
    `;

        // Add event listener for quick add button
        const quickAddBtn = this.querySelector('.quick-add-btn');
        if (quickAddBtn) {
            quickAddBtn.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent navigation
                e.stopPropagation();
                this.handleQuickAdd(name, price);
            });
        }
    }

    handleQuickAdd(name, price) {
        // Dispatch custom event for parent components to handle
        this.dispatchEvent(new CustomEvent('product-added', {
            bubbles: true,
            detail: {
                productName: name,
                productPrice: price
            }
        }));

        // Show notification if available
        if (window.showToast) {
            showToast(`${name} wurde zum Warenkorb hinzugefügt`, 'success');
        }

        // Visual feedback
        const btn = this.querySelector('.quick-add-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ Hinzugefügt';
        btn.style.background = '#00b359';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.disabled = false;
        }, 2000);
    }
}

// Register the custom element
customElements.define('product-card', ProductCard);

// Add styles for the product card component
const style = document.createElement('style');
style.textContent = `
  .product-card-component {
    display: block;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s;
    text-decoration: none;
    color: inherit;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    height: 100%;
  }
  
  .product-card-component:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
  
  .product-card-image {
    width: 100%;
    height: 280px;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .product-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }
  
  .product-card-component:hover .product-card-image img {
    transform: scale(1.05);
  }
  
  .product-card-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .product-card-title {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin: 0;
    line-height: 1.3;
    min-height: 48px;
  }
  
  .product-card-rating {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }
  
  .review-count {
    color: #999;
  }
  
  .product-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-top: auto;
  }
  
  .product-card-price {
    font-size: 24px;
    font-weight: bold;
    color: #00a0e3;
    margin: 0;
  }
  
  .quick-add-btn {
    background: #00cc66;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    white-space: nowrap;
  }
  
  .quick-add-btn:hover:not(:disabled) {
    background: #00b359;
    transform: scale(1.05);
  }
  
  .quick-add-btn:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
  
  @media (max-width: 640px) {
    .product-card-footer {
      flex-direction: column;
      align-items: stretch;
    }
    
    .quick-add-btn {
      width: 100%;
    }
  }
`;
document.head.appendChild(style);

