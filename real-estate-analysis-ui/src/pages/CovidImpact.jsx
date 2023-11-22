import '../stylesheets/CovidImpact.css'
import CovidImpactTableau from '../tableau/CovidImpactTableau'
import CovidImpactTableauB from '../tableau/CovidImpactTableauB'

export default function Resources() {
    return (
      <div className="container pt-4">
        <CovidImpactTableau />
        <CovidImpactTableauB />
        <div className='bottom-space'></div>
      </div>
    );
  }