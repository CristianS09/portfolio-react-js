import './Certification.css';

function Certification() {
    return (
        <body>
            <div className="container">
                <h1>Certificados</h1>
                <hr />
                <img src={'images/certificado-java.jpeg'} className='certification-images' />
                <img src={'images/certificado-sql.jpg'} className='certification-images' />
                <hr />
            </div>
        </body>
    );
}

export default Certification;