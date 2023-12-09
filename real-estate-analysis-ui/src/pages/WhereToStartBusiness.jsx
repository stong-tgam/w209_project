import '../stylesheets/WhereToStartBusiness.css'
import WhereToStartBusinessTableau from '../tableau/WhereToStartBusinessTableau'
import WhereToStartBusinessTableauB from '../tableau/WhereToStartBusinessTableauB'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function Resources() {
  return (
    <Container>
      <br/>
      <h2>Where to Start a Business</h2>
      <div className='chart-descriptions'><b>Insight:</b></div>
      <div className='chart-descriptions'>Affordability(House Price to Household Anual Income) Gradient: The map's color coding suggests varying levels of affordability across regions, with red shades indicating less affordability and with green shade indicating higher affordability.</div> 
      <div className='chart-descriptions'><b>For example:</b> China appears less affordable compared to many other regions.</div>
      <div className='chart-descriptions'>Living Cost vs. Purchasing Power: In Canada, cities like Ottawa and Toronto have a higher cost of living relative to their purchasing power, while Edmonton seems to have a balance between the two.</div>
      <div className='chart-descriptions'><b>For example:</b> Edmonton has the lowest ratio of House Price to Household Anual Income in Canada, implying lower cost barriers for living and doing business.</div>

      <Row>
        <Col className='chart-descriptions-variables'>
          <div className="section">
            <div className="variables-text">
              <div className='chart-descriptions'><b>Comfort Zone:</b> Low Cost, High Purchasing Power.
                   Cities in this quadrant are where residents can afford a comfortable lifestyle with less financial pressure.</div>
              <div className='chart-descriptions'><b>Tight Budget Zone:</b>  High Cost, Low Purchasing Power.
                   In these cities, residents may have to stretch their budgets due to high living costs outpacing their earnings.</div>
              <div className='chart-descriptions'><b>Opportunity Zone:</b> Low Cost, Low Purchasing Power.
                   These areas could be ripe for business opportunities, offering low living costs despite lower local wages.</div>
              <div className='chart-descriptions'><b>High Roller Zone:</b> High Cost, High Purchasing Power.
                   Locations in this quadrant cater to those with significant income, capable of meeting the high cost of living.</div>
            </div>
          </div>
      </Col>
      <Col> <WhereToStartBusinessTableau /></Col>
      </Row>
      <Row>
      <br /><br /><br />
        <div className='chart-descriptions'><b>Insight:</b></div>
        <div className='chart-descriptions'><b>Safety Index Gradient:</b> The map uses color coding to indicate safety levels: red for less safe areas and green for safer ones.</div>
        <div className='chart-descriptions'><b>Safety Index over time:</b> To visualize the safety trend of a city changes over the years. </div>
        <div className='chart-descriptions'><b>For example:</b>The chart shows a declining safety index in Edmonton, potentially affecting public safety and investment decisions.</div>
      <Col className='chart-descriptions-variables'>
          <div className="section">
            <div className="variables-text">
            <div className='chart-descriptions'><b>Safety:</b> General perception. Based on user-contributed data and perceptions, which may differ from official government statistics. The index serves as a comparative tool to assess the relative safety of different cities or countries, helping individuals make informed decisions and understand the crime landscape in specific locations.</div>
            </div>
          </div>
      </Col>
        <Col><WhereToStartBusinessTableauB /></Col>
      </Row>
      <div className='bottom-space'></div>
    </Container>
  );
}

 
 