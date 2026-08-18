import "./heroCards.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ShowDetails from "../showDetails/showDetails";

export default function HeroCards({isLoggedIn}) {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [showDetails, setShowDetails] = useState({
        isShow:false,
        from:'properties',
        id:''
    })

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await axios.get('https://zoological-flow-production-40af.up.railway.app/api/properties');
                setData(response.data.data);
                console.log(response.data.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData();
    },[]);

    return(
        <div className="ahm-hero-card-container">
            {
                data.length >0 ? data.map((property)=>{
                    return(
                    <div onClick={()=>setShowDetails({...showDetails, isShow:true,id:property.id})} className="ahm-hero-card" key={property.id} > 
                        <img src={property.image} alt=""  className="ahm-hero-card-img" />
                        <div className="ahm-hero-card-data">
                            
                            <p>{property.type}</p>
                            <p>{property.location}</p>
                            <h3>{property.price} $</h3>
                            <div className="ahm-hero-BTN-container">
                                {/* <button className="ahm-hero-btn-buy">Buy</button> */}
                    {isLoggedIn && (<button
                        onClick={(e) => {e.stopPropagation();navigate("/formForInverstorData",
                            { state: { id: property.id },});}}
                            className="ahm-hero-btn-buy">
                            Buy
                            </button>)}
                                {/* <button className="ahm-hero-btn-rent">Rent</button> */}
        
                            </div>
                        </div>
                    </div>)
                    
                }):
                <h1 style={{textAlign:'center'}}>No Properties Found ...</h1>
            }
            {showDetails.isShow && <ShowDetails 
            setShowDetails={setShowDetails} 
            showDetails={showDetails} />}
        </div>
    );
}