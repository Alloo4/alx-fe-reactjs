import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const { recommendations, generateRecommendations, favorites, recipes } = useRecipeStore();

  useEffect(() => {
    generateRecommendations();
  }, [favorites, recipes, generateRecommendations]);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>🌟 Recommended for You</h2>
      
      {recommendations.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p style={{ fontSize: '18px', color: '#666' }}>No recommendations available yet!</p>
          <p style={{ color: '#999' }}>Add some recipes to your favorites to get personalized recommendations.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {recommendations.map(recipe => (
            <div key={recipe.id} style={{ 
              border: '2px solid #28a745', 
              borderRadius: '8px', 
              padding: '15px',
              backgroundColor: '#f8fff9',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: '#28a745',
                color: 'white',
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                RECOMMENDED
              </div>
              
              <h3 style={{ margin: '0 0 10px 0', color: '#333', paddingRight: '100px' }}>
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
                  backgroundColor: '#28a745',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              >
                Try This Recipe
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationsList;

