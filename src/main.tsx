
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import posthog from 'posthog-js';

// Make sure we're in the browser
if (typeof window !== 'undefined') {
  // Disable PostHog analytics in development
  if (process.env.NODE_ENV === 'development') {
    posthog.debug();
  }
}

createRoot(document.getElementById("root")!).render(<App />);
