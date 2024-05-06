import { Link } from 'react-router-dom'
import instagramIcon from './../../assets/icons/instagram.png'

function Header() {
  return (
    <header>
      <h1>Sophie Bluel <span>Architecte d'intérieur</span></h1>
      <nav>
        <ul>
          <li><Link to="/">Projets</Link></li>
          <li>Contact</li>
          <li><Link to="/login">Login</Link></li>
          <li><img src={instagramIcon} alt="Instagram"></img></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header