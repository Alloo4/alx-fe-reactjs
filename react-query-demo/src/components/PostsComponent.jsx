import { useQuery } from 'react-query';

// Function to fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Using React Query to fetch posts
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching
  } = useQuery('posts', fetchPosts, {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <span className="ml-3 text-lg text-gray-600">Loading posts...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-8">
        <div className="text-red-500 text-lg mb-4">
          Error: {error.message}
        </div>
        <button
          onClick={() => refetch()}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Posts from JSONPlaceholder</h1>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className={`px-4 py-2 rounded font-medium transition-colors ${
            isFetching
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white`}
        >
          {isFetching ? 'Refreshing...' : 'Refresh Posts'}
        </button>
      </div>

      {/* Cache Status Indicator */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-2">React Query Cache Status:</h3>
        <div className="text-sm text-blue-700">
          <p>• Data is cached for 10 minutes</p>
          <p>• Data is considered stale after 5 minutes</p>
          <p>• Navigate away and return to see caching in action</p>
          <p>• Status: {isFetching ? 'Fetching...' : 'Cached'}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts?.slice(0, 12).map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
              {post.title}
            </h2>
            <p className="text-gray-600 text-sm line-clamp-3">
              {post.body}
            </p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xs text-gray-500">Post #{post.id}</span>
              <span className="text-xs text-gray-500">User {post.userId}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-gray-600">
        <p>Showing 12 of {posts?.length} posts</p>
        <p className="text-sm mt-2">
          Data fetched from: https://jsonplaceholder.typicode.com/posts
        </p>
      </div>
    </div>
  );
};

export default PostsComponent;

