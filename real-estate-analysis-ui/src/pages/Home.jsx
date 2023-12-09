import '../stylesheets/Home.css'
import ImageCarousel from '../components/ImageCarousel'

export default function Resources() {
    return (
      <div className="container pt-4">
        <ImageCarousel />
        <div className='description-background text-center border'>
          <h1>Real Estate Analyzer</h1>
          <h4><i>Learn where to buy a home or start your business</i></h4>
          <br />
          <p className='description-text'>
          This tool helps users easily explore the real estate market in different cities. It provides detailed information on various aspects to aid in making informed decisions about purchasing property or starting a business.
          </p>
        </div>
        <div className='text-left'>
            <p>
            <b>Where to Buy</b> Users can see and compare rental and property prices both in downtown and in countryside. The tool also offers additional data like traffic conditions to help users make better decisions.
            </p>
            <p>
            <b>Where to Start a Business</b> Users can use a map to check the price-to-income ratio in different countries and select a country to get more details about its cities. The safety index feature helps users feel more confident about choosing a location to start their business.
            </p>
            <p>
            <b>Year-to-Year Overview</b> Users can find universal tools that assist exploring the parameters in the real estate market including the affordability, rental prices and other indexes that are strongly correlated to living qualities such as pollution, health care, safety and transit to have a whole picture of the location in year to year comparison.
            </p>
        </div>
        <div className='bottom-space'></div>
      </div>
    );
  }