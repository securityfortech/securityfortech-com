
import React, { useEffect } from 'react';
import posthog from 'posthog-js';
import { useLocation } from 'react-router-dom';

// We'll use environment variables for configuration
const IS_DEVELOPMENT = import.meta.env.DEV;
const ENABLE_ANALYTICS = import.meta.env.VITE_ENABLE_ANALYTICS === 'true';

// Initialize PostHog only if analytics are enabled
if (typeof window !== 'undefined' && ENABLE_ANALYTICS) {
  try {
    posthog.init(import.meta.env.VITE_POSTHOG_API_KEY || 'phc_dJKvUiBRRDQngpdHXSwPiEx72ypcgFD4Fj96WrivTpM', {
      api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com',
      person_profiles: 'always',
      capture_pageview: false,
      capture_pageleave: true,
      autocapture: true,
      loaded: (posthog) => {
        if (IS_DEVELOPMENT) {
          posthog.debug();
        }
      }
    });
  } catch (error) {
    console.error('Failed to initialize PostHog:', error);
  }
}

export const PostHogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (!posthog.__loaded || !ENABLE_ANALYTICS) return;

    try {
      // Capture page views
      posthog.capture('$pageview', {
        $current_url: window.location.href,
        $pathname: location.pathname,
      });

      // Track user properties
      posthog.identify(undefined, {
        $browser: navigator.userAgent,
        $device_type: /Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
        $referrer: document.referrer,
      });
    } catch (error) {
      console.error('Failed to track page view:', error);
    }

    // Cleanup
    return () => {
      try {
        if (ENABLE_ANALYTICS) {
          posthog.capture('$pageleave');
        }
      } catch (error) {
        console.error('Failed to track page leave:', error);
      }
    };
  }, [location.pathname]);

  return <>{children}</>;
};

export { posthog };
