
import { useEffect } from 'react';
import posthog from 'posthog-js';
import { useLocation } from 'react-router-dom';

// Initialize PostHog
posthog.init(
  'phc_dJKvUiBRRDQngpdHXSwPiEx72ypcgFD4Fj96WrivTpM', 
  {
    api_host: 'https://app.posthog.com',
    capture_pageview: false, // We'll capture pageviews manually
    person_profiles: 'always',
    capture_pageleave: true
  }
);

interface PostHogProviderProps {
  children: React.ReactNode;
}

export function PostHogProvider({ children }: PostHogProviderProps) {
  const location = useLocation();
  
  useEffect(() => {
    // Track pageviews
    posthog.capture('$pageview');
  }, [location.pathname]);

  return <>{children}</>;
}

export { posthog };
