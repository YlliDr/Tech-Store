# 🏗️ Architecture Overview

## Component Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                      Tech-Store App                      │
└─────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
   ┌─────────┐        ┌─────────┐        ┌─────────┐
   │  Home   │        │Product  │        │Examples │
   │  Page   │        │  Page   │        │  Page   │
   └─────────┘        └─────────┘        └─────────┘
        │                   │                   │
        └───────────────────┴───────────────────┘
                            │
            ┌───────────────┼───────────────┐
            │               │               │
            ▼               ▼               ▼
    ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
    │    Layout    │ │   Content    │ │   Utility    │
    │  Components  │ │  Components  │ │  Components  │
    └──────────────┘ └──────────────┘ └──────────────┘
            │               │               │
    ┌───────┴──────┐ ┌──────┴──────┐       │
    │              │ │             │       │
    ▼              ▼ ▼             ▼       ▼
┌────────┐    ┌────────┐    ┌──────────┐ ┌──────────────┐
│ Header │    │ Footer │    │ Product  │ │ Notification │
│        │    │        │    │   Card   │ │    Toast     │
└────────┘    └────────┘    └──────────┘ └──────────────┘
                                 │
                            ┌────┴────┐
                            │         │
                            ▼         ▼
                      ┌──────────┐ ┌──────────┐
                      │  Review  │ │  Image   │
                      │   Card   │ │ Gallery  │
                      └──────────┘ └──────────┘
```

---

## Page Component Breakdown

### 🏠 Home Page (`index.html`)

```
┌─────────────────────────────────────┐
│           <app-header>              │  ← Navigation + Cart
├─────────────────────────────────────┤
│                                     │
│        Hero Section (Static)        │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  ┌──────────┐  ┌──────────┐       │
│  │ Product  │  │ Product  │  ...  │  ← Product Grid
│  │   Card   │  │   Card   │       │
│  └──────────┘  └──────────┘       │
│                                     │
├─────────────────────────────────────┤
│                                     │
│      About Section (Static)         │
│                                     │
├─────────────────────────────────────┤
│           <app-footer>              │  ← Site Footer
└─────────────────────────────────────┘
```

**Components Used:**
- `<app-header>` - Site navigation
- `<product-card>` (x4) - Product displays
- `<app-footer>` - Site footer
- `<toast-notification>` - When adding to cart

---

### 📦 Product Page (`product.html`)

```
┌─────────────────────────────────────┐
│           <app-header>              │
├─────────────────────────────────────┤
│                                     │
│  ┌──────────────┐  ┌─────────────┐ │
│  │    Image     │  │   Product   │ │
│  │   Gallery    │  │    Info     │ │  ← Product Detail
│  │              │  │   + Price   │ │
│  │ ○ ○ ○ ○ ○ ○  │  │  [Add Cart] │ │
│  └──────────────┘  └─────────────┘ │
│                                     │
├─────────────────────────────────────┤
│      Product Description            │
│      (Static HTML)                  │
├─────────────────────────────────────┤
│   Compatibility   │   Delivery      │
│   (Static HTML)   │   (Static HTML) │
├─────────────────────────────────────┤
│                                     │
│  ┌──────────┐  ┌──────────┐       │
│  │  Review  │  │  Review  │  ...  │  ← Reviews Grid
│  │   Card   │  │   Card   │       │
│  └──────────┘  └──────────┘       │
│                                     │
├─────────────────────────────────────┤
│           <app-footer>              │
└─────────────────────────────────────┘
```

**Components Used:**
- `<app-header>` - Site navigation
- `<image-gallery>` - Product images
- `<review-card>` (x4) - Customer reviews
- `<app-footer>` - Site footer
- `<toast-notification>` - Add to cart feedback

---

### 📚 Examples Page (`examples.html`)

```
┌─────────────────────────────────────┐
│           <app-header>              │
├─────────────────────────────────────┤
│        Hero Section                 │
├─────────────────────────────────────┤
│   ProductCard Examples              │
│  ┌──────────┐  ┌──────────┐       │
│  │ Product  │  │ Product  │  ...  │
│  └──────────┘  └──────────┘       │
├─────────────────────────────────────┤
│   ReviewCard Examples               │
│  ┌──────────┐  ┌──────────┐       │
│  │  Review  │  │  Review  │  ...  │
│  └──────────┘  └──────────┘       │
├─────────────────────────────────────┤
│   ImageGallery Example              │
│         <image-gallery>             │
├─────────────────────────────────────┤
│   Notification Examples             │
│   [Button] [Button] [Button]        │
├─────────────────────────────────────┤
│   Props Reference Tables            │
├─────────────────────────────────────┤
│           <app-footer>              │
└─────────────────────────────────────┘
```

**Components Used:**
- All components for demonstration
- Live interactive examples
- Code snippets
- Props documentation

---

## Data Flow Architecture

### 🔄 State Management

```
┌──────────────────────────────────────┐
│         Application State            │
│  (js/product.js or localStorage)     │
└──────────────────────────────────────┘
                 │
        ┌────────┴────────┐
        │                 │
        ▼                 ▼
┌──────────────┐   ┌──────────────┐
│   Cart State │   │ Product Data │
│  (array)     │   │  (object)    │
└──────────────┘   └──────────────┘
        │                 │
        │                 │
        ▼                 ▼
┌──────────────┐   ┌──────────────┐
│ localStorage │   │  Components  │
│  Persistence │   │   (render)   │
└──────────────┘   └──────────────┘
```

### 📡 Event Flow

```
        User Interaction
               │
               ▼
    ┌──────────────────┐
    │   DOM Event      │ (click, submit, etc.)
    └──────────────────┘
               │
               ▼
    ┌──────────────────┐
    │  Event Handler   │ (addEventListener)
    └──────────────────┘
               │
      ┌────────┴────────┐
      │                 │
      ▼                 ▼
┌──────────┐     ┌──────────────┐
│  Update  │     │   Dispatch   │
│  State   │     │ CustomEvent  │
└──────────┘     └──────────────┘
      │                 │
      │                 ▼
      │          ┌──────────────┐
      │          │   Parent     │
      │          │   Listens    │
      │          └──────────────┘
      │                 │
      └────────┬────────┘
               │
               ▼
    ┌──────────────────┐
    │  Update UI       │
    │  (re-render)     │
    └──────────────────┘
               │
               ▼
    ┌──────────────────┐
    │  User Feedback   │ (notification, etc.)
    └──────────────────┘
```

---

## Component Lifecycle

### Web Component Lifecycle

```
Component Created
      │
      ▼
┌────────────────────┐
│  constructor()     │ ← Initialize state
└────────────────────┘
      │
      ▼
┌────────────────────┐
│ Added to DOM       │
└────────────────────┘
      │
      ▼
┌────────────────────┐
│ connectedCallback()│ ← Render HTML
└────────────────────┘     Add listeners
      │
      ▼
┌────────────────────┐
│  Component Active  │ ← Handle events
└────────────────────┘
      │
      ▼
┌────────────────────┐
│  Removed from DOM  │
└────────────────────┘
      │
      ▼
┌────────────────────┐
│disconnectedCallback│ ← Cleanup
└────────────────────┘
```

---

## File Dependencies

### Component Dependencies

```
ProductCard.js
  └── Uses: Notification.js (optional)

Product Page
  ├── Header.js
  ├── Footer.js
  ├── ImageGallery.js
  ├── ReviewCard.js
  ├── Notification.js
  └── product.js

Home Page
  ├── Header.js
  ├── Footer.js
  ├── ProductCard.js
  │   └── Uses: Notification.js
  └── Notification.js

Examples Page
  ├── Header.js
  ├── Footer.js
  ├── ProductCard.js
  ├── ReviewCard.js
  ├── ImageGallery.js
  └── Notification.js
```

### Style Dependencies

```
index.css (Global)
  ├── Reset styles
  ├── Container
  ├── Typography
  └── Utilities

home.css
  ├── Hero section
  ├── Product grid
  ├── About section
  └── Responsive

product.css
  ├── Header styles
  ├── Product detail
  ├── Reviews
  ├── Footer styles
  └── Responsive
```

---

## Component Communication Patterns

### 1. Props Down (Parent → Child)

```javascript
// Parent passes data via attributes
<product-card 
  name="Laptop"     ← Prop
  price="999"       ← Prop
  rating="5">       ← Prop
</product-card>

// Child receives via getAttribute()
class ProductCard extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name');
    // Use the prop
  }
}
```

### 2. Events Up (Child → Parent)

```javascript
// Child dispatches event
class ProductCard extends HTMLElement {
  handleClick() {
    this.dispatchEvent(new CustomEvent('product-added', {
      bubbles: true,
      detail: { name: 'Laptop', price: 999 }
    }));
  }
}

// Parent listens
document.addEventListener('product-added', (event) => {
  console.log(event.detail); // { name: 'Laptop', price: 999 }
});
```

### 3. Global State (Shared)

```javascript
// Shared state object
const AppState = {
  cart: [],
  addToCart(item) {
    this.cart.push(item);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
};

// Any component can access
class ProductCard extends HTMLElement {
  handleClick() {
    AppState.addToCart({ name: 'Laptop', price: 999 });
  }
}
```

### 4. Utility Functions (Global)

```javascript
// Global utility
window.showToast = function(message, type) {
  // Create and show toast
};

// Any component can call
class ProductCard extends HTMLElement {
  handleClick() {
    showToast('Added to cart!', 'success');
  }
}
```

---

## Styling Architecture

### CSS Organization

```
Global Styles (index.css)
  ├── CSS Reset
  ├── Base typography
  ├── Container system
  └── Utility classes

Page-Specific (home.css, product.css)
  ├── Layout styles
  ├── Section styles
  └── Responsive breakpoints

Component Styles
  ├── Inline in component (ProductCard.js)
  ├── Or in page CSS
  └── Scoped to component classes
```

### Responsive Strategy

```
Mobile First Approach:

Base Styles (320px+)
      │
      ▼
Tablet (768px+)
      │
      ▼
Desktop (968px+)
      │
      ▼
Large Desktop (1200px+)
```

---

## Performance Considerations

### 🚀 Optimizations

1. **Lazy Loading**
   - Components load only when needed
   - Images can use `loading="lazy"`

2. **Event Delegation**
   - Listeners on parent elements
   - Reduces memory usage

3. **localStorage Caching**
   - Cart persists between sessions
   - Reduces server calls

4. **CSS Transitions**
   - Hardware-accelerated transforms
   - Smooth animations

5. **Minimal Dependencies**
   - Zero external libraries
   - Fast initial load

---

## Security Considerations

### ✅ Implemented

1. **XSS Prevention**
   - Escape user input
   - Use textContent when possible

2. **localStorage Safety**
   - Try-catch for operations
   - Handle quota exceeded

3. **Event Bubbling Control**
   - stopPropagation when needed
   - Prevent unwanted triggers

---

## Testing Strategy

### Manual Testing Checklist

- [ ] All pages load correctly
- [ ] Components render with props
- [ ] Add to cart functionality
- [ ] Cart count updates
- [ ] Notifications show/hide
- [ ] Image gallery navigation
- [ ] Responsive on mobile
- [ ] localStorage persistence
- [ ] Event handlers work
- [ ] Browser compatibility

---

## Deployment Architecture

```
Development
    │
    ├── Edit files
    ├── Test in browser
    └── Check responsive
    │
    ▼
Production
    │
    ├── Host on:
    │   ├── GitHub Pages
    │   ├── Netlify
    │   ├── Vercel
    │   └── Any static host
    │
    └── No build step needed!
```

---

## Extension Points

### Easy to Add:

1. **New Components**
   - Create `components/NewComponent.js`
   - Follow existing pattern
   - Import and use

2. **New Pages**
   - Copy existing page
   - Import needed components
   - Customize content

3. **New Features**
   - Add to component
   - Or create new component
   - Emit events if needed

4. **Styling Changes**
   - Edit CSS files
   - Or add inline styles
   - Use CSS variables

---

## Summary

This architecture provides:

✅ **Modularity** - Reusable components
✅ **Scalability** - Easy to extend
✅ **Maintainability** - Clear structure
✅ **Performance** - Native APIs
✅ **Simplicity** - No build tools
✅ **Flexibility** - Mix and match components

**Perfect for learning and production!**

---

Built with Web Components - The future of web development! 🚀

