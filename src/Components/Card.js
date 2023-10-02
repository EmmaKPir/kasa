import { Link } from 'react-router-dom'

function Card ({id, title, cover}) {
    return  (
        <Link key={id} to={`/logement/${id}`}> 
            <div className="kasa-card">
                <img className="kasa-card-photo" src={cover} alt={`${title} cover`} />
                <p className="kasa-card-txt">{title}</p>        
            </div>
        </Link>
    )
}

export default Card