function Card ({id, title, cover}) {
    return  (
            <div key={id} className="kasa-card">
                <img className="kasa-card-photo" src={cover} alt={`${title} cover`} />
                <p className="kasa-card-txt">{title}</p>        
            </div>
    )
}

export default Card