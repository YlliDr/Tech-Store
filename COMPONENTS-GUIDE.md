# Components Guide

This guide explains how to use and create reusable components in this vanilla JavaScript project.

## 🎯 Why Web Components?

Web Components provide:
- ✅ **Reusability** - Write once, use everywhere
- ✅ **Encapsulation** - Self-contained HTML, CSS, and JS
- ✅ **Native browser support** - No framework needed
- ✅ **Simple API** - Easy to learn and use
- ✅ **React-like workflow** - Component-based architecture

## 📦 Available Components

### 1. App Header (`<app-header>`)

**File:** `components/Header.js`

**Usage:**
```html
<script src="components/Header.js" defer></script>
<app-header></app-header>
```

**Features:**
- Logo and navigation links
- User account button
- Shopping cart with counter
- Responsive design

**No props needed** - Static navigation header

---

### 2. App Footer (`<app-footer>`)

**File:** `components/Footer.js`

**Usage:**
```html
<script src="components/Footer.js" defer></script>
<app-footer></app-footer>
```

**Features:**
- Customer service information
- Payment methods display
- Social media links
- Quality badges
- Legal links

**No props needed** - Static footer content

---

### 3. Image Gallery (`<image-gallery>`)

**File:** `components/ImageGallery.js`

**Usage:**
```html
<script src="components/ImageGallery.js" defer></script>
<image-gallery images="img1.jpg,img2.jpg,img3.jpg"></image-gallery>
```

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `images` | String | Yes | Comma-separated list of image URLs |

**Example:**
```html
<image-gallery 
  images="product-1.jpg,product-2.jpg,product-3.jpg,product-4.jpg">
</image-gallery>
```

**Features:**
- Main image display
- Thumbnail navigation dots
- Click to switch images
- Smooth transitions

---

### 4. Review Card (`<review-card>`)

**File:** `components/ReviewCard.js`

**Usage:**
```html
<script src="components/ReviewCard.js" defer></script>
<review-card 
  rating="5" 
  title="Great product!"
  author="John Doe"
  date="01.01.2025"
  content="This is an amazing product. Highly recommended!">
</review-card>
```

**Props:**
| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `rating` | String | No | "5" | Star rating (1-5) |
| `title` | String | No | "Bewertung" | Review title |
| `author` | String | No | "Anonym" | Reviewer name |
| `date` | String | No | Current date | Review date |
| `content` | String | No | "" | Review text content |

**Example:**
```html
<review-card 
  rating="4" 
  title="Very satisfied"
  author="Maria Schmidt"
  date="15.11.2024"
  content="Good quality product, fast delivery. Would buy again!">
</review-card>
```

---

## 🛠️ Creating Your Own Component

### Step 1: Create the Component File

Create a new file in `components/` folder:

```javascript
// components/MyComponent.js
class MyComponent extends HTMLElement {
  connectedCallback() {
    // Get attributes (props)
    const title = this.getAttribute('title') || 'Default Title';
    const color = this.getAttribute('color') || 'blue';
    
    // Set inner HTML
    this.innerHTML = `
      <div class="my-component" style="color: ${color}">
        <h2>${title}</h2>
        <p>This is my custom component!</p>
        <button class="my-btn">Click me</button>
      </div>
    `;
    
    // Add event listeners
    this.querySelector('.my-btn').addEventListener('click', () => {
      alert('Button clicked!');
    });
  }
  
  // Optional: cleanup when component is removed
  disconnectedCallback() {
    // Remove event listeners, timers, etc.
  }
}

// Register the component
customElements.define('my-component', MyComponent);
```

### Step 2: Import and Use

```html
<!-- In your HTML file -->
<script src="components/MyComponent.js" defer></script>

<my-component title="Hello World" color="red"></my-component>
```

---

## 🎨 Styling Components

### Option 1: External CSS (Recommended)

Style components in your CSS files:

```css
/* styles/components.css */
.my-component {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.my-component h2 {
  margin-bottom: 10px;
}
```

### Option 2: Inline Styles

Add styles directly in the component:

```javascript
class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .my-component {
          padding: 20px;
          background: #f5f5f5;
        }
      </style>
      <div class="my-component">
        <h2>Styled Component</h2>
      </div>
    `;
  }
}
```

### Option 3: Shadow DOM (Advanced)

For true encapsulation:

```javascript
class MyComponent extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        .my-component {
          padding: 20px;
          background: #f5f5f5;
        }
      </style>
      <div class="my-component">
        <h2>Shadow DOM Component</h2>
      </div>
    `;
  }
}
```

---

## 🔄 Component Lifecycle

Web Components have lifecycle callbacks:

```javascript
class LifecycleComponent extends HTMLElement {
  // Called when component is added to DOM
  connectedCallback() {
    console.log('Component mounted');
    this.render();
  }
  
  // Called when component is removed from DOM
  disconnectedCallback() {
    console.log('Component unmounted');
    this.cleanup();
  }
  
  // Called when attributes change
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
    this.render();
  }
  
  // Specify which attributes to observe
  static get observedAttributes() {
    return ['title', 'color'];
  }
  
  render() {
    this.innerHTML = `<div>${this.getAttribute('title')}</div>`;
  }
  
  cleanup() {
    // Remove event listeners, clear timers, etc.
  }
}
```

---

## 📊 State Management Pattern

For components that need internal state:

```javascript
class StatefulComponent extends HTMLElement {
  constructor() {
    super();
    // Initialize state
    this.state = {
      count: 0,
      isActive: false
    };
  }
  
  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }
  
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
  
  render() {
    this.innerHTML = `
      <div class="counter">
        <p>Count: ${this.state.count}</p>
        <button class="increment">Increment</button>
        <p>Status: ${this.state.isActive ? 'Active' : 'Inactive'}</p>
      </div>
    `;
  }
  
  attachEventListeners() {
    this.querySelector('.increment').addEventListener('click', () => {
      this.setState({ count: this.state.count + 1 });
    });
  }
}

customElements.define('stateful-component', StatefulComponent);
```

---

## 🎯 Best Practices

### ✅ DO

1. **Use semantic HTML**
   ```javascript
   this.innerHTML = `
     <article class="card">
       <header><h2>Title</h2></header>
       <section>Content</section>
     </article>
   `;
   ```

2. **Validate props with defaults**
   ```javascript
   const title = this.getAttribute('title') || 'Default';
   const count = parseInt(this.getAttribute('count')) || 0;
   ```

3. **Clean up event listeners**
   ```javascript
   disconnectedCallback() {
     this.querySelector('.btn').removeEventListener('click', this.handler);
   }
   ```

4. **Use data attributes for state**
   ```javascript
   this.setAttribute('data-active', 'true');
   ```

### ❌ DON'T

1. **Don't use inline event handlers**
   ```javascript
   // Bad
   this.innerHTML = `<button onclick="doSomething()">Click</button>`;
   
   // Good
   this.innerHTML = `<button class="btn">Click</button>`;
   this.querySelector('.btn').addEventListener('click', doSomething);
   ```

2. **Don't forget to escape user input**
   ```javascript
   // Bad
   const name = this.getAttribute('name');
   this.innerHTML = `<p>${name}</p>`; // XSS vulnerability
   
   // Good
   const name = this.getAttribute('name');
   this.textContent = name; // or use proper escaping
   ```

3. **Don't create too large components**
   - Keep components focused on a single responsibility
   - Break large components into smaller ones

---

## 🔌 Component Communication

### Parent to Child (Props)

```html
<user-card name="John" age="30"></user-card>
```

### Child to Parent (Custom Events)

```javascript
// In child component
class ButtonComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button>Click me</button>`;
    
    this.querySelector('button').addEventListener('click', () => {
      // Dispatch custom event
      this.dispatchEvent(new CustomEvent('button-clicked', {
        bubbles: true,
        detail: { message: 'Hello from child!' }
      }));
    });
  }
}

customElements.define('button-component', ButtonComponent);
```

```javascript
// In parent
document.addEventListener('button-clicked', (e) => {
  console.log(e.detail.message); // "Hello from child!"
});
```

### Component to Component (Event Bus)

```javascript
// eventBus.js
const EventBus = {
  events: {},
  
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  },
  
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  }
};
```

---

## 📚 More Examples

### Product Card Component

```javascript
class ProductCard extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name');
    const price = this.getAttribute('price');
    const image = this.getAttribute('image');
    const rating = this.getAttribute('rating') || '5';
    
    this.innerHTML = `
      <div class="product-card">
        <img src="${image}" alt="${name}">
        <h3>${name}</h3>
        <div class="rating">${'⭐'.repeat(parseInt(rating))}</div>
        <p class="price">${price}</p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    `;
    
    this.querySelector('.add-to-cart').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('add-to-cart', {
        bubbles: true,
        detail: { name, price }
      }));
    });
  }
}

customElements.define('product-card', ProductCard);
```

### Modal Component

```javascript
class Modal extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || 'Modal';
    
    this.innerHTML = `
      <div class="modal-overlay">
        <div class="modal">
          <div class="modal-header">
            <h2>${title}</h2>
            <button class="close">&times;</button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
    
    this.querySelector('.close').addEventListener('click', () => {
      this.remove();
    });
  }
}

customElements.define('modal-dialog', Modal);
```

Usage:
```html
<modal-dialog title="Welcome">
  <p>This is the modal content!</p>
</modal-dialog>
```

---

## 🚀 Quick Start Checklist

- [ ] Create component file in `components/` folder
- [ ] Extend `HTMLElement` class
- [ ] Add `connectedCallback()` method
- [ ] Set `innerHTML` with your template
- [ ] Add event listeners if needed
- [ ] Register with `customElements.define()`
- [ ] Import in HTML with `<script>` tag
- [ ] Use component with custom tag

---

## 📖 Additional Resources

- [MDN Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Custom Elements Spec](https://html.spec.whatwg.org/multipage/custom-elements.html)
- [Web Components Best Practices](https://developers.google.com/web/fundamentals/web-components/best-practices)

---

Happy component building! 🎉

