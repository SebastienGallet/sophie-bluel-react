import { deleteWork } from '../../services/api.jsx';

function DeletePicture({ isOpen, onClose, works, refreshPictures }) {
  const handleDelete = (pictureId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return;
    }

    deleteWork(pictureId, token)
      .then(() => {
        refreshPictures(); // fonction pour rafraîchir la liste des images après suppression
        onClose(); // fermer la modale
      })
      .catch(error => {
        console.error("Failed to delete the picture:", error);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="deleteModal">
      <div className="modal-content">
        <h2>Gallerie Photo</h2>
        <div className="galleryModale">
          {works.map((work, index) => (
            <div key={index} className="galleryItem">
              <img src={work.imageUrl} alt={work.title} />
              <i onClick={() => handleDelete(work.id)} className="fas fa-trash-alt" style={{ cursor: 'pointer' }}></i>
            </div>
          ))}
        </div>
        <button>Ajouter une photo</button>
        <button onClick={onClose}>x</button>
      </div>
    </div>
  );
}

export default DeletePicture;
