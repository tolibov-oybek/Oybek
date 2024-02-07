import "./style.scss"
import Img_1 from "../../assets/imgs/1.png"
import Img_2 from "../../assets/imgs/2.png"
import Img_3 from "../../assets/imgs/3.png"
import Img_4 from "../../assets/imgs/4.png"
import Img_5 from "../../assets/imgs/5.png"
import Img_6 from "../../assets/imgs/6.png"
import Img_7 from "../../assets/imgs/7.png"
import Img_8 from "../../assets/imgs/8.png"
function Galery() {
    return (

        <div className="galery-wrapper">
            <div className="top">
                <span>Галерея</span>
            </div>
            <div className="galery-content">

                <div className="left">
                    <img src={Img_1} alt="galery-image-1" />
                    <div>
                        <img src={Img_5} alt="galery-image-5" />
                        <div>
                            <img src={Img_6} alt="galery-image-6" />
                            <img src={Img_7} alt="galery-image-7" />
                        </div>
                    </div>
                </div>
                <img src={Img_2} alt="galery-image-2" id="mid" />
                <div className="right">
                    <div>
                        <img src={Img_3} alt="galery-image-3" />
                        <img src={Img_4} alt="galery-image-4" />
                    </div>
                    <img src={Img_8} alt="galery-image-8" />
                </div>
            </div>
        </div>
    );
}

export default Galery;