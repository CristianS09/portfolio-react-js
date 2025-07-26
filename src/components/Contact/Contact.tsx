import { useState } from "react";
import Nav from "../Nav/Nav";
import './Contact.css'

//Página de Contato
function Contact() {

    //Recebe o corpo do email
    const [body, setBody] = useState('');

    //Recebe o assunto do email
    const [subject, setSubject] = useState('');

    //Ativa o butão se todos os campos forem preenchido
    const activeButton: boolean = subject != '' && body != '';

    //Recebe os dados do corpo do email
    function emailBody(input: React.FormEvent<HTMLInputElement>) {
        setBody(input.currentTarget.value);
    }

    //Recebe os dados do assunto do email
    function emailSubject(input: React.FormEvent<HTMLInputElement>) {
        setSubject(input.currentTarget.value);
    }


    return (
        <body>
            <Nav />
            <div className="container">
                <h1>Contato</h1>
                <hr />
                <div className="form-container">
                    <div className="email-info">
                        <img src="/images/logo/email.svg" alt="Imagem email" />
                        <p>cristiansmacena09@gmail.com</p>
                    </div>
                    <input placeholder="Assunto do Email" onChange={(input) => emailSubject(input)} />
                    <input placeholder="Conteúdo do Email" onChange={(input) => emailBody(input)} />
                    {/* Protocolo Mailto para envio de email */}
                    {activeButton ? <a href={`mailto:cristiansmacena09@gmail.com?subject=${subject}&body=${body}`} className="email-button">Enviar e-mail</a> : <p>Preencha todos os campos</p>}
                </div>
            </div>
        </body>
    );
}

export default Contact;