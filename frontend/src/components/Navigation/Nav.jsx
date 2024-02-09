import Logo from "../../assets/icons/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { context } from "../../store";
import { useContext } from "react";
function Nav(props) {
    const { store, setStore } = useContext(context);
    const navigate = useNavigate();

    const goToTeamsHash = () => {
        navigate('/about');
        setTimeout(() => {
            const element = document.getElementById('teams');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    };
    return (
        <nav className="nav-wrapper">
            <div className="right">
                <span className="left">
                    <Link to={"/"}>
                        <img src={Logo} alt="Logo" />
                    </Link>
                </span>


                <Link to="/">Главная</Link>
                <Link to="/excursions">Экскурсии</Link>
                <Link to="/">Личный кабинет</Link>
            </div>
        </nav>
    );
}

export default Nav;