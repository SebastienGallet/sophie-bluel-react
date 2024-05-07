function Categories({ categories, onCategoryChange }) {
  return (
    <div className="categoriesContainer">
      <button key="all" onClick={() => onCategoryChange('all')}>Tous</button>
      {categories.map(category => (
        <button key={category.id} onClick={() => onCategoryChange(category.id)}>
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default Categories;
