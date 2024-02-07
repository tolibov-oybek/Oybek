import "./style.scss"
import Values from "./Values.jsx"
import AboutImg from "../../assets/images/Rectangle4.png"

function About() {
    return (
        <div className="about-wrapper">
            <div className="about-content">
                <img src={AboutImg} alt="About"/>
                <div className="about-text">
                    <h1>О нас</h1>
                    <br /> <br />
                    <p>PeroTravel - Первый онлайн-сервис по бронированию экскурсий без очередей и операторов.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <br />
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    <br />
                </div>
            </div>


            <div className="values-content">
                <h1>Виды экскурсий</h1>
                <Values />

                <p className="last">Выбирайте на нашем сайте экскурсию, которая подходит именно вам и записывайтесь онлайн без очередей, просто и быстро!</p>
                <button>К экскурсиям→</button>
            </div>


        </div>
    );
}

export default About;