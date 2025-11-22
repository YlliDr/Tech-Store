// Image Gallery Component
class ImageGallery extends HTMLElement {
    connectedCallback() {
        const images = this.getAttribute('images')?.split(',') || ['https://via.placeholder.com/400'];

        this.innerHTML = `
      <div class="image-gallery">
        <div class="main-image">
          <img src="${images[0]}" alt="Product Image" id="mainImage">
        </div>
        <div class="thumbnail-strip">
          ${images.map((img, index) => `
            <button class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
              <span class="dot"></span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

        // Add event listeners
        this.setupGallery(images);
    }

    setupGallery(images) {
        const mainImage = this.querySelector('#mainImage');
        const thumbnails = this.querySelectorAll('.thumbnail');

        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                mainImage.src = images[index];
                thumbnails.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        });
    }
}

customElements.define('image-gallery', ImageGallery);

