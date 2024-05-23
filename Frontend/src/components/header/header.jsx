import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import instagramIcon from './../../assets/icons/instagram.png';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = '/login';
  }

  return (
    <header>
      <h1>Sophie Bluel <span>Architecte d'intérieur</span></h1>
      <nav>
        <ul>
          <li><Link to="/">Projets</Link></li>
          <li>Contact</li>
          <li>
            {isLoggedIn ? (
              <Link to="/" onClick={handleLogout}>Logout</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          <li><img src={instagramIcon} alt="Instagram"></img></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
