import { Link } from 'react-router-dom';

const Home = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    window.location.reload();
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Advanced React Router Demo
        </h1>
        <p className="text-xl text-gray-600">
          Explore nested routes, dynamic routing, and protected routes
        </p>
      </div>

      {/* Authentication Status */}
      <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex justify-between items-center">
          <div>
            {isAuthenticated ? (
              <p className="text-blue-800">
                Welcome back, <strong>{username}</strong>! You are logged in.
              </p>
            ) : (
              <p className="text-blue-800">
                You are not logged in. Some features require authentication.
              </p>
            )}
          </div>
          <div>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Protected Routes */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Protected Routes</h3>
          <p className="text-gray-600 mb-4">
            Access user profile with authentication required. Try accessing without logging in.
          </p>
          <Link
            to="/profile"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors inline-block"
          >
            View Profile
          </Link>
        </div>

        {/* Dynamic Routing */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Dynamic Routing</h3>
          <p className="text-gray-600 mb-4">
            Explore blog posts with dynamic URLs and parameters.
          </p>
          <div className="space-y-2">
            <Link
              to="/blog/1"
              className="block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors text-center"
            >
              Blog Post 1
            </Link>
            <Link
              to="/blog/2"
              className="block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors text-center"
            >
              Blog Post 2
            </Link>
            <Link
              to="/blog/3"
              className="block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors text-center"
            >
              Blog Post 3
            </Link>
          </div>
        </div>

        {/* Nested Routes */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Nested Routes</h3>
          <p className="text-gray-600 mb-4">
            Navigate through nested profile sections with sub-routes.
          </p>
          <div className="space-y-2">
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  className="block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors text-center"
                >
                  Profile Details
                </Link>
                <Link
                  to="/profile/settings"
                  className="block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors text-center"
                >
                  Profile Settings
                </Link>
              </>
            ) : (
              <p className="text-gray-500 text-sm">Login required to access profile</p>
            )}
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <div className="mt-12 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Features Demonstrated</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">🔒 Protected Routes</h4>
            <p className="text-gray-600 text-sm">
              Routes that require authentication. Automatically redirects to login page when accessed without authentication.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">🔗 Dynamic Routing</h4>
            <p className="text-gray-600 text-sm">
              URLs with parameters (like /blog/:id) that render different content based on the URL parameter.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">📁 Nested Routes</h4>
            <p className="text-gray-600 text-sm">
              Routes within routes, allowing for complex navigation structures with shared layouts.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">🔄 Navigation</h4>
            <p className="text-gray-600 text-sm">
              Programmatic navigation, redirects, and maintaining navigation state across the application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

