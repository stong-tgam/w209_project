import '../stylesheets/WhereToInvest.css'
import WhereToInvestTableau from '../tableau/WhereToInvestTableau'
import WhereToInvestTableauB from '../tableau/WhereToInvestTableauB'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function Resources() {
    return (
      <Container>
        <br/>
        <h2>Where to Invest</h2>
        <div className='chart-descriptions'><b>Insight:</b></div>
        <p>Hong Kong stands out with top-tier rents and property prices, hinting at a volatile market.
            New York and Los Angeles show high rents but more moderate buying costs.
            In contrast, Shanghai, Paris, Berlin, and Toronto present more balanced and lower real estate costs.
        </p>
        <Row>
          <Col className='chart-descriptions-variables'>
            <div className="section">
              <div className="variables-text">
                <div className='chart-descriptions'><b>Affordable Market:</b> Low-cost living and buying, ideal for budget-focused buyers or investors.</div>
                <div className='chart-descriptions'><b>Investor's Market:</b> High property prices with lower rents, indicating potential for future value growth.</div>
                <div className='chart-descriptions'><b>Renter's Market:</b> High rents with more affordable purchase prices, attractive for rental income investors.</div>
                <div className='chart-descriptions'><b>Premium Market:</b> High rents and purchase prices, indicating a luxury, high-demand urban real estate sector.</div>
              </div>
            </div>
        </Col>
        <Col><WhereToInvestTableau /></Col>
        </Row>
          <br /><br /><br />
          <div className='chart-descriptions'><b>Insight:</b></div>
          <div className='chart-descriptions'><b>Global Rent Yields:</b> There's a clear visual differentiation in rent yields between cities, Nigeria Lagos is the highest.</div>
          <div className='chart-descriptions'><b>Trend Over Time:</b> Rent yield graphs indicate a general decrease over time in both countryside and downtown areas, with countryside yields fluctuating but staying higher.</div>
          <div className='chart-descriptions'><b>Commuting Trends:</b> Commute times peaked around 2015 and have since improved, suggesting better transportation or changes in work habits.</div>
        <Row>
          <Col className='chart-descriptions-variables'>
          <div className="section">
            <div className="variables-text">
              <div className='chart-descriptions'><b>Rental Yield:</b> is the total yearly gross rent divided by the house price (expressed in percentages). Higher is better.</div>
            </div>
          </div>
          </Col>
          <Col><WhereToInvestTableauB /></Col>
        </Row>
        <div className='bottom-space'></div>
      </Container>
    );
  }


