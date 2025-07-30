import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navStyle = {
    backgroundColor: '#343a40',
    padding: '1rem 2rem',
    marginBottom: '20px'
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
    alignItems: 'center'
  };

  const liStyle = {
    marginRight: '30px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'background-color 0.3s'
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: '#007bff'
  };

  const titleStyle = {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    marginRight: 'auto'
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={titleStyle}>🍳 Recipe Sharing App</li>
        <li style={liStyle}>
          <Link 
            to="/" 
            style={location.pathname === '/' ? activeLinkStyle : linkStyle}
          >
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link 
            to="/add-recipe" 
            style={location.pathname === '/add-recipe' ? activeLinkStyle : linkStyle}
          >
            Add Recipe
          </Link>
        </li>
        <li style={liStyle}>
          <Link 
            to="/favorites" 
            style={location.pathname === '/favorites' ? activeLinkStyle : linkStyle}
          >
            Favorites
          </Link>
        </li>
        <li style={liStyle}>
          <Link 
            to="/recommendations" 
            style={location.pathname === '/recommendations' ? activeLinkStyle : linkStyle}
          >
            Recommendations
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

