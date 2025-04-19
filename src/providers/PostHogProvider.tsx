
import { useEffect } from 'react';
import posthog from 'posthog-js';
import { useLocation } from 'react-router-dom';

// Initialize PostHog correctly
if (typeof window !== 'undefined') {
  posthog.init(
    'phc_dJKvUiBRRDQngpdHXSwPiEx72ypcgFD4Fj96WrivTpM', 
    {
      api_host: 'https://app.posthog.com',
      capture_pageview: false, // We'll capture pageviews manually
      debug: process.env.NODE_ENV === 'development', // Enable debug mode in development
      persistence: 'localStorage',
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') {
          console.log('PostHog loaded successfully');
        }
      }
    }
  );
}

interface PostHogProviderProps {
  children: React.ReactNode;
}

export function PostHogProvider({ children }: PostHogProviderProps) {
  const location = useLocation();
  
  useEffect(() => {
    // Track pageviews
    posthog.capture('$pageview');
    
    if (process.env.NODE_ENV === 'development') {
      console.log('PostHog pageview captured:', location.pathname);
    }
  }, [location.pathname]);

  return <>{children}</>;
}

export { posthog };
