import './PublishedApps.css'
import SubTitle from '../SubTitle/SubTitle';
import { ThemeContext } from '../../context/ThemeContext';
import ProjectImage from '../ProjectImage/ProjectImage';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { PublishedAppsInterface } from '../../../interfaces/interface.ts';
import { useContext } from 'react';

//Card com os aplicativos publicados
export default function PublishedApps(props: { storeAppsList: PublishedAppsInterface[] }) {

    const { theme } = useContext(ThemeContext);

    return <>
        {/*Componente SubTitulo. */}
        <SubTitle title='Aplicativos Publicados' />
        {props.storeAppsList.map((e, key) => {
            {/*Container.*/ }
            return <div className="published-apps-container">

                {/*Card.*/}
                <div className={theme === 'dark' ? 'published-apps-card-dark' : 'published-apps-card-light'} key={key}>

                    {/*Cabeçalho do card. */}
                    <div className='published-apps-card-header'>
                        <img src={`${e.icone}`} className='icon-app' />
                        <h1>{e.titulo}</h1>
                    </div>
                    {/*Corpo do card. */}
                    <div className='published-apps-card-body'>
                        {/*Gera imagens dos cards a partir da lista de imagem da api. */}
                        <ProjectImage images={e.imagens.map((image) => image.url)} projectName={e.titulo} />
                        {/*Descrição do projeto. */}
                        <div className='project-description'>
                            <p>{e.descricao}</p>
                        </div>
                    </div>

                    {/*Rodapé do ccard. */}
                    <div className='published-apps-card-footer'>
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
                            <a href={e.url_projeto} target="_blank" className='link-button-store'>
                                Play Store
                                <IoLogoGooglePlaystore />
                            </a></div>
                    </div>
                </div>
            </div>
        })}
    </>
}