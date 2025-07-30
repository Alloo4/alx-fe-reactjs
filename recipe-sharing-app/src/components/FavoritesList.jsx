import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const { favorites, recipes, removeFavorite } = useRecipeStore();
  
  const favoriteRecipes = favorites.map(id =>
    recipes.find(recipe => recipe.id === id)
  ).filter(Boolean);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>❤️ My Favorites</h2>
      
      {favoriteRecipes.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p style={{ fontSize: '18px', color: '#666' }}>No favorite recipes yet!</p>
          <p style={{ color: '#999' }}>Start adding recipes to your favorites by clicking the heart icon.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {favoriteRecipes.map(recipe => (
            <div key={recipe.id} style={{ 
              border: '2px solid #ffc107', 
              borderRadius: '8px', 
              padding: '15px',
              backgroundColor: '#fff8e1',
              position: 'relative'
            }}>
              <button
                onClick={() => removeFavorite(recipe.id)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'none',
                  border: 'none',
                  fontSize: '20px',
                  cursor: 'pointer',
                  color: '#dc3545'
                }}
                title="Remove from favorites"
              >
                ❤️
              </button>
              
              <h3 style={{ margin: '0 0 10px 0', color: '#333', paddingRight: '30px' }}>
                {recipe.title}
              </h3>
              <p style={{ color: '#666', marginBottom: '15px' }}>
                {recipe.description}
              </p>
              
              <Link 
                to={`/recipe/${recipe.id}`}
                style={{ 
                  display: 'inline-block',
                  padding: '8px 16px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              >
                View Recipe
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;

