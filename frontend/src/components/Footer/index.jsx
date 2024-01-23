import "./style.scss"
import { Link } from "react-router-dom"
import FacebookColor from "../../assets/icons/facebookColor.png"
import WKColor from "../../assets/icons/vkColor.png"
import InstagramColor from "../../assets/icons/instColor.png"
import Logo from "../../assets/icons/logoColor.png"
import Mail from "../../assets/icons/mail.png"
import Telegram from "../../assets/icons/tg.png"
import Whatsapp from "../../assets/icons/wh.png"


function Footer() {
    return (
        <div className="footer-wrapper">
            <Link to={"/"}><img src={Logo} alt="Logo-color" /></Link>
            <div className="links">
                <Link to="/">Главная</Link>
                <Link to="/excursions">Экскурсии</Link>
                <Link to="/">Личный кабинет</Link>
            </div>
            <div className="contants">
                <img src={Whatsapp} alt="whatsapp-icon" />+7 964 944 18 74 <br />
                <img src={Telegram} alt="telegram-icon" />+7 918 919 98 28 <br />
                <img src={Telegram} alt="telegram-icon" />Телеграм-бот PeroTravel <br />
            </div>
            <div className="icons">
                <div className="mail">
                    <img src={Mail} alt="mail-icon" /> <span>office@perotravel.ru</span>
                </div>
                <Link to={"https://vk.com/ok_gamer7jan"}><img src={WKColor} alt="Wk" /></Link>
                <Link to={"https://www.instagram.com/ok_gamer7jan"}><img src={InstagramColor} alt="Instagram" /></Link>
                <Link to={"https://www.facebook.com/profile.php?id=100052162655374&mibextid=2JQ9oc"}><img src={FacebookColor} alt="Facebook" /></Link>
            </div>
        </div>
    );
}

export default Footer;