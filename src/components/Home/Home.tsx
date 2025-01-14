import Certification from "../Certification/Certification";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";
import Skills from "../Skills/Skills";
import './Home.css';

//Página inicial
function Home() {
    return (
        <body>
            {/* Navegação */}
            <Nav />
            <div className="container">
                {/* Perfil */}
                <Profile />
                {/* Skills */}
                <Skills />
                {/* Certificado */}
                <Certification />
            </div>
        </body>
    );
}

export default Home;