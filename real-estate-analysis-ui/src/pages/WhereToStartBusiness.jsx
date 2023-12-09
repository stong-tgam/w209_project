import '../stylesheets/WhereToStartBusiness.css'
import WhereToStartBusinessTableau from '../tableau/WhereToStartBusinessTableau'
import WhereToStartBusinessTableauB from '../tableau/WhereToStartBusinessTableauB'

export default function Resources() {
    return (
      <div className="container pt-4">
        <div className="section">
          <div class="text">
            <h2>Where to start your business?</h2>
            <p>Exploration tool_test</p>
          </div>
        </div>
        <WhereToStartBusinessTableau />
        <WhereToStartBusinessTableauB />
        <div className='bottom-space'></div>
      </div>
    );
  }