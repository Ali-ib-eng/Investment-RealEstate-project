import InvestmentOpportunites from "./investments/investmentOpportunities"
import Hero from "../components/HeroSection/Hero";
import InvestmentImpactState from "../components/InvestmentImpactState/InvestmentImpactState";
import '../index.css';
const Invest = ({isLoggedIn}) => {
  return (
    <>
      <Hero title="Invest in Syria's Future"
      paragraph="A leading reconstruction platform connecting investors with institutional and stable real estate opportunities in the heart of Syrian cities."
      searchBtn="Search Now"
      isLoggedIn={isLoggedIn}
        />
        <InvestmentImpactState
        firstValue="+45%" textfirstValue="Expected Annual Growth"
        secondValue="+12.5K" textsecondValue="Housing Units Secured"
        thirdValue="250+" textthirdValue="Active Investment Opportunities"
        fourthValue="$50M" textfourthValue="Total Investments"

        />
    <InvestmentOpportunites />
        </>
  )
}
export default Invest

