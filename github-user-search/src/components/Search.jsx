import { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';

const Search = () => {
  // State for basic search
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // State for advanced search
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [searchParams, setSearchParams] = useState({
    username: '',
    location: '',
    minRepos: 0,
  });
  const [searchResults, setSearchResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  // Handle basic search form submission
  const handleBasicSearch = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username.trim());
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  // Handle advanced search form submission
  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    setError('');
    setSearchResults([]);

    try {
      const data = await searchUsers({
        username: searchParams.username,
        location: searchParams.location,
        minRepos: searchParams.minRepos,
        page: 1,
        perPage: 10,
      });
      
      setSearchResults(data.items || []);
      setTotalCount(data.total_count || 0);
    } catch (err) {
      setError('Failed to search users');
    } finally {
      setLoading(false);
    }
  };

  // Handle advanced search input changes
  const handleAdvancedInputChange = (field, value) => {
    setSearchParams(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          GitHub User Search
        </h1>

        {/* Search Mode Toggle */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setAdvancedSearch(false)}
              className={`px-4 py-2 rounded-md transition-colors ${
                !advancedSearch
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Basic Search
            </button>
            <button
              onClick={() => setAdvancedSearch(true)}
              className={`px-4 py-2 rounded-md transition-colors ${
                advancedSearch
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Advanced Search
            </button>
          </div>
        </div>

        {/* Basic Search Form */}
        {!advancedSearch && (
          <form onSubmit={handleBasicSearch} className="mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter GitHub username..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </form>
        )}

        {/* Advanced Search Form */}
        {advancedSearch && (
          <form onSubmit={handleAdvancedSearch} className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  value={searchParams.username}
                  onChange={(e) => handleAdvancedInputChange('username', e.target.value)}
                  placeholder="Enter username..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={searchParams.location}
                  onChange={(e) => handleAdvancedInputChange('location', e.target.value)}
                  placeholder="Enter location..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Min Repositories
                </label>
                <input
                  type="number"
                  value={searchParams.minRepos}
                  onChange={(e) => handleAdvancedInputChange('minRepos', parseInt(e.target.value) || 0)}
                  placeholder="0"
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Searching...' : 'Search Users'}
            </button>
          </form>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="mt-2 text-gray-600">Loading...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Basic Search Results */}
        {!advancedSearch && userData && !loading && (
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center space-x-4">
              <img
                src={userData.avatar_url}
                alt={userData.login}
                className="w-20 h-20 rounded-full"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">
                  {userData.name || userData.login}
                </h2>
                <p className="text-gray-600">@{userData.login}</p>
                {userData.bio && (
                  <p className="text-gray-700 mt-2">{userData.bio}</p>
                )}
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                  {userData.location && (
                    <span>📍 {userData.location}</span>
                  )}
                  <span>📚 {userData.public_repos} repositories</span>
                  <span>👥 {userData.followers} followers</span>
                </div>
                <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Advanced Search Results */}
        {advancedSearch && searchResults.length > 0 && !loading && (
          <div>
            <div className="mb-4">
              <p className="text-gray-600">
                Found {totalCount} users {totalCount > 10 && '(showing first 10)'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {searchResults.map((user) => (
                <div key={user.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={user.avatar_url}
                      alt={user.login}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{user.login}</h3>
                      <p className="text-sm text-gray-600">Score: {user.score?.toFixed(1)}</p>
                      <a
                        href={user.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 text-sm"
                      >
                        View Profile →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {advancedSearch && searchResults.length === 0 && !loading && !error && totalCount === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600">No users found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

