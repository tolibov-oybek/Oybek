import "./style.scss"
import Marquee from "react-fast-marquee";
import Values from "./Values.jsx"
function PopularExcursions(props) {
    return (
        <div className="p-excursions-wrapper">
            <div className="top">
                <span>Популярные экскурсии</span>
                <span>Смотреть все</span>
            </div>
            <Values/>

        </div>
    );
}

export default PopularExcursions;