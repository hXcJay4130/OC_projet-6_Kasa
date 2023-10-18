import { Link } from 'react-router-dom'

function FlatCard({ id, title, cover }) {
    return (
        <Link to={`/flatform/${id}`}>
            <li key={id} className='card'>
                <img className='card__cover' src={cover} alt={`${title} cover`} />
                <p className="card__text">
                    {title}
                </p>
            </li>
        </Link>
	)
}

export default FlatCard