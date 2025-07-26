import './Profile.css';

function Profile() {
    return (
        <>
            <div className="profile-container">
                <img id="profile-image" src={'images/profile.png'} alt="imagem de perfil" />
                <h1 id="title">Olá👋, meu nome é <span>Cristian</span></h1>
                <p>Cursando Desenvolvimento Full Stack na universidade Estácio de Sá.</p>
                {/* Links para rede social */}
                <div className="social-media">
                    <a className="logo" href={'https://github.com/CristianS09'}><img src={'/images/logo/github.svg'} alt="Logo Github" /></a>
                    <a className="logo" href={'https://www.linkedin.com/in/cristian-macena'}><img src={'images/logo/linkedin.svg'} alt="Logo Linkedin" /></a>
                </div>
            </div>
        </>
    );
}

export default Profile;