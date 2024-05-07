import { useEffect, useState } from 'react';
import Introduction from '../../components/introduction/introduction.jsx';
import Portfolio from '../../components/portfolio/portfolio.jsx';
import { getWorks, getCategories } from '../../services/api.jsx';
import Contact from '../../components/contact/contact.jsx';
import DeletePicture from '../../components/modales/deletePicture.jsx';

function Home({ isAdmin }) {  
  const [works, setWorks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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
        works={works}
        refreshPictures={refreshPictures}
      />
    </main>
  );
}

export default Home;
