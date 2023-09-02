import './Header.css';
import starwarslogo from '/starwars-logo.png';
import { Link } from 'react-router-dom';


export default function Header() {
    
    return (
        <div className='header'>
            <img id="logo-header" src={starwarslogo} alt="logo do starWars"/>
            <Link to="/" className='links'>Início</Link>
            <Link to="/Galeria" className='links'>Galeria</Link>
        </div>
    )
}