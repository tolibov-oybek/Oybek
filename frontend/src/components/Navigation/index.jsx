import "./style.scss"
import { Outlet, Link } from "react-router-dom"
import Logo from "../../assets/icons/logo.png"
import Footer from "../Footer"
function Navigation() {
    return (
        <div>
            <nav id="navigation-wrapper">
                <div className="left">
                    <h1>
                        <Link to={"/"}>
                        <img src={Logo} alt="Logo" />
                        </Link>
                    </h1>
                </div>
                <div className="middle">
                    <Link to="/">Главная</Link>
                    <Link to="/excursions">Экскурсии</Link>
                    <Link to="/">Личный кабинет</Link>
                </div>
            </nav>

            <div id="outlet">
                <Outlet />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Navigation;