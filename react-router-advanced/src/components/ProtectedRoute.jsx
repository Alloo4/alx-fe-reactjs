import { Navigate } from 'react-router-dom';

// Simple authentication context (in a real app, this would be more sophisticated)
const useAuth = () => {
  // Simulate authentication status - in a real app, this would come from context/state
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return { isAuthenticated };
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

