import "./Ethos.css";
import {
  FaShieldAlt,
  FaChartLine,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";


const Ethos = ({ data }) => {
  const { title, paragraph, cards = [] } = data || {};
  return (
    <section className="Sh-ethos-section">

      
      <div className="Sh-ethos-header">
        <h1 className="Sh-ethos-title">{title}</h1>
        <p className="Sh-ethos-text">{paragraph}</p>
      </div>

      

      <div className="Sh-ethos-cards">

        {cards.map((item, index) => (
          <div key={index} className="Sh-ethos-card">

            <div className="Sh-ethos-iconBox">
              <div className="Sh-ethos-icon">{item.icon}</div>
            </div>

            <h3 className="Sh-ethos-card-title">
              {item.title}
            </h3>

            <p className="Sh-ethos-card-text">
              {item.text}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
;

export default Ethos;
