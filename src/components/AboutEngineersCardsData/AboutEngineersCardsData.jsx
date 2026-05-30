import AboutEngineersCards from "../AboutEngineersCards/AboutEngineersCards"

const AboutEngineersCardsData = () => {
    const engineersCardsData = [
        {
        image:"/IMG-aboutPage/person1.png",
        position:"Chief Executive Officer",
        name:"Dr. Omar Al-Sayed",
        description:"Former Director of Infrastructure at the Arab Development Bank with 20+ years of regional expertise."
        },
        {
        image:"/IMG-aboutPage/person2.png",
        position:"Chief Investment Officer",
        name:"Layla Mansour",
        description:"Expert in emerging market equities and national debt restructuring, previously at Global Capital Markets."
        },
        {
        image:"/IMG-aboutPage/person3.png",
        position:"Chief Operations Officer",
        name:"Kareem Homsi",
        description:"Specialist in sustainable urban renewal and large-scale logistics with a focus on post-conflict zones."
        }
]
    return (
        <>
            <div className="Ali-aboutSectionCards">
                {engineersCardsData.map((card,index)=>(
                    <AboutEngineersCards
                        key={index}
                        image={card.image}
                        position={card.position}
                        name={card.name}
                        description={card.description}
                    />
                ))}
            </div>
        </>
    )
}

export default AboutEngineersCardsData
