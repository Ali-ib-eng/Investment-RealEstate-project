import "./Ethos.css";
import {
  FaShieldAlt,
  FaChartLine,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";


function Ethos() {
  return (
    <section className="Sh-ethos-section">

      
      <div className="Sh-ethos-header">
        <h1 className="Sh-ethos-title">The Pillars Of Our Ethos </h1>

        <p className="Sh-ethos-text">
           Built on trust and engineered for growth, our values guide every brick we lay and every investment we secure . </p>  
        
      </div>



     
      <div className="Sh-ethos-cards">

        
        <div className="Sh-ethos-card">
          <div className="Sh-ethos-iconBox">
            <FaShieldAlt className="Sh-ethos-icon"/>
          </div>
          <h3 className="Sh-ethos-card-title">Transparency</h3>
          <p className="Sh-ethos-card-text">
             Full visibility into project lifecycles , funding allocation , and construction milestones through blockchain integration .
          </p>
        </div>


        
        <div className="Sh-ethos-card">
          <div className="Sh-ethos-iconBox">
            <FaChartLine className="Sh-ethos-icon"/>
          </div>
          <h3 className="Sh-ethos-card-title">Impact</h3>
          <p className="Sh-ethos-card-text">
            Prioritizing projects that create jobs , restore essential services , and improve the long - term quality of life for communities .
          </p>
        </div>

        
        <div className="Sh-ethos-card">
          <div className="Sh-ethos-iconBox">
            <FaHandshake className="Sh-ethos-icon"/>
          </div>
          <h3 className="Sh-ethos-card-title">Reliability</h3>
          <p className="Sh-ethos-card-text">
             Institutional - grade risk management and partnerships with vetted local developers to ensure project delivery . 
          </p>
        </div>

        
        <div className="Sh-ethos-card">
          <div className="Sh-ethos-iconBox">
            <FaLightbulb className="Sh-ethos-icon"/>
          </div>
          <h3 className="Sh-ethos-card-title">Innovation</h3>
          <p className="Sh-ethos-card-text">
            Utilizing modern construction technology and digital asset management to accelerate the rebuilding process .
          </p>
        </div>

      </div>
    </section>
  );
}

 export default Ethos;