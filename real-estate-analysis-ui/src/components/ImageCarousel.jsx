import Carousel from 'react-bootstrap/Carousel';
import '../stylesheets/ImageCarousel.css'
import React, { useState, useEffect } from 'react';

function ImageCarousel() {
    const [imageCashSrc, setImageCashSrc] = useState('');
    const [imageOpenSrc, setImageOpenSrc] = useState('');
    const [imageCovidSrc, setImageCovidSrc] = useState('');
    const local_url = 'http://127.0.0.1:3000'

    useEffect(() => {
    const getCashImage = async () => {
        try {
        const response = await fetch(`https://apps-fall.ischool.berkeley.edu/RealEstateAnalyzers/get_image/cash.png`);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setImageCashSrc(url);
        } catch (error) {
        console.error('Error fetching image:', error);
        }
    };
    const getOpenImage = async () => {
        try {
        const response = await fetch(`https://apps-fall.ischool.berkeley.edu/RealEstateAnalyzers/get_image/open.jpg`);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setImageOpenSrc(url);
        } catch (error) {
        console.error('Error fetching image:', error);
        }
    };
    const getCovidImage = async () => {
        try {
        const response = await fetch(`https://apps-fall.ischool.berkeley.edu/RealEstateAnalyzers/get_image/covid.jpg`);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setImageCovidSrc(url);
        } catch (error) {
        console.error('Error fetching image:', error);
        }
    };

    getCashImage();
    getOpenImage();
    getCovidImage();

    }, []);
  return (
    <div className='carousel-content'>
        <Carousel>
        <Carousel.Item>
            <img className='carousel-image' src={imageCashSrc} alt="Cash"/>
            <Carousel.Caption>
            <h3>Where to buy as an investor</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className='carousel-image' src={imageOpenSrc} alt="Open"/>
            <Carousel.Caption>
            <h3>Where to start business as a business owner</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className='carousel-image' src={imageCovidSrc} alt="Covid"/>
            <Carousel.Caption>
            <h3>Covid Impact</h3>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default ImageCarousel;