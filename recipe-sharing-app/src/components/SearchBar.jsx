import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useRecipeStore();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search recipes by title or description..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ 
          width: '100%',
          maxWidth: '500px',
          padding: '12px 20px', 
          fontSize: '16px',
          border: '2px solid #007bff',
          borderRadius: '25px',
          outline: 'none',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      />
      {searchTerm && (
        <p style={{ marginTop: '10px', color: '#666' }}>
          Searching for: "{searchTerm}"
        </p>
      )}
    </div>
  );
};

export default SearchBar;

