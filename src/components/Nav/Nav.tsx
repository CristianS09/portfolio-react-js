import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
    return (
        <ul className="nav">
            <li>
                <Link to={'/contato'}>Contato</Link>
            </li>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/projetos'}>Projetos</Link>
            </li>
        </ul>);
}

export default Nav;