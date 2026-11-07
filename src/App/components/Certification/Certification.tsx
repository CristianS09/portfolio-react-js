import SubTitle from '../SubTitle/SubTitle';
import './Certification.css';
import { CertificationInterface } from '../../../interfaces/interface.ts';

//Componente que exibe dos certificados.
function Certification(props: { certificationsList: CertificationInterface[] }) {
    return (
        <>
            <div id="certification-container">
                <SubTitle title='Certificados' />
                {
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 5 }}>
                            {props.certificationsList.map((e) => {
                                {/*Card dos certificados. */ }
                                return <div className='certification-card'>
                                    <p>{e.descricao}</p>
                                    <img src={e.imagem_url} />
                                    <span>
                                        {e.data}
                                    </span>
                                </div>
                            })}
                        </div>
                    </div>
                }
            </div>
        </>
    );
}

export default Certification;