import '../stylesheets/WhereToInvest.css'
import WhereToInvestTableau from '../tableau/WhereToInvestTableau'

export default function Resources() {
    return (
      <div className="container pt-4">
        <div className="section">
          <div class="text">
            <h2>Price per Square Meter and Rent Change Over Years</h2>
            <p>1. Asia Cities price per sqm increased rapidly over past years</p>
            <p>2. Over the past years, the cost of renting a one-bedroom apartment in North American cities has increased, while the price per square meter has changed less relatively</p>
          </div>
        </div>
        <WhereToInvestTableau />
      </div>
    );
  }