# Quick Start Guide - TechStore

Welcome to your component-based vanilla JavaScript project! 🚀

## 📁 What You Have

```
Tech-Store/
├── 📄 index.html           # Home page with product listings
├── 📄 product.html         # Product detail page (Thermomix example)
├── 📄 examples.html        # Component showcase & documentation
│
├── 🧩 components/          # Reusable Web Components
│   ├── Header.js          # Site header with navigation
│   ├── Footer.js          # Site footer with multiple sections
│   ├── ImageGallery.js    # Image carousel with thumbnails
│   ├── ReviewCard.js      # Customer review display
│   └── ProductCard.js     # Product card with quick add
│
├── 🎨 styles/              # CSS files
│   ├── index.css          # Global styles
│   ├── home.css           # Home page specific styles
│   └── product.css        # Product page styles
│
├── ⚙️ js/                  # JavaScript files
│   └── product.js         # Product page functionality
│
├── 📚 README.md            # Full documentation
├── 📚 COMPONENTS-GUIDE.md  # Component creation guide
└── 📚 QUICK-START.md       # This file!
```

## 🚀 Getting Started

### 1. Open the Project

```bash
# Option 1: Open directly in browser
# Just double-click index.html

# Option 2: Use a local server (recommended)
# With Python:
python -m http.server 8000

# With Node.js:
npx http-server

# With PHP:
php -S localhost:8000
```

Then open: `http://localhost:8000`

### 2. View the Pages

- **Home Page**: `index.html` - Landing page with product grid
- **Product Page**: `product.html` - Detailed product view (based on Thermomix design)
- **Examples Page**: `examples.html` - Live component showcase

## 🧩 Using Components

### Basic Usage

1. **Import the component** in your HTML `<head>`:
```html
<script src="components/Header.js" defer></script>
```

2. **Use it** in your HTML:
```html
<app-header></app-header>
```

### Components with Props

```html
<!-- Product Card -->
<product-card 
  name="Gaming Laptop"
  price="1299.00"
  image="laptop.jpg"
  rating="5"
  reviews="156"
  link="product.html">
</product-card>

<!-- Review Card -->
<review-card 
  rating="5" 
  title="Great product!"
  author="John Doe"
  date="15.11.2024"
  content="Amazing quality and fast delivery!">
</review-card>

<!-- Image Gallery -->
<image-gallery 
  images="img1.jpg,img2.jpg,img3.jpg">
</image-gallery>
```

## 🎯 Creating Your First Component

### Step 1: Create the File

Create `components/MyComponent.js`:

```javascript
class MyComponent extends HTMLElement {
  connectedCallback() {
    // Get props
    const title = this.getAttribute('title') || 'Default Title';
    
    // Render HTML
    this.innerHTML = `
      <div class="my-component">
        <h2>${title}</h2>
        <button class="my-btn">Click Me</button>
      </div>
    `;
    
    // Add event listeners
    this.querySelector('.my-btn').addEventListener('click', () => {
      alert('Hello from component!');
    });
  }
}

// Register the component
customElements.define('my-component', MyComponent);
```

### Step 2: Import and Use

In your HTML:

```html
<script src="components/MyComponent.js" defer></script>

<my-component title="Welcome"></my-component>
```

### Step 3: Style It

In your CSS file:

```css
.my-component {
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
}
```

## 🎨 Customization Tips

### Changing Colors

Edit the CSS files to change the color scheme:

```css
/* Primary color: #00a0e3 (blue) */
/* Secondary color: #00cc66 (green) */
```

### Adding a New Page

1. Copy `index.html` or `product.html`
2. Change the content
3. Import the components you need
4. Add link to navigation in `components/Header.js`

### Modifying Components

1. Open the component file in `components/`
2. Edit the `innerHTML` template
3. Refresh your browser - changes appear immediately!

## 📊 Available Components

| Component | Tag | Props | Purpose |
|-----------|-----|-------|---------|
| Header | `<app-header>` | None | Site navigation |
| Footer | `<app-footer>` | None | Site footer |
| Product Card | `<product-card>` | name, price, image, rating, reviews, link | Product display |
| Review Card | `<review-card>` | rating, title, author, date, content | Customer reviews |
| Image Gallery | `<image-gallery>` | images | Image carousel |

## 💡 Common Tasks

### Add Product to Home Page

```html
<product-card 
  name="New Product"
  price="99.99"
  image="product.jpg"
  rating="5"
  reviews="50"
  link="product.html">
</product-card>
```

### Listen to Component Events

```javascript
document.addEventListener('product-added', (event) => {
  const { productName, productPrice } = event.detail;
  console.log(`Added: ${productName} - ${productPrice}€`);
});
```

### Update Cart Count

```javascript
const cartCount = document.querySelector('.cart-count');
cartCount.textContent = '5'; // Update to 5 items
```

## 🔧 Troubleshooting

### Components Not Showing?

✅ Check that you imported the component:
```html
<script src="components/YourComponent.js" defer></script>
```

✅ Make sure the tag name matches:
```javascript
customElements.define('your-component', YourComponent);
```
```html
<your-component></your-component>
```

✅ Check browser console for errors (F12)

### Styles Not Applied?

✅ Link the CSS file in `<head>`:
```html
<link rel="stylesheet" href="styles/your-styles.css" />
```

✅ Check CSS selector matches your HTML classes

### JavaScript Not Working?

✅ Add `defer` attribute to script tags:
```html
<script src="your-script.js" defer></script>
```

✅ Check for JavaScript errors in console (F12)

## 📚 Learn More

- **README.md** - Full project documentation
- **COMPONENTS-GUIDE.md** - Detailed component guide
- **examples.html** - Live component examples

## 🎯 Next Steps

1. ✅ Explore `examples.html` to see all components
2. ✅ Modify existing components to fit your needs
3. ✅ Create your own components following the guide
4. ✅ Add more products to the home page
5. ✅ Customize colors and styling
6. ✅ Add new pages (About, Contact, etc.)

## 🌟 Key Features

✨ **No Framework Required** - Pure vanilla JavaScript
✨ **Reusable Components** - Write once, use everywhere
✨ **Easy to Learn** - Simple Web Components API
✨ **Fast Performance** - Native browser support
✨ **Responsive Design** - Works on all devices
✨ **Shopping Cart** - With localStorage persistence

## 💻 Browser Requirements

- Chrome 54+
- Firefox 63+
- Safari 10.1+
- Edge 79+

All modern browsers support Web Components!

## 🎉 You're Ready!

Start building your tech store by:
1. Opening `index.html` in your browser
2. Exploring the component examples
3. Creating your first custom component

**Happy coding!** 🚀

---

Need help? Check out:
- [MDN Web Components Guide](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Web Components Best Practices](https://developers.google.com/web/fundamentals/web-components/best-practices)

