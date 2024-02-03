import Marquee from "react-fast-marquee";
import "./style.scss"
import Img_1 from "../../assets/images/photo1.png"
import Img_2 from "../../assets/images/photo2.png"
function Reviews() {
    return (
        <div className="reviews-wrapper">
            <div className="top">
                <span>Отзывы</span>
                <span>Смотреть все</span>
            </div>
            <Marquee>
                <div className="container">
                    <img src={Img_1} alt="Reviews-images-1" />
                    <div>
                        <h3>Иван Иванов, 25 лет</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="container">
                    <img src={Img_2} alt="Reviews-images-1" />
                    <div>
                        <h3>Иван Иванов, 25 лет</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </Marquee>
        </div>
    );
}

export default Reviews;