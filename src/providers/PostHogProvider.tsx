
import { useEffect } from 'react';
import posthog from 'posthog-js';
import { useLocation } from 'react-router-dom';

interface PostHogProviderProps {
  children: React.ReactNode;
}

export function PostHogProvider({ children }: PostHogProviderProps) {
  const location = useLocation();
  
  useEffect(() => {
    posthog.capture('$pageview');
  }, [location.pathname]);

  return <>{children}</>;
}

export { posthog };
