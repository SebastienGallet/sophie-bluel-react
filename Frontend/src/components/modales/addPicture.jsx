import { useState, useEffect } from 'react';
import { postWork } from '../../services/api';

function AddPicture({ isOpen, onClose, onBack, categories, refreshPictures }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [categoryId, setCategoryId] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    console.log("AddPicture modal isOpen:", isOpen);
  }, [isOpen]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !image || !categoryId) {
      console.error("All fields are required!");
      return;
    }
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    formData.append('category', categoryId);

    console.log("Submitting formData:", {
      title,
      image,
      categoryId,
    });

    const token = localStorage.getItem('token');
    const response = await postWork(formData, token);
    if (response) {
      refreshPictures();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal addPicture">
      <div className="modal-content">
        <h2>Ajouter une nouvelle photo</h2>
        {preview && <img src={preview} alt="Preview" />}
        <form onSubmit={handleSubmit}>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Titre de l'œuvre" required />
          <input type="file" onChange={handleImageChange} required />
          <select value={categoryId} onChange={e => setCategoryId(e.target.value)} required>
            <option value="" disabled>Choisir une catégorie</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
          <button type="submit">Ajouter</button>
          <button type="button" onClick={onBack}>Retour</button>
          <button type="button" onClick={onClose}>Fermer</button>
        </form>
      </div>
    </div>
  );
}

export default AddPicture;
