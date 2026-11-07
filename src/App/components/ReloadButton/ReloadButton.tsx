import './ReloadButton.css';
import { FaSpinner } from "react-icons/fa";

//Botão para recarregar os dados da api ao ocorrer um erro.
export default function ReloadButton(props: { reloadFunction: Function }) {
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%', paddingBottom: 10 }}>
        <p>Não foi possível obter os dados. Por favor, tente novamente.</p>
        <button className='reload-button' onClick={() => props.reloadFunction()}> <FaSpinner /> Tentar Novamente</button>
    </div >
}