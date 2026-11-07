import { useContext } from "react";
import { ExperiencesInterface } from "../../../interfaces/interface";
import SubTitle from "../SubTitle/SubTitle";
import './Experiences.css';
import { ThemeContext } from "../../context/ThemeContext";
//Retorna card de experiências profissional.
export default function Experiences(props: { experiencesList: ExperiencesInterface[] }) {
    //Obtém tema atual
    const { theme } = useContext(ThemeContext);

    return <div className="experiences-container">
        {/*SubTitulo */}
        <SubTitle title="Experiências Profissionais" />
        {props.experiencesList.map((e, key) => {
            return <div className={theme === 'dark' ? 'experiences-card-dark' : 'experiences-card-light'} key={key}>
                {/*Cabeçalho do card. */}
                <div className="experiences-card-header">
                    <h2>{e.nome_empresa}</h2>
                    <p>{e.cargo}</p>
                </div>
                {/*Corpo do card. */}
                <div className="experiences-card-body">
                    {/*Gera linha e circulo */}

                    <p>{e.data_inicial}</p>
                    <div className="ball">
                    </div>
                    <div className="line">
                    </div>
                    <div className="ball"></div>
                    {e.data_final === null ? <p>Atualmente</p> : <p>{e.data_final}</p>}
                </div>
            </div>
        })}
    </div>
}