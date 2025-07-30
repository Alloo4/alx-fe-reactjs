import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// Create axios instance with base configuration
const githubAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  },
});

// Add authorization header if API key is available
if (import.meta.env.VITE_APP_GITHUB_API_KEY) {
  githubAPI.defaults.headers.common['Authorization'] = 
    `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`;
}

/**
 * Fetch user data from GitHub API
 * @param {string} username - GitHub username to search for
 * @returns {Promise} - Promise resolving to user data
 */
export const fetchUserData = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('User not found');
    }
    throw new Error('Failed to fetch user data');
  }
};

/**
 * Search users with advanced criteria
 * @param {Object} searchParams - Search parameters
 * @param {string} searchParams.username - Username to search for
 * @param {string} searchParams.location - Location filter
 * @param {number} searchParams.minRepos - Minimum number of repositories
 * @param {number} searchParams.page - Page number for pagination
 * @param {number} searchParams.perPage - Results per page
 * @returns {Promise} - Promise resolving to search results
 */
export const searchUsers = async ({ 
  username = '', 
  location = '', 
  minRepos = 0, 
  page = 1, 
  perPage = 10 
}) => {
  try {
    // Build search query
    let query = '';
    
    if (username) {
      query += `${username} in:login`;
    }
    
    if (location) {
      query += ` location:${location}`;
    }
    
    if (minRepos > 0) {
      query += ` repos:>=${minRepos}`;
    }
    
    // If no specific criteria, search for users with username
    if (!query && username) {
      query = username;
    }
    
    const response = await githubAPI.get('/search/users', {
      params: {
        q: query,
        page,
        per_page: perPage,
      },
    });
    
    return response.data;
  } catch (error) {
    throw new Error('Failed to search users');
  }
};

export default githubAPI;

