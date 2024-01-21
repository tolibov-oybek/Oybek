import valuesData from '../../db/values.json'
import Buss from "../../assets/icons/1.png"
import Car from "../../assets/icons/2.png"
import Ship from "../../assets/icons/3.png"
import Zavod from "../../assets/icons/4.png"
import ValueItem from "./ValueItem.jsx"

function Values(props) {
    const images = [Buss, Car, Ship, Zavod]

    return (
        <div className="values-wrapper">
            {
                valuesData && valuesData.map((item, index) => {
                    return (
                        <ValueItem 
                            key={index}
                            image={images[index]}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    )
                })
            }
        </div>
    );
}

export default Values;