import Ethos from "../components/AboutEthos/Ethos";
import { FaShieldAlt, FaChartLine, FaHandshake, FaLightbulb } from "react-icons/fa";
import AboutHeroSection from "../components/AboutHeroSection/AboutHeroSection"
import { FaHouseUser } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import OurMessionAndOurVision from "../components/OurMessionAndOurVision/OurMessionAndOurVision";
import TitleOnTop from "../components/TitleOnTop/TitleOnTop";
//import AboutEngineersCards from "../components/AboutEngineersCards/AboutEngineersCards";
import AboutEngineersCardsData from "../components/AboutEngineersCardsData/AboutEngineersCardsData";
const About = () => {
  const aboutHeroItems=[{
    floatTitle:"National Renewal",
    heading:"Rebuilding Syria's Future",
    title:"Bridging global capital with local resilience to create sustainable infrastructure and lasting institutional stability.",
    buttons:["Explore Projects","Our Strategy"]
  }]
  const OurMissin_OurVision=[{
    icon:<FaHouseUser />,
    heading:"Our Mission",
    title:"To foster institutional stability by providing a transparent, secure, and efficient platform for reconstruction investment. We empower the Syrian diaspora and global partners to contribute directly to the physical and economic renewal of the nation."

  },
{
    icon:<IoMdEye />,
    heading:"Our Vision",
    title:"A revitalized Syria where modern infrastructure meets traditional heritage, driven by sustainable growth, national unity, and a resilient digital-first economy that serves every citizen."
}]
  
const ethosCards = [
  {
    icon: <FaShieldAlt />,
    title:"Transperancy",
    text:"Full visibility into project lifecycles , funding allocation , and construction milestones through blockchain integration .",
  },
  {
    icon: <FaChartLine />,
    title: "Impact",
    text: "Prioritizing projects that create jobs , restore essential services , and improve the long - term quality of life for communities .",
  },
  {
    icon: <FaHandshake />,
    title: "Reliability",
    text: "Institutional - grade risk management and partnerships with vetted local developers to ensure project delivery . ",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    text: "Utilizing modern construction technology and digital asset management to accelerate the rebuilding process .",
  },
];

  return (
    <>
      <AboutHeroSection
      aboutHeroItems={aboutHeroItems}
      />
      <OurMessionAndOurVision 
      OurMissin_OurVision={OurMissin_OurVision}
      />
      <TitleOnTop 
      heading="Leadership & Governance"
      title="Our executive team brings decades of experience in international finance, urban planning, and civic administration."
      />
      <AboutEngineersCardsData />
      
      <Ethos
       data={{
      title : "The Pillars Of Our Ethos",
      paragraph : " Built on trust and engineered for growth , our values guide every brick we lay and every investment we secure .`",
       cards: ethosCards 
       }}
      />
    </>
  )
}

export default About;


