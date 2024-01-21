import valuesData from '../../db/p-excursions-values.json'
import Rectangle13 from "../../assets/images/Rectangle13.png"
import Rectangle14 from "../../assets/images/Rectangle14.png"
import Rectangle15 from "../../assets/images/Rectangle15.png"
import Rectangle16 from "../../assets/images/Rectangle16.png"
import ValueItem from "./ValueItem.jsx"

function Values(props) {
    const images = [Rectangle13,Rectangle14,Rectangle15,Rectangle16]

    return (
        <div className="values-wrapper">
            {
                valuesData && valuesData.map((item, index) => {
                    return (
                        <ValueItem 
                            key={index}
                            image={images[index]}
                            title={item.title}
                            about={item.about}
                            time={item.time}
                            price={item.price}
                            subtitle={item.subtitle}
                        />
                    )
                })
            }
        </div>
    );
}

export default Values;