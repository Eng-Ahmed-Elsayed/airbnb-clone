import logo from '../assets/airbnb-logo.svg'

export default function Navbar() {
    return (
        <nav className='nav'>
            <img src={logo} alt="Aribnb Logo" className='logo' />
        </nav>
    )
}