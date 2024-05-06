import { useEffect, useState } from 'react';
import Introduction from '../../components/introduction/introduction.jsx';
import Portfolio from '../../components/portfolio/portfolio.jsx';
import { getWorks } from '../../services/api.jsx';
import Contact from '../../components/contact/contact.jsx';


function Home() {  
  const [works, setWorks] = useState([]);

  // Premier useEffect pour récupérer les works
  useEffect(() => {
    getWorks().then(data => {
      setWorks(data);  // Met à jour le state avec les données récupérées
    });
  }, []);

  // Second useEffect pour afficher le state après mise à jour
  useEffect(() => {
    console.log(works);  // Ceci s'exécute après la mise à jour de works
  }, [works]);  // Dépendance à `works` pour s'exécuter lorsque `works` change

  

  return (
    <main>
      <Introduction />
      <Portfolio works={works} />
      <Contact />
    </main>
  );
}

export default Home;