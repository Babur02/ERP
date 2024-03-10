import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-white text-2xl font-semibold hover:text-gray-300 mr-4"
          >
            Dashboard
          </Link>
          <Link
            to="/products"
          >
            <button className="bg-blue-500 hover:bg-blue-700 ml-28 text-white font-semibold py-2 px-4 rounded mr-4">
            Products
          </button>
          </Link>
          <Link
            to="/orders"
          >
            <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mr-4">
            Orders
          </button>
          </Link>
          <Link
            to="/calendar"
          >
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded mr-4">
            Calendar View
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
