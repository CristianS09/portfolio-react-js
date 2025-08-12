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

//Componente Projects
function Projects() {

    const [selectElement, setSelectElement] = useState<Projects[]>([]);
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
        selectList('All');
    }, []);

    return (<>
        <Nav />
        <h1 style={{ textAlign: 'center' }}>Projetos</h1>
        <hr />
        <div className="select-container">
            <select onChange={(value) => selectList(value.target.value)} defaultValue={'All'}>
                <option value={'All'}>Todos</option>
                <option value={'Javascript/Html/CSS'}>Javascript /Html/ CSS</option>
                <option value={'React'}>React</option>
                <option value={'Java'}>Java</option>
                <option value={'React Native'}>React Native</option>
                <option value={'Flutter'}>Flutter</option>
            </select>
        </div>
        {selectElement.map((e) =>
            <div className="container" key={e.id}>
                <div className="project-card">
                    <h1>{e.title}</h1>
                    <p>{e.subtitle}</p>
                    <div className="images-container">
                        <img className="project-images" src={e.images[0]} alt={e.alt} />
                        <img className="project-images" src={e.images[1]} alt={e.alt} />
                    </div>
                    <a href={e.link}>
                        <div className="link-button">
                            Mais Detalhes
                            <img src={'images/logo/github-repo.svg'} />
                        </div>
                    </a>
                </div>
            </div>
        )}
    </>
    );
}

export default Projects;