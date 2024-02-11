import Logo from "../../assets/icons/logo.png"
import { Link } from 'react-router-dom';
import { context } from "../../store"
import { useContext } from "react"
import { useTranslation } from "react-i18next";
function Nav(props) {
    const { store, setStore } = useContext(context);
    const { t, i18n: { changeLanguage, language } } = useTranslation();
    const handleChangeLanguage = () => {
        const newLanguage = language === "ru" ? "en" : "ru";
        setStore({ type: "CHANGE_LANG", currentLanguage: newLanguage })
        changeLanguage(newLanguage);
    }
    return (
        <nav className="nav-wrapper">
            <div className="right">
                <span className="left">
                    <Link to={"/"}>
                        <img src={Logo} alt="Logo" />
                    </Link>
                </span>


                <Link to="/">
                    {t("navbar.home")}
                </Link>
                <Link to="/excursions">
                {t("navbar.excursions")}
                </Link>
                <Link to="/">
                {t("navbar.personalArea")}
                </Link>
                <span onClick={handleChangeLanguage}>
                    {language === "en" ? "Eng" : "Рус"}
                </span>
            </div>
        </nav>
    );
}

export default Nav;