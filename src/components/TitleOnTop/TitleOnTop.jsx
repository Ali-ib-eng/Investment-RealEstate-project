import "./TitleOnTop.css"
const TitleOnTop = ({heading,title}) => {
    return (   
        <>
            <div className="title-on-top">
                <h1 className="Ali-LeadershipAndGovernance-h1">{heading}</h1>
                <p className="Ali-LeadershipAndGovernance-p">{title}</p>
            </div>
        </>    
    )
}

export default TitleOnTop
