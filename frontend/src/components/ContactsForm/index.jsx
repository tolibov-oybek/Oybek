import "./style.scss"

function ContactsForm() {
    return (
        <div className="contancts-f-wrapper">
            <div className="contacts-f-content">
                <h1>Остались вопросы?</h1>
                <h3>Оставь заявку и мы ответим</h3>
                <input type="text"  placeholder="Имя"/>
                <input type="text"  placeholder="Телефон"/>
                <input type="email" placeholder="Почта"/>
                <button className="blue-btn">Оставить заявку</button>
            </div>
        </div>
    );
}

export default ContactsForm;