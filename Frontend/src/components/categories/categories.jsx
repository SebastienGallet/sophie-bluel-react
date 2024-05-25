function Categories({ categories, onCategoryChange, selectedCategory }) {
  return (
    <div className="categoriesContainer">
      <button
        key="all"
        className={selectedCategory === "all" ? "active" : ""}
        onClick={() => onCategoryChange("all")}
      >
        Tous
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          className={selectedCategory === category.id ? "active" : ""}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default Categories;
