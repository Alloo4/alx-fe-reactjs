import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddRecipeForm = ({ onAddRecipe }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    image: '',
    ingredients: '',
    instructions: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.summary.trim()) newErrors.summary = 'Summary is required';
    if (!formData.ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    if (!formData.instructions.trim()) newErrors.instructions = 'Instructions are required';
    
    const ingredientsList = formData.ingredients.split('\n').filter(i => i.trim());
    if (ingredientsList.length < 2) newErrors.ingredients = 'Please provide at least 2 ingredients';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const newRecipe = {
      id: Date.now(),
      title: formData.title,
      summary: formData.summary,
      image: formData.image || 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
      ingredients: formData.ingredients.split('\n').filter(i => i.trim()),
      instructions: formData.instructions.split('\n').filter(i => i.trim())
    };

    onAddRecipe(newRecipe);
    setFormData({ title: '', summary: '', image: '', ingredients: '', instructions: '' });
    alert('Recipe added successfully!');
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/"
          className="mb-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors inline-block"
        >
          ← Back to Home
        </Link>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add New Recipe</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter recipe title..."
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Summary</label>
                <textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  rows="3"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.summary ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Brief description of your recipe..."
                />
                {errors.summary && <p className="text-red-500 text-sm mt-1">{errors.summary}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Image URL (Optional)</label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Ingredients</label>
                <textarea
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                  rows="6"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.ingredients ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter each ingredient on a new line..."
                />
                {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
                <p className="text-gray-500 text-sm mt-1">Enter each ingredient on a new line</p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Instructions</label>
                <textarea
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  rows="8"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.instructions ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter each step on a new line..."
                />
                {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
                <p className="text-gray-500 text-sm mt-1">Enter each step on a new line</p>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Add Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;
