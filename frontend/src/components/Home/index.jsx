import "./style.scss"
import { Link } from "react-router-dom"
import Facebook from "../../assets/icons/fk.png"
import WK from "../../assets/icons/wk.png"
import Instagram from "../../assets/icons/inst.png"
import Rectangle2 from "../../assets/images/Rectangle2.png"
import Rectangle3 from "../../assets/images/Rectangle3.png"
import Play from "../../assets/images/play.png"
import PopularExcursions from "../PopularExcursions"
import About from "../About"
import Galery from "../Galery"
import Reviews from "../Reviews"
import ContactsFrom from "../ContactsForm"
import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation();
    return (
        <div className="home-wrapper">
            <div className="home-content">

                <div className="left">
                    <h1>{t("homePage.travel")}</h1>
                    <h4>{t("homePage.with")}</h4>
                    <h1 className="pero"><span style={{ marginRight: "15px" }}>PERO</span><span>TRAVEL</span></h1>
                    <Link to="/excursions"><button className="blue-btn">{t("button.forExcursions")}</button></Link>
                </div>

                <div className="icons">
                    <Link to={"https://vk.com/ok_gamer7jan"}><img src={WK} alt="Wk" /></Link>
                    <Link to={"https://www.instagram.com/ok_gamer7jan"}><img src={Instagram} alt="Instagram" /></Link>
                    <Link to={"https://www.facebook.com/profile.php?id=100052162655374&mibextid=2JQ9oc"}><img src={Facebook} alt="Facebook" /></Link>
                </div>

            </div>
            <div className="images">
                <img src={Rectangle2} alt="Rectangle2" />
                <img className="play-img" src={Play} alt="Play" />
                <img src={Rectangle3} alt="Rectangle3" />
            </div>


            <PopularExcursions />
            <br /><br />
            <About />
            <br /><br />
            <Galery />
            <br /><br />
            <Reviews />
            <br /><br />
            <ContactsFrom />
            <br /><br />

        </div>
    );
}

export default Home;