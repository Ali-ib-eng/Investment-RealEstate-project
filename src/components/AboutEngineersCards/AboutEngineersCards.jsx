import "./AboutEngineersCards.css"
const AboutEngineersCards = ({ image, position, name, description }) => {
    return (
        <>
            <div className="AliCardsContainer">
                <div className="Ali-CardsImage">
                    <img className="Ali-CardImage" src={image} alt={name} />
                </div>
                <div className="AliCardsContent">
                    <p className="Ali-position">{position}</p>
                    <h4 className="Ali-Name">{name}</h4>
                    <p className="Ali-description">{description}</p>
                </div>
            </div>
        </>
    )
}

export default AboutEngineersCards
