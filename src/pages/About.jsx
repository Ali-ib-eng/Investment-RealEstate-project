import AboutHeroSection from "../components/AboutHeroSection/AboutHeroSection"
import { FaHouseUser } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import OurMessionAndOurVision from "../components/OurMessionAndOurVision/OurMessionAndOurVision";
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
  return (
    <>
      <AboutHeroSection
      aboutHeroItems={aboutHeroItems}
      />
      <OurMessionAndOurVision 
      OurMissin_OurVision={OurMissin_OurVision}
      />
    </>
  )
}

export default About


