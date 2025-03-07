// NotFound.tsx - 404 error page
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  // Log the attempted access to non-existent route
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        {/* 404 illustration */}
        <img
          src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
          alt="404 Error"
          className="w-64 h-64 mx-auto mb-8 rounded-lg object-cover"
        />
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;