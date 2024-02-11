import "./style.scss"
import Values from "./Values.jsx"
import { useTranslation } from "react-i18next";
function PopularExcursions(props) {
    const { t } = useTranslation();
    return (
        <div className="p-excursions-wrapper">
            <div className="top">
                <span>{t("names.pExcursions")}</span>
                <span>{t("seeAll")}</span>
            </div>
            <Values/>

        </div>
    );
}

export default PopularExcursions;