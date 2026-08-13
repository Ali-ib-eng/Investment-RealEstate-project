import "./PropertyCard.css";


const PropertyCard = ({property}) => {

    return (
        /*لسا بدي ضيف حالة الخطأ و حالة جار التحميل */
        <div className="Ali-PropertyCard">
            {/*<img src={property.image} alt={property.title} />*/}
            <img src={property.image} alt={property.title} className="Ali-PropertyCardImage" />
            
            <p>{property.project.name}</p>
            <p>{property.project.location}</p>
            <p>{property.price}</p>
            <p className={property.status ? "completed" : "pending"}> {property.status? "completed" : "pending"}</p>

            {/*<p> {property.total_budget}</p>
            <p>{property.status}</p>*/}
        </div>
    )
}

export default PropertyCard
