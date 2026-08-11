import { useEffect, useState } from "react";
//import { GetPropertyApi } from "../API/GetPropertyApi";
import axios from "axios";
import PropertyCard from "../PropertyCard/PropertyCard";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
const ShowProperty = () => {
    const [property,setProperty]=useState([]);
    const [loading,setLoading]=useState(true);
    
    useEffect(()=>{
        const fetchProperty=async()=> {
        try{
            
            //const res=await axios.get("https://pogo-exponent-jiffy.ngrok-free.dev/api/projects/1")
            const res=await axios.get("https://jsonplaceholder.typicode.com/todos")
            console.log(res);
            setProperty(res.data);
            if(res){setLoading(false);}
        }catch(err){
            console.log( err);
        }
    }
        
       fetchProperty();
    },[]);
    
    return (
        <div className="Ali-propertyContainer">
            {loading&& <LoadingAnimation/>}
            {/*loading&& <p className="Ali-loading"></p>*/}
            {property.map((property)=>  (
                <PropertyCard
            key={property.id}
            property={property}
            />
            ))}
            
        </div>
    )
}

export default ShowProperty
