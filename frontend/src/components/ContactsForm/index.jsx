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

    function fireSetForm(e) {
        let key = e.target.name
        let val = e.target.value
        setForm({ ...form, [key]: val })
    }

    function submit(e) {
        e.preventDefault()

        emailjs.send('service_jb4tnyl', 'template_ggt809h', templateParams, 'f3KD_sdo4D3hisrBF')
            .then((response) => {
                toast.success('SUCCESS!', {
                    theme: "dark"
                });
            }, (err) => {
                toast.error('FAILED...', {
                    theme: "dark"
                });
            });
    }
    return (
        <div className="contancts-f-wrapper">
            <form onSubmit={submit}>

                <div className="contacts-f-content">
                    <h1>Остались вопросы?</h1>
                    <h3>Оставь заявку и мы ответим</h3>
                    <input
                        id="full-name-input" type="text"
                        placeholder="Имя"
                        onChange={fireSetForm} required
                    />
                    <input
                        id="number-input" type="text"
                        placeholder="Телефон"
                        onChange={fireSetForm} name='number' required
                    />
                    <input
                        id="email-input" type="email"
                        placeholder="Почта"
                        onChange={fireSetForm} name='email' required />
                    <button className="blue-btn">Оставить заявку</button>
                </div>
            </form>
        </div>
    );
}

export default ContactsForm;