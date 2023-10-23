import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
    const location = useLocation();

    return (
        <header className='kasa-header'>
            <img src={logo} alt='kasa' />
            <nav className='kasa-nav'>
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>Accueil</Link>
                <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>A Propos</Link>
            </nav>
        </header>
    );
}

export default Header;
