import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-green-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-green-200">
          Recipe Share
        </Link>
        <div className="space-x-4">
          <Link 
            to="/"
            className={`px-4 py-2 rounded transition-colors ${
              location.pathname === '/' ? 'bg-green-800' : 'hover:bg-green-700'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/add-recipe"
            className={`px-4 py-2 rounded transition-colors ${
              location.pathname === '/add-recipe' ? 'bg-green-800' : 'hover:bg-green-700'
            }`}
          >
            Add Recipe
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
