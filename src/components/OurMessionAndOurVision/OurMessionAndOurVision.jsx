import myvilla from "/IMG-aboutPage/villa.png"
import "./OurMessionAndOurVision.css"
const OurMessionAndOurVision = ({ OurMissin_OurVision }) => {
    return (
        <>
        <section className="Ali-OurMessionAndOurVisionSection">
            <div className="OurMessionAndOurVision">
            <div className="Ali-About-contents">
                {OurMissin_OurVision.map((item, index) => {
                    return (
                        <div key={index} className="OurMessionAndOurVision-item">
                            <div className="Ali-aboutItems">
                                <div className="OurMessionAndOurVision-icon">{item.icon}</div>
                                <h2 className="OurMessionAndOurVision-heading">{item.heading}</h2>
                            </div>
                            <p className="OurMessionAndOurVision-title">{item.title}</p>
                        </div>
                    )
                })}
            </div>
            <div className="Ali-villaImageBox">
                <img className="Ali-villaImage" src={myvilla} alt="villa-image" />
            </div>
            </div>
        </section>
        </>
    )
}

export default OurMessionAndOurVision
