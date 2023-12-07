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
            This comprehensive tool is for users to explore the real estate market along multiple parameters of the cities of interest, to assist them in making the choice of buying or starting their business.
          </p>
        </div>
        <div className='text-left'>
            <p>
            <b>WHERE TO BUY</b> Users can visualize the rental and unit prices within the cities. We can also compare the downtown city prices and outside city prices. Users will be able to persuade their decion with extra data features such as traffic conditions.
            </p>
            <p>
            <b>WHERE TO START A BUSINESS</b> Users can explore the affordability by the map and pick the interested country for more details in that country's cities. With the safety index feature, users can be more confident about the decision of the location they want to start their business.
            </p>
            <p>
            <b>YEAY-TO-YEAR OVERVIEW</b> Users can find universal tools that assist exploring the parameters in the real estate market including the affordability, rental prices and other indexes that are strongly correlated to living qualities such as pollution, health care, safety and transit to have a whole picture of the location in year to year comparison.
            </p>
        </div>
        <div className='bottom-space'></div>
      </div>
    );
  }