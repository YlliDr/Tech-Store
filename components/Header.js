// Header Component
class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header class="main-header">
        <div class="container">
          <div class="header-top">
            <a href="index.html" class="logo">
              <h2>TechStore</h2>
            </a>
            <div class="header-icons">
              <button class="icon-btn" aria-label="User Account">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
              <button class="icon-btn cart-btn" aria-label="Shopping Cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span class="cart-count">0</span>
              </button>
            </div>
          </div>
          <nav class="main-nav">
            <ul class="nav-list">
              <li><a href="index.html">Produkte</a></li>
              <li><a href="examples.html">Examples</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Über uns</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;
    }
}

customElements.define('app-header', AppHeader);

