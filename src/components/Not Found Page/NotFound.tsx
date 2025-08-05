import './NotFound.css';
import { Link } from "react-router-dom";

function NotFound() {
    return <>
        <div className="container">
            <h1><span>Ops... </span>Esta página não foi encontrada. Que tal ir para essa?</h1>
            <Link to={'/'} id='link'>Clique aqui! 😀</Link>
        </div >
    </>
}

export default NotFound;