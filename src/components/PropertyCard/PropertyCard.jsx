import "./PropertyCard.css";


const PropertyCard = ({property}) => {

    return (
        /*لسا بدي ضيف حالة الخطأ و حالة جار التحميل */
        <div className="Ali-PropertyCard">
            {/*<img src={property.image} alt={property.title} />*/}
            <div className="Ali-PropertyCardImage">
                <img src={property.image} alt={property.title} className="Ali-PropertyCardImage" />
            </div>

            <h2 className="ahm-nameContainer"> {property.project.name}</h2>
            <h4>{property.title} </h4>
            <p>{property.project.location} , {property.area}</p>
            
            <p>type: {property.type} </p>

            <p className="ahm-priceContainer"> {property.price} $</p>
            {/* <p className={property.status ? "completed" : "pending"}> {property.status? "completed" : "pending"}</p> */}

            {/*<p> {property.total_budget}</p>
            <p>{property.status}</p>*/}
        </div>
    )
}

export default PropertyCard
