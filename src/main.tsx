
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import posthog from 'posthog-js';

if (typeof window !== 'undefined') {
  posthog.init(
    'phc_dJKvUiBRRDQngpdHXSwPiEx72ypcgFD4Fj96WrivTpM',
    {
      api_host: 'https://app.posthog.com',
      capture_pageview: false,
      persistence: 'localStorage',
    }
  );
}

createRoot(document.getElementById("root")!).render(<App />);
