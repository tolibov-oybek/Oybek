import Rectangle13 from "../../assets/images/Rectangle13.png"
import Rectangle14 from "../../assets/images/Rectangle14.png"
import Rectangle15 from "../../assets/images/Rectangle15.png"
import Rectangle16 from "../../assets/images/Rectangle16.png"
import Time from "../../assets/icons/time.png";
import Money from "../../assets/icons/money.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./style.scss"
import 'swiper/scss';
import 'swiper/scss/pagination';

import { useTranslation } from "react-i18next"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

function Values(props) {
    const { t } = useTranslation();
    return (
        <div className="values-wrapper">
            <Swiper
                slidesPerView={5}
                spaceBetween={55}

                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    230: {
                        slidesPerView: 1,
                        spaceBetween: 11,
                    },
                    430: {
                        slidesPerView: 2,
                        spaceBetween: 55,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 44,
                    },
                    1024: {
                        slidesPerView: 4.8,
                        spaceBetween: 44,
                    },
                }}
                speed={300}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${Rectangle13})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <h5>{t("pExcursions.first.title")}</h5>
                            <h3>{t("pExcursions.first.place")}</h3>
                            <h6><img src={Time} alt="watch-icon" />{t("pExcursions.first.time")}</h6>
                            <h6><img src={Money} alt="money-icon" />618 ₽</h6>
                            <p>{t("pExcursions.first.subtitle")}</p>
                            <button className="blue-btn">{t("button.moreDetails")}</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${Rectangle14})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <h5>{t("pExcursions.second.title")}</h5>
                            <h3>{t("pExcursions.second.place")}</h3>
                            <h6><img src={Time} alt="watch-icon" />{t("pExcursions.second.time")}</h6>
                            <h6><img src={Money} alt="money-icon" />1809 ₽</h6>
                            <p>{t("pExcursions.second.subtitle")}</p>
                            <button className="blue-btn">{t("button.moreDetails")}</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${Rectangle15})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <h5>{t("pExcursions.third.title")}</h5>
                            <h3>{t("pExcursions.third.place")}</h3>
                            <h6><img src={Time} alt="watch-icon" />{t("pExcursions.third.time")}</h6>
                            <h6><img src={Money} alt="money-icon" />3515 ₽</h6>
                            <p>{t("pExcursions.third.subtitle")}</p>
                            <button className="blue-btn">{t("button.moreDetails")}</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${Rectangle16})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <h5>{t("pExcursions.fourth.title")}</h5>
                            <h3>{t("pExcursions.fourth.place")}</h3>
                            <h6><img src={Time} alt="watch-icon" />{t("pExcursions.fourth.time")}</h6>
                            <h6><img src={Money} alt="money-icon" />618 ₽</h6>
                            <p>{t("pExcursions.fourth.subtitle")}</p>
                            <button className="blue-btn">{t("button.moreDetails")}</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${Rectangle13})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <h5>{t("pExcursions.first.title")}</h5>
                            <h3>{t("pExcursions.first.place")}</h3>
                            <h6><img src={Time} alt="watch-icon" />{t("pExcursions.first.time")}</h6>
                            <h6><img src={Money} alt="money-icon" />618 ₽</h6>
                            <p>{t("pExcursions.first.subtitle")}</p>
                            <button className="blue-btn">{t("button.moreDetails")}</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${Rectangle14})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <h5>{t("pExcursions.second.title")}</h5>
                            <h3>{t("pExcursions.second.place")}</h3>
                            <h6><img src={Time} alt="watch-icon" />{t("pExcursions.second.time")}</h6>
                            <h6><img src={Money} alt="money-icon" />1809 ₽</h6>
                            <p>{t("pExcursions.second.subtitle")}</p>
                            <button className="blue-btn">{t("button.moreDetails")}</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${Rectangle15})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <h5>{t("pExcursions.third.title")}</h5>
                            <h3>{t("pExcursions.third.place")}</h3>
                            <h6><img src={Time} alt="watch-icon" />{t("pExcursions.third.time")}</h6>
                            <h6><img src={Money} alt="money-icon" />3515 ₽</h6>
                            <p>{t("pExcursions.third.subtitle")}</p>
                            <button className="blue-btn">{t("button.moreDetails")}</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${Rectangle16})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <h5>{t("pExcursions.fourth.title")}</h5>
                            <h3>{t("pExcursions.fourth.place")}</h3>
                            <h6><img src={Time} alt="watch-icon" />{t("pExcursions.fourth.time")}</h6>
                            <h6><img src={Money} alt="money-icon" />618 ₽</h6>
                            <p>{t("pExcursions.fourth.subtitle")}</p>
                            <button className="blue-btn">{t("button.moreDetails")}</button>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                </div>
            </Swiper>
        </div>
    );
}

export default Values;