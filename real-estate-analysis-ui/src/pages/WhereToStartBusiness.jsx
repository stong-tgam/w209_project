import '../stylesheets/WhereToStartBusiness.css'
import WhereToStartBusinessTableau from '../tableau/WhereToStartBusinessTableau'

export default function Resources() {
    return (
      <div className="container pt-4">
        <div className="section">
          <div class="text">
            <h2>Where to start your business?</h2>
            <p>Exploration tool</p>
          </div>
        </div>
        <WhereToStartBusinessTableau />
      </div>
    );
  }