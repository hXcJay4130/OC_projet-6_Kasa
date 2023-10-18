// import { Link, NavLink } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

function Header() {
    return (
        <header className="navbar">
            <img src={logo} alt='Logo Kasa' className='navbar__logo'/>
            <nav className="navbar__nav">
                <NavLink className="navbar__link" to="/">Accueil</NavLink>
                <NavLink className="navbar__link" to="/about">A propos</NavLink>
            </nav>  
        </header>
    )
}

export default Header
