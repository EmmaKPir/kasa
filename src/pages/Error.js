import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
          <h1 className="kasa-error-number">404</h1>
          <p className="kasa-error-txt">Oups! La page que vous demandez n'existe pas.</p>
          <div className='kasa-error-home'>
            <Link to="/">Retourner sur la page d'accueil</Link>
          </div>
        </div>
      )}
    
export default Error