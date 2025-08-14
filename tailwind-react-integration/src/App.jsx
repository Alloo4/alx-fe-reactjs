import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';
import recipesData from './data/recipes.json';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Routes>
        <Route 
          path="/" 
          element={<HomePage recipes={recipes} />} 
        />
        <Route 
          path="/recipe/:id" 
          element={<RecipeDetail recipes={recipes} />} 
        />
        <Route 
          path="/add-recipe" 
          element={<AddRecipeForm onAddRecipe={handleAddRecipe} />} 
        />
      </Routes>
    </div>
  );
};

export default App;
