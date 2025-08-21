import { Outlet, Link, useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">User Profile</h1>
      
      {/* Profile Navigation */}
      <nav className="mb-8">
        <div className="flex space-x-4 border-b border-gray-200">
          <Link
            to="/profile"
            className={`px-4 py-2 font-medium transition-colors ${
              location.pathname === '/profile'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Profile Details
          </Link>
          <Link
            to="/profile/settings"
            className={`px-4 py-2 font-medium transition-colors ${
              location.pathname === '/profile/settings'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Settings
          </Link>
        </div>
      </nav>

      {/* Nested Route Content */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;

