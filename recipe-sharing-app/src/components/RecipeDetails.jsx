import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  
  const { recipes, favorites, addFavorite, removeFavorite } = useRecipeStore();
  const recipe = recipes.find(recipe => recipe.id === parseInt(id));
  
  if (!recipe) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Recipe Not Found</h2>
        <p>The recipe you're looking for doesn't exist.</p>
        <button 
          onClick={() => navigate('/')}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Back to Recipes
        </button>
      </div>
    );
  }

  const isFavorite = favorites.includes(recipe.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  const handleDelete = () => {
    navigate('/');
  };

  if (isEditing) {
    return (
      <EditRecipeForm 
        recipe={recipe} 
        onCancel={() => setIsEditing(false)}
        onSave={() => setIsEditing(false)}
      />
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => navigate('/')}
          style={{ 
            padding: '8px 16px', 
            backgroundColor: '#6c757d', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          ← Back to Recipes
        </button>
        
        <button 
          onClick={handleFavoriteToggle}
          style={{ 
            padding: '8px 16px', 
            backgroundColor: isFavorite ? '#dc3545' : '#ffc107', 
            color: isFavorite ? 'white' : 'black', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
        </button>
      </div>

      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', marginBottom: '20px' }}>
        <h1 style={{ margin: '0 0 15px 0', color: '#333' }}>{recipe.title}</h1>
        <p style={{ fontSize: '18px', color: '#666', margin: '0' }}>{recipe.description}</p>
      </div>

      {recipe.ingredients && (
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#333', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>
            Ingredients
          </h3>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
            <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', margin: '0' }}>
              {recipe.ingredients}
            </pre>
          </div>
        </div>
      )}

      {recipe.instructions && (
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#333', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>
            Instructions
          </h3>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
            <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', margin: '0' }}>
              {recipe.instructions}
            </pre>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
        <button 
          onClick={() => setIsEditing(true)}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#17a2b8', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Edit Recipe
        </button>
        
        <DeleteRecipeButton recipeId={recipe.id} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default RecipeDetails;

