// Review Card Component
class ReviewCard extends HTMLElement {
    connectedCallback() {
        const rating = this.getAttribute('rating') || '5';
        const title = this.getAttribute('title') || 'Bewertung';
        const author = this.getAttribute('author') || 'Anonym';
        const date = this.getAttribute('date') || new Date().toLocaleDateString('de-DE');
        const content = this.getAttribute('content') || '';

        const stars = '⭐'.repeat(parseInt(rating));

        this.innerHTML = `
      <div class="review-card">
        <div class="review-stars">${stars}</div>
        <h4 class="review-title">${title}</h4>
        <div class="review-meta">
          <span class="review-author">${author}</span>
          <span class="review-date">${date}</span>
        </div>
        <p class="review-content">${content}</p>
      </div>
    `;
    }
}

customElements.define('review-card', ReviewCard);

