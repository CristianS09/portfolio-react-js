import { useEffect, useState } from "react";
import projectsData from "../../data/projectsData";
import Nav from "../Nav/Nav";
import './Projects.css';

//Interface para os a lista de projetos
interface Projects {
    id: number,
    title: string,
    subtitle: string,
    images: string[],
    link: string,
    alt: string,
    language: string,
}

//Leva para o topo da página e mostra/oculta botão
function start() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

//Componente Projects
function Projects() {
    //UseState
    //State para Mostrar/Ocultar modal
    const [visible, setVisible] = useState<boolean>(false);

    //State para Mostrar/Ocultar botão de levar para o topo
    const [buttonVisible, setButtonVisible] = useState<boolean>(false);

    //Altera filtro do elemento select
    const [selectElement, setSelectElement] = useState<Projects[]>([]);
    //Fecha modal
    function closeModal() {
        setVisible(false);
        document.body.style.overflow = 'visible';
    }

    //Abre modal com a imagem selecionada
    function openModal(url: string) {
        setVisible(true);
        const modalImage: HTMLImageElement | any = document.getElementById('modal-image');
        modalImage.src = url;
        document.body.style.overflow = 'hidden';
    }

    //Obtem o valor da tag select
    function selectList(select: HTMLSelectElement | string) {
        /*Obtem a lista de prjects de acordo com a linguagem 
        selecionada no select
        */
        if (select !== 'All') {
            setSelectElement(projectsData.filter((e) => e.language === select));
        }
        //Todos os dados da lista de projects caso o valor seja 'All'
        else {
            setSelectElement(projectsData);
        }
    }
    //Passa o valor de 'Todos' para a função ao carregar a aplicação
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                setButtonVisible(true);
            } else {
                setButtonVisible(false);
            }
        })
        selectList('All');
    }, []);

    return (<>
        <div id="modal-overlayer" style={{ visibility: visible ? 'visible' : 'hidden' }} onClick={closeModal}>
        </div>
        <div id="start-button" onClick={start} title="Ir para o topo" style={{ visibility: buttonVisible ? 'visible' : 'hidden' }} >
            <img src="/images/logo/arrow-up-solid.svg" width={13} />
        </div>
        <Nav />
        <div id="modal-container">
            <div id="modal" style={{ visibility: visible ? 'visible' : 'hidden' }}>
                <div id="modal-header">
                    <div id="close-modal-button" onClick={closeModal}>X</div>
                </div>
                <div id="modal-body">
                    <img id="modal-image" />
                </div>
            </div>
        </div>
        <h1 style={{ textAlign: 'center' }}>Projetos</h1>
        <hr />
        <div className="select-container">
            <select onChange={(value) => selectList(value.target.value)} defaultValue={'All'}>
                <option value={'All'}>Todos</option>
                <option value={'Javascript/Html/CSS'}>Javascript /Html/ CSS</option>
                <option value={'React'}>React</option>
                <option value={'Java'}>Java/Spring Boot</option>
                <option value={'React Native'}>React Native</option>
                <option value={'Flutter'}>Flutter</option>
            </select>
        </div>
        <div className="container">
            {selectElement.map((e) =>
                <div className="project-card" key={e.id}>
                    <div className="project-card-header">
                        <h1>{e.title}</h1>
                        <hr />
                    </div>
                    <div className="project-card-body">
                        <p>{e.subtitle}</p>
                        <div className="images-container">
                            <img className="project-images" src={e.images[0]} alt={e.alt} onClick={() => openModal(e.images[0])} />
                            <img className="project-images" src={e.images[1]} alt={e.alt} onClick={() => openModal(e.images[1])} />
                        </div>
                    </div>
                    <div className="project-card-footer">
                        <a href={e.link} target="_blank">
                            <div className="link-button">
                                Mais Detalhes
                                <img src={'images/logo/github-repo.svg'} />
                            </div>
                        </a>
                    </div>
                </div>
            )}
        </div>
    </>
    );
}

export default Projects;