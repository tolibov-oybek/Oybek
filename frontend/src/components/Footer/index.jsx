import "./style.scss"
import { Link } from "react-router-dom"
import FacebookColor from "../../assets/icons/facebookColor.png"
import WKColor from "../../assets/icons/vkColor.png"
import InstagramColor from "../../assets/icons/instColor.png"
import Logo from "../../assets/icons/logoColor.png"
import Mail from "../../assets/icons/mail.png"
function Footer() {
    return (
        <div className="footer-wrapper">
            <Link to={"/"}><img src={Logo} alt="Logo-color" /></Link>
            <div className="links">
                <Link to="/">Главная</Link>
                <Link to="/excursions">Экскурсии</Link>
                <Link to="/">Личный кабинет</Link>
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