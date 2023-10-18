import { Link } from 'react-router-dom'
import '../../styles/error.scss'

function Error() {
    return (
        <main>
            <h1 className="fourzerofour__number">404</h1>
            <p className="fourzerofour__text">Oups! La page que vous demandez n'existe pas</p>
            <Link className="fourzerofour__link fourzerofour__text" to="/">Retourner sur la page d'accueil</Link>  
        </main>
    )
}
 
export default Error