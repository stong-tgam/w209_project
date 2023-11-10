import Carousel from 'react-bootstrap/Carousel';
import '../stylesheets/ImageCarousel.css'

function ImageCarousel() {
  return (
    <div className='carousel-content'>
        <Carousel>
        <Carousel.Item>
            <img className='carousel-image' src={process.env.PUBLIC_URL + '/cash.png'} alt="Cash"/>
            <Carousel.Caption>
            <h3>Where to buy as an investor</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className='carousel-image' src={process.env.PUBLIC_URL + '/covid.jpg'} alt="Covid"/>
            <Carousel.Caption>
            <h3>Covid Impact</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className='carousel-image' src={process.env.PUBLIC_URL + '/open.jpg'} alt="Open"/>
            <Carousel.Caption>
            <h3>Where to start business as a business owner</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default ImageCarousel;