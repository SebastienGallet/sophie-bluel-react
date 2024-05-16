import { useEffect, useState } from 'react';
import Introduction from '../../components/introduction/introduction.jsx';
import Portfolio from '../../components/portfolio/portfolio.jsx';
import { getWorks, getCategories } from '../../services/api.jsx';
import Contact from '../../components/contact/contact.jsx';
import DeletePicture from '../../components/modales/deletePicture.jsx';
import AddPicture from '../../components/modales/addPicture.jsx';

function Home({ isAdmin }) {  
  const [works, setWorks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    getWorks().then(data => {
      setWorks(data);
    });
    getCategories().then(data => {
      setCategories(data);
    });
  }, []);

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const refreshPictures = async () => {
    const updatedWorks = await getWorks();
    setWorks(updatedWorks);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
    setIsDeleteModalOpen(false);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  const backToDeleteModal = () => {
    setIsAddModalOpen(false);
    setIsDeleteModalOpen(true);
  };

  return (
    <main>
      <Introduction />
      <Portfolio 
        works={works} 
        categories={categories} 
        isAdmin={isAdmin}
        onEditClick={openDeleteModal}
      />
      <Contact />
      <DeletePicture 
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onAddClick={openAddModal}
        works={works}
        refreshPictures={refreshPictures}
      />
      <AddPicture 
        isOpen={isAddModalOpen}
        onClose={closeAddModal}
        onBack={backToDeleteModal}
        categories={categories}
        refreshPictures={refreshPictures}
      />
    </main>
  );
}

export default Home;
