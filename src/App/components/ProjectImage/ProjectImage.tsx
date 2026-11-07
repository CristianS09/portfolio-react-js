import './ProjectImage.css';
import { useEffect, useState } from 'react';
import { FaCircleLeft, FaCircleRight } from "react-icons/fa6";
import ImageModal from '../ImageModal/ImageModal';
//Imagens do projeto.
function ProjectImage(props: { images: string[], projectName: string }) {
    //UseState para mostrar a imagem do projeto de acordo com a possição da lista.
    const [image, setImage] = useState<number>(0);
    const [disableLeftButton, setDisableLeftButton] = useState<boolean>(true);
    const [disableRightButton, setDisableRightButton] = useState<boolean>(false);
    //Mostra/Oculta modal.
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(
        () => {
            //Desativa os botões se só tiver uma imagem.
            if (props.images.length <= 1) {
                setDisableLeftButton(true);
                setDisableRightButton(true);
            }
        }, []
    )

    //Avança uma imagem na lista de imagem.
    function nextImage() {
        console.log(props.images.length)
        if (image + 1 === props.images.length - 1) {
            setImage(image + 1);
            setDisableRightButton(true);
            setDisableLeftButton(false);
            return;
        } else {
            setDisableLeftButton(false);
            setImage(image + 1);
        }
    }

    //Volta uma imagem na lista de imagem.
    function previousImage() {
        if (image - 1 <= 0) {
            setImage(0);
            setDisableLeftButton(true);
            setDisableRightButton(false);
        } else {
            setDisableRightButton(false);
            setImage(image - 1);
        }
    }

    //Mostra modal ao clicar na imagem.
    function showImageModal() {
        setShowModal(true);
        document.body.style.overflowY = 'hidden';
    }

    return <>
        <ImageModal src={props.images[image]} projectName={props.projectName} showModal={showModal} setShowModal={setShowModal} />
        {/*Container da imagem e dos botões */}
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img src={props.images[image]} className='images' onClick={showImageModal} />
            <div style={{ display: 'flex', width: '100%', padding: 5, alignItems: 'center', justifyContent: 'center', position: 'relative', bottom: 55, background: '#ffffff08', }}>
                {/*Botões de selecionar a imagem.*/}
                <button className='button-image-select' onClick={previousImage} disabled={disableLeftButton}>Imagem Anterior<FaCircleLeft size={20} color='#fdfdfd' /></button>
                <button className='button-image-select' onClick={nextImage} disabled={disableRightButton}>Próxima Imagem<FaCircleRight size={20} color='#fdfdfd' /></button>
            </div >
        </div>
    </>
}

export default ProjectImage;