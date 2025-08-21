import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          
          {/* Protected Routes */}
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            {/* Nested Routes */}
            <Route index element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
