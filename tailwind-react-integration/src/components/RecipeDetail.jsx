import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

const RecipeDetail = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/"
          className="mb-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors inline-block"
        >
          ← Back to Recipes
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
            <p className="text-lg text-gray-600 mb-8">{recipe.summary}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Instructions</h2>
                <ol className="space-y-3">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      {instruction}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
