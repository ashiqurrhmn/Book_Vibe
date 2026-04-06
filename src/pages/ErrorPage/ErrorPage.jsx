import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        
        {/* Error Code */}
        <h1 className="text-9xl font-extrabold drop-shadow-lg">404</h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Oops! Page not found
        </h2>

        <p className="mt-2 text-lg text-gray-500">
          The page you are looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-gray-200 text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Go Back Home
          </Link>
        </div>

        {/* Small decoration */}
        <div className="mt-10 text-sm text-gray-500">
          🚀 Lost in space? Let's get you back!
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;