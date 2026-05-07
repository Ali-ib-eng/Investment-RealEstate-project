import "./InvestmentImpactState.css"
const InvestmentImpactState = ({firstValue,textfirstValue,secondValue,textsecondValue,thirdValue,textthirdValue,fourthValue,textfourthValue}) => {
  return (
    <>
      <section className="InvestmentImpactState">
        <div className="Ali-boxState">
            <div className="Ali-mainContentforAnnualGrowthNumber">
                {firstValue}
            <div className="Ali-mainContentforAnnualText">
                {textfirstValue}
            </div>
            </div>
            
            <div className="Ali-mainContentforSecuredNumber">
                {secondValue}
            <div className="Ali-mainContentforSecuredText">
                {textsecondValue}
            </div>
            </div>        
            <div className="Ali-mainContentforOpportunitiesNumber">
                {thirdValue}
                <div className="Ali-mainContentforOpportunitiesText">
                {textthirdValue}
            </div>
            </div>
            
            <div className="Ali-mainContentforTotalNumber">
                {fourthValue}
                <div className="Ali-mainContentforTotalText">
                {textfourthValue}
            </div>
            </div>
            
        </div>
      </section>
    </>
  )
}

export default InvestmentImpactState


