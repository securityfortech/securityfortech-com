import React, { useEffect } from 'react';
import posthog from 'posthog-js';
import { useLocation } from 'react-router-dom';

const POSTHOG_API_KEY = import.meta.env.VITE_POSTHOG_API_KEY;
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com';
const IS_DEVELOPMENT = import.meta.env.DEV;

// Initialize PostHog only in production or if explicitly enabled in development
if (typeof window !== 'undefined' && (!IS_DEVELOPMENT || import.meta.env.VITE_ENABLE_POSTHOG_IN_DEV === 'true')) {
  try {
    posthog.init(POSTHOG_API_KEY, {
      api_host: POSTHOG_HOST,
      person_profiles: 'always',
      capture_pageview: false, // We'll handle this manually
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
    if (!posthog.__loaded) return;

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
        posthog.capture('$pageleave');
      } catch (error) {
        console.error('Failed to track page leave:', error);
      }
    };
  }, [location.pathname]);

  return <>{children}</>;
};

export { posthog };
