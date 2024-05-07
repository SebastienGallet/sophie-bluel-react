import { useState } from 'react';
import { addPicture } from '../api/API';

function AddPicture({ isOpen, onClose, refreshPictures }) {
  const [pictureData, setPictureData] = useState('');

  const handleSubmit = () => {
    addPicture({ url: pictureData })
      .then(() => {
        refreshPictures(); // fonction pour rafraîchir la liste des images après ajout
        onClose(); // fermer la modale
      });
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Ajouter une photo</h1>
        <input
          type="text"
          value={pictureData}
          onChange={(e) => setPictureData(e.target.value)}
          placeholder="Entrez l'URL de l'image"
        />
        <button onClick={handleSubmit}>Ajouter</button>
        <button onClick={onClose}>Annuler</button>
      </div>
    </div>
  );
}

export default AddPicture;
