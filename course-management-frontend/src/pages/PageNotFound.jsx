import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Page Not Found
      </h2>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;