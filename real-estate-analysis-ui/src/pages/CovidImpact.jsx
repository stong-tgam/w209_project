import '../stylesheets/CovidImpact.css'
import CovidImpactTableau from '../tableau/CovidImpactTableau'
import CovidImpactTableauB from '../tableau/CovidImpactTableauB'

export default function Resources() {
    return (
      <div className="container pt-4">
        <p>
          <b>Affordability Per Year By City</b>
        </p>
        <CovidImpactTableau />
        <CovidImpactTableauB />
        <div className='bottom-space'></div>
      </div>
    );
  }