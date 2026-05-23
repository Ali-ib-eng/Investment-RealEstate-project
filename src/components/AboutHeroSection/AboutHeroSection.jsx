import "./AboutHeroSection.css"
const AboutHeroSection = ({aboutHeroItems}) => {
    return (
        <>
        {aboutHeroItems.map((item,index)=>(
            <section key={index} className="Ali-aboutHeroSection">
                <div className="bgimg">
                <div className="Ali-aboutHeroSection-content">
                    <p className="Ali-aboutHeroSection-floatTitle">
                    {item.floatTitle}
                </p>
                <h1 className="Ali-About-h1">{item.heading}</h1>
                <p className="Ali-About-p">{item.title}</p>
                <div className="Ali-aboutHeroSection-buttons">
                    {item.buttons.map((button,buttonIndex)=>(
                        <button key={buttonIndex} className="Ali-aboutHeroSection-button">{button}</button>
                    ))}
                </div>

                </div>
                </div>
            </section>
        ))}
        </>
    )
}

export default AboutHeroSection
