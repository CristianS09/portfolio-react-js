//Import de icons.
import { FaCode, FaGooglePlay, FaMoon, FaRegUserCircle, FaSun, FaCaretDown, FaGraduationCap } from "react-icons/fa";
import './NavBar.css';
import { MdWork } from "react-icons/md";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
//Barra de navegação
export default function NavBar() {
    //Altera cor do tema.
    const { setTheme, theme } = useContext(ThemeContext);
    //Mostra/Oculta modal.
    const [showNav, setShowNav] = useState<boolean>(false);

    //Muda tema.
    function changeTheme() {
        /*Se estiver no modo escuro coloca modo claro, se estiver no 
        modo escuro coloca modo claro.
         */
        if (theme === 'light') {
            //Armazena tema atual.
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            //Armazena tema atual.
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    }

    function closeNav() {
        setShowNav(false);
    }

    return <div id="nav-container">
        {/*Barra de navegação */}
        {
            showNav ? <nav className={theme === 'dark' ? 'navDark' : 'navLight'} onMouseLeave={closeNav} >
                {/*Botões de navegação */}
                <ul id="nav-buttons">
                    <li>
                        <a href='#sobre'><FaRegUserCircle size={20} />Sobre</a>
                    </li>
                    <li>
                        <a href='#projetos'><FaCode size={20} />Projetos</a>
                    </li>
                    <li>
                        <a href='#appspublicados'><FaGooglePlay size={20} />Aplicativos Publicados</a>
                    </li>
                    <li>
                        <a href='#certificados'><FaGraduationCap size={20} />Certificados</a>
                    </li>
                    <li>
                        <a href='#experiencias'><MdWork size={20} />Experiências</a>

                    </li>
                </ul>
                {theme === 'dark' ? <FaSun cursor={'pointer'} onClick={changeTheme} size={20} /> : <FaMoon onClick={changeTheme} size={20} cursor={'pointer'} />}
            </nav> : null
        }
        {
            !showNav ? <div id="open-nav-button" onMouseEnter={() => setShowNav(true)}><FaCaretDown color="#fff" size={20} /></div> : null
        }
    </div>
}