import './Projects.css';
import ProjectImage from '../ProjectImage/ProjectImage';
import { FaGithub, FaClock } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import SubTitle from '../SubTitle/SubTitle.tsx';
import { ProjectInterface } from '../../../interfaces/interface.ts';
import { ThemeContext } from '../../context/ThemeContext.tsx';
import { useContext } from 'react';

//Componente Projects
export default function Projects(props: { projectList: ProjectInterface[] }) {

    //Obtém o tema atual do contexto,
    const { theme } = useContext(ThemeContext);


    return (<>
        {/*Container dos cards de projeto. */}
        <SubTitle title='Projetos' />
        {props.projectList.map((e, key) =>
            <div className='project-card-container'>
                {/*Gera um card para cada projeto da lista*/}
                <div className={theme === 'dark' ? 'project-card-dark' : 'project-card-light'} key={key} >
                    <div className="project-card-header">
                        <h1>{e.titulo}</h1>
                        <span className='date-badge'><FaClock />{e.data_envio}</span>
                    </div>
                    {/*Corpo do card. */}
                    <div className="project-card-body" >
                        {/*Gera imagens dos cards a partir da lista de imagem da api. */}
                        <ProjectImage images={e.imagens.map((image) => image.url)} projectName={e.titulo} />
                        {/*Descrição do projeto. */}
                        <div className='project-description'>
                            <p>{e.descricao}</p>
                        </div>
                    </div>
                    {/*Rodapé do card */}
                    <div className="project-card-footer">
                        {/*Gera badge para cada stack usada no projeto. */}
                        <div className='stacks-badge-container'>
                            {
                                e.stacks.map((stack, key) => {
                                    return <div className='stacks-badge' style={{ backgroundColor: stack.cor + '30' }} key={key}>
                                        <p style={{ color: stack.cor }}> • {stack.nome_stack}</p>
                                    </div>
                                })
                            }
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                            {/*Links do projeto*/}
                            <a href={e.url_projeto} target="_blank" className='link-button-repo'>
                                Repositório
                                <FaGithub />
                            </a>
                            {
                                e.url_hospedagem ? <a href={e.url_hospedagem} target="_blank" className='link-button-project'>
                                    Abrir Projeto
                                    <FaArrowUpRightFromSquare />
                                </a> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
        }
    </>
    );
}
