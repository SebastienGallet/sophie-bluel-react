import React, { useState, useEffect } from "react";
import { postWork } from "../../services/api";

function AddPicture({ isOpen, onClose, onBack, categories, refreshPictures }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const [preview, setPreview] = useState("");

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
    formData.append("title", title);
    formData.append("image", image);
    formData.append("category", categoryId);

    console.log("Submitting formData:", {
      title,
      image,
      categoryId,
    });

    const token = localStorage.getItem("token");
    const response = await postWork(formData, token);
    if (response) {
      refreshPictures();
      handleClose();
    }
  };
  // Fonction pour réinitialiser les états du formulaire
  const resetForm = () => {
    setTitle("");
    setImage(null);
    setCategoryId("");
    setPreview("");
  };

  // Handlers pour fermer ou revenir en arrière, en réinitialisant le formulaire
  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleBack = () => {
    resetForm();
    onBack();
  };
  if (!isOpen) return null;

  return (
    <div className="modal addPicture">
      <div className="modal-content">
        <div className="navigation">
          <button type="button" onClick={handleBack}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button type="button" onClick={handleClose}>
            x
          </button>
        </div>
        <h2>Ajout photo</h2>
        {preview ? (
          <div className="file-upload-container">
            <button
              onClick={() => document.getElementById("file-upload").click()}
            >
              <img src={preview} alt="Preview" className="preview-image" />
            </button>
            <input
              type="file"
              id="file-upload"
              className="file-upload-input"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>
        ) : (
          <div className="file-upload-container">
            <i className="fa-solid fa-image"></i>
            <div className="styled-upload-button-wrapper">
              <button type="button" className="styled-upload-button">
                Ajouter une photo
              </button>
              <input
                type="file"
                id="file-upload"
                className="file-upload-input"
                onChange={handleImageChange}
                required
              />
            </div>
            <p className="uploadDetails">Taille max: 5Mo</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="category">Catégorie</label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
          >
            <option value="" disabled>
              Choisir une catégorie
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className={`submit-button ${
              title && image && categoryId ? "active" : ""
            }`}
          >
            Valider
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPicture;
