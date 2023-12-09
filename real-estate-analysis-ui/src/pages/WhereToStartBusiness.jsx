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
      <h2>Where to Invest</h2>
      <div className='chart-descriptions'><b>Insight:</b></div>
      <p>Affordability(House Price to Household Anual Income) Gradient: The map's color coding suggests varying levels of affordability across regions, with red shades indicating less affordability and with green shade indicating higher affordability.</p> 
      <p> ex. China appears less affordable compared to many other regions.</p>
      
      <p>Living Cost vs. Purchasing Power: In Canada, cities like Ottawa and Toronto have a higher cost of living relative to their purchasing power, while Edmonton seems to have a balance between the two.</p>
      <p>ex. Edmonton has the lowest ratio of House Price to Household Anual Income in Canada, implying lower cost barriers for living and doing business.</p>

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
        <br /><br /><br />
        <div className='chart-descriptions'><b>Insight:</b></div>
        <p><b>Safety Index Gradient:</b> The map's color coding suggests varying levels of safety index across regions, with red shades indicating less safety and with green shade indicating higher safety.</p>
        <p><b>Safety Index over time:</b> To visualize the safety trend of a city changes over the years. </p>
        <p> ex. The chart suggests that Edmonton's safety index has been decreasing over time, which might raise concerns about public safety and could potentially impact investment decisions in the area.</p>
      <Row>
        
        <Col><WhereToStartBusinessTableauB /></Col>
      </Row>
      <div className='bottom-space'></div>
    </Container>
  );
}

 
        