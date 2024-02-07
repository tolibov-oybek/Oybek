import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.png"

function Nav() {
    return (
        <nav className="nav-wrapper">
            <div className="left">
                <h1>
                    <Link to={"/"}>
                        <img src={Logo} alt="Logo" />
                    </Link>
                </h1>
            </div>
            <div className="right">
                <Link to="/">Главная</Link>
                <Link to="/excursions">Экскурсии</Link>
                <Link to="/">Личный кабинет</Link>
            </div>
        </nav>
    );
}

export default Nav;