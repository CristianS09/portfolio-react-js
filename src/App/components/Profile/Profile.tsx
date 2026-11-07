import './Profile.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";

//Informações do perfil.
function Profile() {
    return (
        <>
            {/*Container com as informações do perfil. */}
            <div id="profile-container">
                {/*Informações do perfil. */}
                <div id='profile-background'>
                    {/*Informações do perfil. */}
                    <div id='profile-card'>
                        <img id="profile-image" src={'images/profile.png'} alt="imagem de perfil" />
                        <h1 id="title">Olá👋, meu nome é <span style={{
                            color: '#3b5efa', fontWeight: 900
                        }}>Cristian</span></h1>
                        <p style={{ color: '#fff' }}>Desenvolvedor Full Stack e Mobile.</p>
                        {/* Links das redes social.*/}
                        <div className="social-media">
                            <a className="logo" target='_blank' href={'https://github.com/CristianS09'}><FaGithub color='#fff' size={40} /></a>
                            <a className="logo" target='_blank' href={'https://www.linkedin.com/in/cristian-macena'}><FaLinkedin color='#fff' size={40} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;