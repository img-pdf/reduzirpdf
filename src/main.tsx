// Salvaguarda para extensões de terceiros e navegadores onde fetch é getter-only
try {
  if (typeof window !== 'undefined') {
    window.addEventListener('error', (event) => {
      if (
        (event.filename && event.filename.includes('chrome-extension://')) ||
        (event.message && (event.message.includes('chrome-extension://') || event.message.includes('Cannot set property fetch of'))) ||
        (event.error?.stack && event.error.stack.includes('chrome-extension://'))
      ) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }, true);

    const origFetch = window.fetch ? window.fetch.bind(window) : null;
    if (origFetch) {
      let _f = origFetch;
      try {
        Object.defineProperty(window, 'fetch', {
          get: () => _f,
          set: (v) => { _f = v; },
          configurable: true,
          enumerable: true,
        });
      } catch {}

      if (typeof Window !== 'undefined' && Window.prototype) {
        try {
          Object.defineProperty(Window.prototype, 'fetch', {
            get: () => _f,
            set: (v) => { _f = v; },
            configurable: true,
            enumerable: true,
          });
        } catch {}
      }
    }
  }
} catch {
  // ignore
}

import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
