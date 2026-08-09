import "./PropertyCard.css";
const PropertyCard = ({property}) => {
    return (
        /*لسا بدي ضيف حالة الخطأ و حالة جار التحميل */
        <div className="Ali-PropertyCard">
            {/*<img src={property.image} alt={property.title} />*/}
            <h2>{property.id}</h2>
            <p>{property.title}</p>
            <p className={property.completed ? "completed" : "pending"}> {property.completed? "completed" : "pending"}</p>
            {/*<p> {property.total_budget}</p>
            <p>{property.status}</p>*/}
        </div>
    )
}

export default PropertyCard
