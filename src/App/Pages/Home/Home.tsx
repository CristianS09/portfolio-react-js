import Profile from '../../components/Profile/Profile';
import Skills from '../../components/Skills/Skills';
import Certification from '../../components/Certification/Certification';
import './Home.css';
import Projects from '../../components/Projects/Projects';
import NavBar from '../../components/NavBar/NavBar';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import PublishedApps from '../../components/PublishedApps/PublishedApps';
import ReloadButton from '../../components/ReloadButton/ReloadButton';
import { getCertifications, getExperiences, getProjects, getStoreApps } from '../../data/api/request';
import Loading from '../../components/Loading/Loading';
import { PublishedAppsInterface, CertificationInterface, ProjectInterface, ExperiencesInterface } from '../../../interfaces/interface.ts';
import Footer from '../../components/Footer/Footer.tsx';
import Experiences from '../../components/Experiences/Experiences.tsx';

//Página inicial
function Home() {

    //Obtém tema atual.
    const { theme } = useContext(ThemeContext);

    //Mostra/Oculta botão de recarregar dados da api ao ocorrer um erro.
    const [showReloadButton, setShowReloadButton] = useState<boolean>(false);

    //Mostra/Oculta loading.
    const [loading, setLoading] = useState(true);

    /*Armazena dados da api.*/
    //Lista de projetos.
    const [projects, setProjects] = useState<ProjectInterface[]>([]);
    //Lista de aplicativos publicados na loja.
    const [storeApps, setStoreApps] = useState<PublishedAppsInterface[]>([])
    //Lista de certificados.
    const [certifications, setCertifications] = useState<CertificationInterface[]>([])
    //Lista de experiências.
    const [experiences, setExperiences] = useState<ExperiencesInterface[]>([]);

    //Obtém todos os dados da api e armazena na lista.
    async function getAllData() {
        try {
            //Mostra loading.
            setLoading(true);
            //Insere dados nas listas.
            setProjects(await getProjects());
            setStoreApps(await getStoreApps());
            setCertifications(await getCertifications());
            setExperiences(await getExperiences());
            //Oculta botão de recarregar.
            setShowReloadButton(false);
        } catch (err) {
            //Mostra botão de recarregar se ocorrer algum erro.
            setShowReloadButton(true);
        } finally {
            setLoading(false);
        }
    }

    //Chama função ao carregar componentes.
    useEffect(() => {
        getAllData();
    }, [])

    return (
        <body className={theme === 'dark' ? 'dark' : 'light'}>
            {/*Barra de Navegação */}
            <NavBar />
            {/* Exibe informações do Perfil. */}
            <section id='sobre'>
                <Profile />
                {/* Skills. */}
                <Skills />
            </section>
            {loading ? <Loading message='Carregando Informações...' /> : showReloadButton ? <ReloadButton reloadFunction={getAllData} /> : <>
                {/*Sessão de Projetos.*/}
                <section id='projetos'>
                    <Projects projectList={projects} />
                </section>
                {/*Sessão de Apps Publicados.*/}
                <section id='appspublicados'>
                    <PublishedApps storeAppsList={storeApps} />
                </section>
                {/*Sessão de experiências */}
                <section id='experiencias'>
                    <Experiences experiencesList={experiences} />
                </section>
                {/*Sessão de Certificados.*/}
                <section id='certificados'>
                    <Certification certificationsList={certifications} />
                </section>
            </>
            }
            {/*Rodapé */}
            <Footer />
        </body>
    );
}

export default Home;