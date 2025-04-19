
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import posthog from 'posthog-js';

// Initialize PostHog only in a browser environment
if (typeof window !== 'undefined') {
  posthog.init(
    'phc_dJKvUiBRRDQngpdHXSwPiEx72ypcgFD4Fj96WrivTpM',
    {
      api_host: 'https://app.posthog.com',
      capture_pageview: false, // We'll handle pageviews in our PostHogProvider
      persistence: 'localStorage',
    }
  );

  // Enable debug mode only in development
  if (process.env.NODE_ENV === 'development') {
    posthog.debug();
  }
}

createRoot(document.getElementById("root")!).render(<App />);
