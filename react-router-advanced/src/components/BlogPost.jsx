import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog posts data
  const blogPosts = {
    1: {
      title: "Getting Started with React Router",
      content: "React Router is a powerful library for handling routing in React applications. It allows you to create single-page applications with navigation without the page refreshing as the user navigates. In this post, we'll explore the basics of React Router and how to implement dynamic routing.",
      author: "Jane Smith",
      date: "2024-01-15",
      tags: ["React", "Routing", "JavaScript"]
    },
    2: {
      title: "Advanced React Patterns",
      content: "As React applications grow in complexity, it becomes important to understand advanced patterns that can help you write more maintainable and scalable code. This post covers render props, higher-order components, and custom hooks.",
      author: "John Doe",
      date: "2024-01-20",
      tags: ["React", "Patterns", "Advanced"]
    },
    3: {
      title: "State Management in Modern React",
      content: "State management is a crucial aspect of React development. With the introduction of hooks like useState and useReducer, along with Context API, managing state has become more flexible. This post explores different approaches to state management.",
      author: "Alice Johnson",
      date: "2024-01-25",
      tags: ["React", "State Management", "Hooks"]
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
        <Link 
          to="/blog" 
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link 
        to="/blog" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </Link>

      <article className="bg-white rounded-lg shadow-md p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 text-sm mb-4">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg">
            {post.content}
          </p>
        </div>

        <footer className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Post ID: {id}
            </div>
            <div className="flex space-x-4">
              <button className="text-blue-600 hover:text-blue-800">
                Share
              </button>
              <button className="text-blue-600 hover:text-blue-800">
                Like
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;

