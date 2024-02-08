import "./style.scss"
import { useState } from "react"
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

function ContactsForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
        notes: ""
    })

    const templateParams = {
        from_name: form.name,
        email: form.email,
        number: form.number,
        message: form.notes
    };

    function MemoryFn(e) {
        let key = e.target.name
        let val = e.target.value
        setForm({ ...form, [key]: val })
    }

    function sendEMailJS_Fn(e) {
        e.preventDefault()
        emailjs.send('service_jb4tnyl', 'template_ggt809h', templateParams, 'f3KD_sdo4D3hisrBF')


            .then((response) => { toast.success('SUCCESS!', { theme: "dark" }); },
            (err) => { toast.error('FAILED...', { theme: "dark" }); });
    }
    return (
        <div className="contancts-f-wrapper">
            <form onSubmit={sendEMailJS_Fn}>
                <div className="contacts-f-content">
                    <h1>Остались вопросы?</h1>
                    <h3>Оставь заявку и мы ответим</h3>
                    <input
                        id="full-name-input" type="text"
                        placeholder="Имя"
                        onChange={MemoryFn} required
                    />
                    <input
                        id="number-input" type="text"
                        placeholder="Телефон"
                        onChange={MemoryFn} name='number' required
                    />
                    <input
                        id="email-input" type="email"
                        placeholder="Почта"
                        onChange={MemoryFn} name='email' required />
                    <textarea
                        id="description-area"
                        cols="10"
                        rows="3"
                        placeholder="Текст сообщения"
                        name='notes'
                        onChange={MemoryFn}
                        required
                    ></textarea>

                    <button className="blue-btn">Оставить заявку</button>
                </div>
            </form>
        </div>
    );
}

export default ContactsForm;