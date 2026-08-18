import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = ({title,paragaraph,sections}) => {
  return (
    <>
      <section className="Ali-footerSection">
        <div className="AliFooter-logo">
        <h2 className="Ali-syr-rebuild-h1">{title}</h2>
        <p className="Ali-syr-rebuild-p">{paragaraph}</p>
      </div>
      {sections.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          {section.items.map((item, i) => (
            <p key={i}>
              <Link to="#">{item}</Link>
            </p>
          ))}

        </div>
      ))}
      </section>
    </>
  )
}
export default Footer


