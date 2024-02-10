import Image from "../../../assets/images/Rectangle21.png"
import Line from "../../../assets/images/Line.png"
import heartICon from "../../../assets/icons/like.png"
import { Link } from "react-router-dom";
import Money from "../../../assets/icons/money.png"
import Time from "../../../assets/icons/time.png"
function ValueItem(props) {
    return (
        <div className="value-item">
            <img id="left" src={Image} alt="image" />
            <div className='value-info'>
                <h5>{props.title}</h5>
                <h2>{props.about}</h2>
                <br />
                <h3><img src={Money} alt="money-icon" />
                    {props.price}

                </h3>
                <h3><img src={Money} alt="money-icon" />
                    {props.childrenPrice}
                </h3>
                <h3 id="last"><img src={Time} alt="watch-icon" />{props.time}</h3>
                <br />
                <span>Взрослый билет</span>
                <span>Детский билет</span>

                <br />
                <img src={Line} alt="line" id="p" />
                <p>{props.subtitle}</p>
                <Link><button className="blue-btn">Подробнее</button></Link>
                <span className="like">
                    <img src={heartICon}
                        alt="like-icon" />
                </span>
            </div>
        </div>
    );
}

export default ValueItem;