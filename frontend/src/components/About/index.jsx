import "./style.scss"
import Values from "./Values.jsx"
import AboutImg from "../../assets/images/Rectangle4.png"
import { useTranslation } from "react-i18next";
function About() {
    const { t } = useTranslation();
    return (
        <div className="about-wrapper">
            <div className="about-content">
                <img src={AboutImg} alt="About"/>
                <div className="about-text">
                    <h1>{t("names.about")}</h1>
                    <br /> <br />
                    <p>{t("about.value1")}</p>
                    <br />
                    <p>{t("about.value2")}</p>
                    <br />
                </div>
            </div>


            <div className="values-content">
                <h1>{t("names.tExcursions")}</h1>
                <Values />

                <p className="last">{t("tExcursions.text")}</p>
                <button>{t("button.forExcursions")}</button>
            </div>


        </div>
    );
}

export default About;