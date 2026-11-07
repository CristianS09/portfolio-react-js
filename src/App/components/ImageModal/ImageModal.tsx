import { Dispatch } from 'react';
import './ImageModal.css';
//Exibe imagem do projeto em modal ao clicar
export default function ImageModal(props: { src: string, projectName: string, showModal: boolean, setShowModal: Dispatch<boolean> }) {

    //Fecha modal.
    function closeModal() {
        props.setShowModal(false);
        document.body.style.overflowY = 'visible';
    }

    return <>
        {props.showModal ? <div id='modal-overlayer'>
            {/*Modal*/}
            <div id='modal'>
                {/*Cabeçalho do modal */}
                <div id='modal-header'>
                    <h1>{props.projectName}</h1>
                    <button onClick={closeModal} id='close-button'>Fechar</button>
                </div>
                {/*Corpo do modal */}
                <div id='modal-body'>
                    <img src={props.src} />
                </div>
            </div>
        </div> : null}
    </>
}