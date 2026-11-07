import './Loading.css';

export default function Loading(props: { message: string }) {
    return <>
        <div className="loading-container">
            {/*Exibe mensagem de carregamento passada no parâmetro*/}
            <p>{props.message}</p>
            {/*Loading */}
            <div className='loading'>
            </div>
        </div>
    </>
}