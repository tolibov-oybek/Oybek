import Time from "../../assets/icons/time.png";
import Money from "../../assets/icons/money.png";
function ValueItem(props) {
    return (
        <div className="value-item">
            <div className='value-info' style={{
                backgroundImage: `url(${props.image})`,
                width:"360px",
                height:"497px",
                borderRadius:"10px"
            }}>
                <h5>{props.title}</h5>
                <h3>{props.about}</h3>
                <h6><img src={Time} alt="watch-icon" />{props.time}</h6>
                <h6><img src={Money} alt="money-icon" />{props.price}</h6>
                <p>{props.subtitle}</p>
                <button className="blue-btn">Подробнее</button>
            </div>
        </div>
    );
}

export default ValueItem;