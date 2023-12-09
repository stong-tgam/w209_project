import '../stylesheets/WhereToInvest.css'
import WhereToInvestTableau from '../tableau/WhereToInvestTableau'
import WhereToInvestTableauB from '../tableau/WhereToInvestTableauB'

export default function Resources() {
    return (
      <div className="container pt-4">
        <div className="section">
          <div class="text">
            <h2>Price per Square Meter and Rent Change Over Years</h2>
            <p>Affordable Market: Low-cost living and buying, ideal for budget-focused buyers or investors.</p>
            <p>Investor's Market: High property prices with lower rents, indicating potential for future value growth.</p>
            <p>Renter's Market: High rents with more affordable purchase prices, attractive for rental income investors.</p>
            <p>Premium Market: High rents and purchase prices, indicating a luxury, high-demand urban real estate sector.</p>
            <p>Insight:</p>
            <p>Hong Kong stands out with top-tier rents and property prices, hinting at a volatile market.
                New York and Los Angeles show high rents but more moderate buying costs.
                In contrast, Shanghai, Paris, Berlin, and Toronto present more balanced and lower real estate costs.
            </p>
          </div>
        </div>
        <WhereToInvestTableau />
        <div className="section">
          <div class="text">
            <h2>Section #2</h2>
            <p>Global Rent Yields: There's a clear visual differentiation in rent yields between cities, Nigeria Lagos is the highest.</p>
            <p>Trend Over Time: The rent yield graphs show a general decline in both countryside and downtown rent yields over the years, while countryside rent yields fluctuate but remain higher.</p>
            <p> Commuting Trends: Commute times peaked around 2015 and have since improved, suggesting better transportation or changes in work habits.</p>
          </div>
        </div>
        <WhereToInvestTableauB />
        <div className='bottom-space'></div>
      </div>
    );
  }


