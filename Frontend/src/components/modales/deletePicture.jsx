import { deleteWork } from '../../services/api.jsx';

function DeletePicture({ isOpen, onClose, works, refreshPictures, onAddClick }) {
  const handleDelete = (pictureId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return;
    }

    deleteWork(pictureId, token)
      .then(() => {
        refreshPictures();
        onClose();
      })
      .catch(error => {
        console.error("Failed to delete the picture:", error);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="deleteModal">
      <div className="modal-content">
      <button onClick={onClose} className="close">x</button>
        <h2>Galerie Photo</h2>
        <div className="galleryModale">
          {works.map((work, index) => (
            <div key={index} className="galleryItem">
              <img src={work.imageUrl} alt={work.title} />
              <i onClick={() => handleDelete(work.id)} className="fas fa-trash-alt" style={{ cursor: 'pointer' }}></i>
            </div>
          ))}
        </div>
        <button onClick={onAddClick} className="addPicButton">Ajouter une photo</button>
      </div>
    </div>
  );
}

export default DeletePicture;
