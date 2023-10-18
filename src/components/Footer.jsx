import footLogo from '../assets/footerLogo.png'

function Header() {
    return (
        <footer>
            <img src={footLogo} alt='Logo Kasa' className='kasa-logo'/>
            <p>©2020 Kaza. All rights reserved</p>
        </footer>
    )
}

export default Header
