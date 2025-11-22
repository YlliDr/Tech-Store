// Toast Notification Component
class ToastNotification extends HTMLElement {
    connectedCallback() {
        const message = this.getAttribute('message') || 'Notification';
        const type = this.getAttribute('type') || 'info'; // success, error, warning, info
        const duration = parseInt(this.getAttribute('duration')) || 3000;

        // Icon based on type
        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };

        const icon = icons[type] || icons.info;

        this.innerHTML = `
      <div class="toast-notification toast-${type}">
        <span class="toast-icon">${icon}</span>
        <span class="toast-message">${message}</span>
        <button class="toast-close">&times;</button>
      </div>
    `;

        // Add animation
        requestAnimationFrame(() => {
            this.querySelector('.toast-notification').classList.add('toast-show');
        });

        // Auto dismiss
        this.timeoutId = setTimeout(() => {
            this.dismiss();
        }, duration);

        // Manual close
        this.querySelector('.toast-close').addEventListener('click', () => {
            this.dismiss();
        });
    }

    dismiss() {
        const toast = this.querySelector('.toast-notification');
        toast.classList.remove('toast-show');
        toast.classList.add('toast-hide');

        setTimeout(() => {
            this.remove();
        }, 300);
    }

    disconnectedCallback() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }
}

customElements.define('toast-notification', ToastNotification);

// Utility function to show toast notifications
window.showToast = function (message, type = 'info', duration = 3000) {
    const container = document.getElementById('toast-container') || createToastContainer();

    const toast = document.createElement('toast-notification');
    toast.setAttribute('message', message);
    toast.setAttribute('type', type);
    toast.setAttribute('duration', duration);

    container.appendChild(toast);
};

function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
    return container;
}

// Add styles
const style = document.createElement('style');
style.textContent = `
  #toast-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 10px;
    pointer-events: none;
  }
  
  .toast-notification {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    min-width: 300px;
    max-width: 400px;
    pointer-events: auto;
    transform: translateX(400px);
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  .toast-notification.toast-show {
    transform: translateX(0);
    opacity: 1;
  }
  
  .toast-notification.toast-hide {
    transform: translateX(400px);
    opacity: 0;
  }
  
  .toast-icon {
    font-size: 20px;
    font-weight: bold;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
  }
  
  .toast-success {
    border-left: 4px solid #00cc66;
  }
  
  .toast-success .toast-icon {
    background: #00cc66;
    color: white;
  }
  
  .toast-error {
    border-left: 4px solid #ef4444;
  }
  
  .toast-error .toast-icon {
    background: #ef4444;
    color: white;
  }
  
  .toast-warning {
    border-left: 4px solid #f59e0b;
  }
  
  .toast-warning .toast-icon {
    background: #f59e0b;
    color: white;
  }
  
  .toast-info {
    border-left: 4px solid #00a0e3;
  }
  
  .toast-info .toast-icon {
    background: #00a0e3;
    color: white;
  }
  
  .toast-message {
    flex: 1;
    color: #333;
    font-size: 14px;
    line-height: 1.4;
  }
  
  .toast-close {
    background: none;
    border: none;
    font-size: 24px;
    color: #999;
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s;
    flex-shrink: 0;
  }
  
  .toast-close:hover {
    background: #f0f0f0;
    color: #333;
  }
  
  @media (max-width: 640px) {
    #toast-container {
      left: 20px;
      right: 20px;
      top: 20px;
    }
    
    .toast-notification {
      min-width: auto;
      max-width: none;
    }
  }
`;
document.head.appendChild(style);

