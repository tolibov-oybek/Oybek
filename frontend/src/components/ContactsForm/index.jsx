import "./style.scss"
import { useState } from "react"
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";
function ContactsForm() {
    const { t } = useTranslation();

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
                    <h1>{t("contactsForm.title")}</h1>
                    <h3>{t("contactsForm.subtitle")}</h3>
                    <input
                        id="full-name-input" type="text"
                        placeholder={t('contactsForm.name')}
                        onChange={MemoryFn} required
                    />
                    <input
                        id="number-input" type="text"
                        placeholder={t('contactsForm.number')}
                        onChange={MemoryFn} name='number' required
                    />
                    <input
                        id="email-input" type="email"
                        placeholder={t('contactsForm.email')}
                        onChange={MemoryFn} name='email' required />
                    <textarea
                        id="description-area"
                        cols="10"
                        rows="3"
                        placeholder={t('contactsForm.message')}
                        name='notes'
                        onChange={MemoryFn}
                        required
                    ></textarea>

                    <button className="blue-btn">{t("button.submit")}</button>
                </div>
            </form>
        </div>
    );
}

export default ContactsForm;