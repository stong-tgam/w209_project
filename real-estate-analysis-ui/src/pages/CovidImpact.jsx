import '../stylesheets/CovidImpact.css'
import CovidImpactTableau from '../tableau/CovidImpactTableau'
import CovidImpactTableauB from '../tableau/CovidImpactTableauB'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';

export default function Resources() {
    const [image2018Src, setImage2018Src] = useState('');
    const [image2020Src, setImage2020Src] = useState('');
    const [image2023Src, setImage2023Src] = useState('');
    const local_url = 'http://127.0.0.1:3000'

    useEffect(() => {
      const get2018Image = async () => {
          try {
          const response = await fetch(`${local_url}/get_image/2018.png`);
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setImage2018Src(url);
          } catch (error) {
          console.error('Error fetching image:', error);
          }
      };
      const get2020Image = async () => {
          try {
          const response = await fetch(`${local_url}/get_image/2020.png`);
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setImage2020Src(url);
          } catch (error) {
          console.error('Error fetching image:', error);
          }
      };
      const get2023Image = async () => {
          try {
          const response = await fetch(`${local_url}/get_image/2023.png`);
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setImage2023Src(url);
          } catch (error) {
          console.error('Error fetching image:', error);
          }
      };
  
      get2018Image();
      get2020Image();
      get2023Image();
  
      }, []);
    return (
      <Container>
        <br/>
        <h2>Affordability Per Year By City</h2>
        <p>Provide detailed insight with loan affordability, price to income, safety indexes among others to compare impact among years for cities in question. Impacts could provide insight to years that impacted the economy such as 2020 Covid Pandemic.</p>
        <Container>
          <Row>
            <Col>
              <img src={image2018Src} alt="2018" />
            </Col>
            <Col>
              <img src={image2020Src} alt="2020" />
            </Col>
            <Col>
              <img src={image2023Src} alt="2023" />
            </Col>
          </Row>
        </Container>
        <p>Images show before, during and after Covid Pandemic insights.</p>
        <div className='chart-descriptions'><b>Insight:</b></div>
        <p>
          In the year 2023 we can see that the top major cities provided by the Loan Affordability index are Los Angeles, Toky and Berlin. However, Price to Income and Price to Rent say otherwise, while Los Angeles maintaining its  top ranking. Interestingly, before Covid we had similar results. By the year 2020 when Covid Pandemic hit, Tokyo and Berlin were both most impacted while Los Angeles maintained its position.  
        </p>
        <Row>
          <Col className='chart-descriptions-variables'>
            <div className="section">
              <div className="variables-text">
                <div className='chart-descriptions'><b>Loan Affordability:</b> is an inverse of mortgage as percentage of income. The used formula is : (100 / mortgage as percentage of income) (higher is better).</div>
                <div className='chart-descriptions'><b>Price To Income:</b> is a fundamental measure for apartment purchase affordability, where a lower ratio indicates better affordability. It is typically calculated as the ratio of median apartment prices to median familial disposable income, expressed as years of income</div>
                <div className='chart-descriptions'><b>Price To Rent:</b> is the average cost of ownership divided by the received rent income (if buying to let) or the estimated rent that would be paid if renting (if buying to reside).</div>
              </div>
            </div>
        </Col>
        <Col><CovidImpactTableau /></Col>
        </Row>
        <Row>
          <Col className='chart-descriptions-variables'>
            <div className="section">
              <div className="variables-text">
                <div className='chart-descriptions'><b>Pollution By City:</b> considers factors such as air and water pollution, garbage disposal, cleanliness, noise and light pollution, green spaces, and comfort in relation to pollution.</div>
                <div className='chart-descriptions'><b>Health Care:</b> is an estimation that evaluates the overall quality of the healthcare system, including factors such as healthcare professionals, equipment, staff, doctors, and costs. It provides an assessment of the healthcare infrastructure, services, and resources available in a specific location.</div>
                <div className='chart-descriptions'><b>Safety:</b> General perception. Based on user-contributed data and perceptions, which may differ from official government statistics. The index serves as a comparative tool to assess the relative safety of different cities or countries, helping individuals make informed decisions and understand the crime landscape in specific locations.</div>
                <div className='chart-descriptions'><b>Transit:</b> is the experiences and perceptions regarding traffic conditions in their respective cities.  These indices rely on subjective opinions and may not reflect official or comprehensive traffic statistics.</div>
              </div>
            </div>
          </Col>
          <Col><CovidImpactTableauB /></Col>
        </Row>
        <div className='bottom-space'></div>
      </Container>
    );
  }
