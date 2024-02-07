import "./style.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarouselComponent(props) {
    return (
        <section className="carousel-section">
            <div className="carousel-c-children">
                { props.children }
            </div>
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false}>

            </Carousel>
        </section>
    );
}

export default CarouselComponent;