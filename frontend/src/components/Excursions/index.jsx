import "./style.scss";
import Map from "../../assets/icons/map.png";
import Сalendar from "../../assets/icons/календарь.png";
import People from "../../assets/icons/people.png";
import OurTour from "./ourTour";

function Excursions(e) {

    return (
        <div className="excursions-wrapper">
            <div className="excursion-content">
                <h1>НАШИ ЭКСКУРСИИ</h1>
            </div>
            <div className="bottom">
                <div className="top">
                    <div className="filter-top">
                        <div className="text">
                            <span className="active">АВТОБУСНЫЙ ТУР </span> <span> ДЖИППИНГ </span> <span> ЯХТИНГ </span> <span> КАНЬОНИНГ</span>
                        </div>
                        <div className="value">
                            <div><h4>Абхазия</h4><img src={Map} alt="map-icon" /></div>
                            <div><h4>10 ноября 2021</h4><img src={Сalendar} alt="calendar-icon" /></div>
                            <div><h4>5 человек  </h4><img src={People} alt="people-icon" /></div>
                            <button className="blue-btn">Показать</button>
                        </div>
                    </div>
                </div>

                <div className="mid">
                    <div className="left">
                        <div className="top">
                            <span>Фильтры</span>
                        </div>
                        <div className="price">
                            <span>Стоимость
                                <span className="line"></span>
                            </span>

                            <div className="value" style={{ display: "block", }}>
                                <input type="text" value={1600} />
                                <input type="text" value={4000} />
                                <div class="dual-range">
                                    <input type="range" name="rangeEnd" value="1600" max="10000" />
                                    <input type="range" name="rangeStart" value="1600" max="10000" />
                                </div>
                            </div>
                            <hr style={{ width: "225px", margin: "20px 0" }} />
                        </div>
                        <div className="persons">
                            <span>
                                Количество человек
                                <span className="line"></span>
                            </span>

                            <div className="value" style={{ display: "block", }}>
                                <button>1 чел.</button>
                                <button>2 чел.</button>
                                <button>3 чел.</button>
                                <button>4 чел.</button>
                                <button>5 чел.</button>
                                <button>6 чел.</button>
                                <button>7 чел.</button>
                                <button>8 чел.</button>
                                <button>9 чел.</button>
                                <button>10 чел.</button>
                                <button id="last">Больше 10 чел.</button>
                                <hr style={{ width: "225px", margin: "20px 0" }} />
                            </div>
                            <hr style={{ width: "225px", margin: "20px 0" }} />
                        </div>
                        <div className="place">
                            <span>
                                Место
                                <span className="line"></span>
                            </span>

                            <div className="value" style={{ display: "block", }}>
                                <input type="radio" checked={true} /> <span>Абхазия</span> <br />
                                <input type="radio" /> <span>Красная поляна</span> <br />
                                <input type="radio" /> <span>Сочи</span> <br />
                                <input type="radio" /> <span>Адлер</span> <br />
                                <input type="radio" /> <span>Адлер</span>
                            </div>
                            <hr style={{ width: "225px", margin: "20px 0" }} />
                        </div>
                        <div className="duration">
                            <span>
                                Длительность
                                <span className="line">+</span>
                            </span>

                            <hr style={{ width: "225px", margin: "20px 0" }} />
                        </div>
                        <div className="date">
                            <span>
                            Дата
                                <span className="line">+</span>
                            </span>

                            <hr style={{ width: "225px", margin: "20px 0" }} />
                        </div>
                        <button className="blue-btn">Показать</button>
                        <div className="reset"><h1>×</h1> Сбросить фильтры</div>


                    </div>


                    <OurTour />
                </div>
            </div>
        </div>
    );
}

export default Excursions;