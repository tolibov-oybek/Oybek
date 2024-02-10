import valuesData from '../../../db/excursion.json'
import ValueItem from "./ValueItem.jsx"
import "./style.scss";
function Values() {
    return (
        <div className="values-content">
            {
                valuesData && valuesData.map((item, index) => {
                    return (
                        <ValueItem
                            key={index}
                            title={item.title}
                            about={item.about}
                            time={item.time}
                            price={item.price}
                            childrenPrice={item.childrenPrice}
                            subtitle={item.subtitle}
                        />
                    )
                })
            }
        </div>
    );
}

export default Values;