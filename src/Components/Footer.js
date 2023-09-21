import logo2 from '../assets/logo2.png'

function Footer () {
    return (
        <footer className='kasa-footer'>
            <img className='kasa-logo2' src={logo2} alt='logo white'/>
            <div className='kasa-footer-text'> @ 2020 Kasa. All rights reserved</div>
        </footer>
    )
}

export default Footer