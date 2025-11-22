// Footer Component
class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <footer class="main-footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>Kundenservice</h3>
              <p>Wir helfen dir gerne, schreib uns doch ein.</p>
              <p class="contact-info">📞 +49 202 564 3000</p>
              <p class="contact-info">Mo - Fr: 08:00 - 18:00 Uhr</p>
            </div>
            
            <div class="footer-section">
              <h3>Zahlarten</h3>
              <div class="payment-methods">
                <div class="payment-icon">💳 Mastercard</div>
                <div class="payment-icon">💳 Visa</div>
                <div class="payment-icon">💳 PayPal</div>
                <div class="payment-icon">💳 SEPA</div>
                <div class="payment-icon">💳 Klarna</div>
              </div>
            </div>
            
            <div class="footer-section">
              <h3>Kostenloser Versand</h3>
              <p>Innerhalb Deutschland ab 29,99 €</p>
              <p>Kostenloser Versand mit DHL/DPD!</p>
            </div>
          </div>
          
          <div class="footer-bottom">
            <div class="social-media">
              <h4>Social Media</h4>
              <div class="social-icons">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="Pinterest">📌</a>
              </div>
            </div>
            
            <div class="quality-badges">
              <h4>Geprüfte Qualität</h4>
              <div class="badges">
                <span class="badge">⭐ Quality Certified</span>
                <span class="badge">✓ Trusted Shop</span>
              </div>
            </div>
            
            <div class="support-center">
              <h4>Support Center</h4>
              <a href="#">Zu unseren FAQ's</a>
            </div>
          </div>
          
          <div class="footer-legal">
            <p>&copy; 2025 TechStore. Alle Rechte vorbehalten.</p>
            <div class="legal-links">
              <a href="#">Datenschutz</a>
              <a href="#">Impressum</a>
              <a href="#">AGB</a>
            </div>
          </div>
        </div>
      </footer>
    `;
    }
}

customElements.define('app-footer', AppFooter);

