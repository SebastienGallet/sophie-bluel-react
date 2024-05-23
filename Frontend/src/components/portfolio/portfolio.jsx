import { useState } from 'react';
import Gallery from "../gallery/gallery";
import Categories from "../categories/categories";

function Portfolio({ works, categories, isAdmin, onEditClick }) {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredWorks = selectedCategory === 'all' ? works : works.filter(work => work.categoryId === selectedCategory);

    return (
        <div className="galleryContainer">
            <h2>Mes Projets {isAdmin && <button onClick={onEditClick} className="adminEdit"><i class="fa-solid fa-pen-to-square"></i>modifier</button>}</h2>
            <Categories categories={categories} onCategoryChange={handleCategoryChange} />
            <Gallery works={filteredWorks} />
        </div>
    );
}

export default Portfolio;
