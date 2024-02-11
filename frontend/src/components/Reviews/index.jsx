import "./style.scss"
import Img_1 from "../../assets/images/photo1.png"
import Img_2 from "../../assets/images/photo2.png"

import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


import 'swiper/scss';
import 'swiper/scss/pagination';

function Reviews() {
    const { t } = useTranslation();

    return (
        <div className="reviews-wrapper">
            <div className="top">
                <span>{t("names.reviews")}</span>
                <span>{t("seeAll")}</span>
            </div>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    230: {
                        slidesPerView: 1.3,
                        spaceBetween: 11,
                    },
                    430: {
                        slidesPerView: 1.5,
                        spaceBetween: 55,
                    },
                    768: {
                        slidesPerView: 2,
                    }
                }}
                speed={300}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="container">
                        <img src={Img_1} alt="Reviews-images-1" />
                        <div>
                            <h3>{t("reviews.name")}</h3>
                            <p>{t("reviews.value")}</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <img src={Img_2} alt="Reviews-images-1" />
                        <div>
                            <h3>{t("reviews.name")}</h3>
                            <p>{t("reviews.value")}</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <img src={Img_1} alt="Reviews-images-1" />
                        <div>
                            <h3>{t("reviews.name")}</h3>
                            <p>{t("reviews.value")}</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <img src={Img_2} alt="Reviews-images-1" />
                        <div>
                            <h3>{t("reviews.name")}</h3>
                            <p>{t("reviews.value")}</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <img src={Img_1} alt="Reviews-images-1" />
                        <div>
                            <h3>{t("reviews.name")}</h3>
                            <p>{t("reviews.value")}</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <img src={Img_2} alt="Reviews-images-1" />
                        <div>
                            <h3>{t("reviews.name")}</h3>
                            <p>{t("reviews.value")}</p>
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

export default Reviews;