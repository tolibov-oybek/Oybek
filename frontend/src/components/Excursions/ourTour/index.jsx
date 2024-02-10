import valuesData from '../../../db/excursion.json'
import Values from "./Values.jsx"
import "./style.scss";
function ourTour() {
    return (
        <div className="values-wrapper">
               <div className="top">
                <span>Наши туры</span>
            </div>
             <Values/>
        </div>
    );
}

export default ourTour;