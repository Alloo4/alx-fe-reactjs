import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import useRecipeStore from './components/recipeStore';
import './App.css';

function App() {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  // Initialize with some sample recipes
  useEffect(() => {
    const sampleRecipes = [
      {
        id: 1,
        title: "Classic Chocolate Chip Cookies",
        description: "Soft and chewy chocolate chip cookies that are perfect for any occasion.",
        ingredients: "2 cups all-purpose flour\n1 tsp baking soda\n1 tsp salt\n1 cup butter, softened\n3/4 cup granulated sugar\n3/4 cup brown sugar\n2 large eggs\n2 tsp vanilla extract\n2 cups chocolate chips",
        instructions: "1. Preheat oven to 375°F (190°C)\n2. Mix flour, baking soda, and salt in a bowl\n3. Cream butter and sugars until fluffy\n4. Beat in eggs and vanilla\n5. Gradually add flour mixture\n6. Stir in chocolate chips\n7. Drop rounded tablespoons onto ungreased baking sheets\n8. Bake 9-11 minutes until golden brown\n9. Cool on baking sheet for 2 minutes before removing"
      },
      {
        id: 2,
        title: "Spaghetti Carbonara",
        description: "A classic Italian pasta dish with eggs, cheese, and pancetta.",
        ingredients: "1 lb spaghetti\n6 oz pancetta or bacon, diced\n4 large eggs\n1 cup grated Parmesan cheese\n1/2 cup grated Pecorino Romano cheese\n3 cloves garlic, minced\nSalt and black pepper to taste\nFresh parsley for garnish",
        instructions: "1. Cook spaghetti according to package directions\n2. Cook pancetta in a large skillet until crispy\n3. Add garlic and cook for 1 minute\n4. Whisk eggs and cheeses in a bowl\n5. Drain pasta, reserving 1 cup pasta water\n6. Add hot pasta to pancetta pan\n7. Remove from heat and quickly stir in egg mixture\n8. Add pasta water as needed for creaminess\n9. Season with salt and pepper\n10. Garnish with parsley and serve immediately"
      },
      {
        id: 3,
        title: "Chicken Tikka Masala",
        description: "Tender chicken in a rich, creamy tomato-based curry sauce.",
        ingredients: "2 lbs chicken breast, cubed\n1 cup plain yogurt\n2 tbsp lemon juice\n2 tsp garam masala\n1 tsp cumin\n1 tsp coriander\n1 onion, diced\n4 cloves garlic, minced\n1 tbsp ginger, minced\n1 can crushed tomatoes\n1 cup heavy cream\nSalt and pepper to taste\nFresh cilantro for garnish",
        instructions: "1. Marinate chicken in yogurt, lemon juice, and spices for 30 minutes\n2. Cook chicken in a large skillet until browned\n3. Remove chicken and set aside\n4. Sauté onion, garlic, and ginger until fragrant\n5. Add tomatoes and simmer for 10 minutes\n6. Stir in cream and return chicken to pan\n7. Simmer for 15 minutes until chicken is cooked through\n8. Season with salt and pepper\n9. Garnish with cilantro and serve with rice"
      }
    ];
    setRecipes(sampleRecipes);
  }, [setRecipes]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div>
              <SearchBar />
              <RecipeList />
            </div>
          } />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

