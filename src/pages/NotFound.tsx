import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    const previousTitle = document.title;
    const robotsMeta = document.createElement("meta");
    robotsMeta.name = "robots";
    robotsMeta.content = "noindex, follow";
    robotsMeta.dataset.notFound = "true";

    document.title = "Page Not Found | SecurityforTech";
    document.head.appendChild(robotsMeta);

    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    return () => {
      document.title = previousTitle;
      robotsMeta.remove();
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">This page is outside the perimeter.</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to SecurityforTech
        </a>
      </div>
    </div>
  );
};

export default NotFound;
