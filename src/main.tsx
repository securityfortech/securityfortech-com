import { createRoot } from 'react-dom/client';
import posthog from 'posthog-js';

import App from './App';
import './index.css';

const initPostHog = () => {
  if (typeof window !== 'undefined' && import.meta.env.VITE_ENABLE_ANALYTICS === 'true') {
    posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, {
      api_host: import.meta.env.VITE_POSTHOG_HOST,
      capture_pageview: false,
      persistence: 'localStorage',
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') {
          posthog.debug();
        }
      }
    });
  }
};

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

initPostHog();

createRoot(rootElement).render(<App />);
