import "./showDetails.css"
import { useState, useEffect } from "react";
import axios from "axios"
import { FaTimes } from "react-icons/fa";

export default function ShowDetails(props){
    const [data, setData] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await axios.get(`https://zoological-flow-production-40af.up.railway.app/api/${props.showDetails.from}/${props.showDetails.id}`);
                console.log(response.data.data);
                setData(response.data.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData();
        console.log(props.showDetails)
    },[])

    return (
        <div className="ahm-showDetails">
            <div className="ahm-showDetails-icon-container">
                <FaTimes className="ahm-showDetails-icon" onClick={()=>props.setShowDetails({...props.showDetails,isShow:false})} />
            </div>
            {
                data !==null ? 
                props.showDetails.from==='properties' && ( <div className="ahm-showDetails-details-container">
                    <div className="ahm-showDetails-image-container">
                        <img src={data?.image} alt="aaaa" />
                    </div>
                    <div className="ahm-showDetails-details">
                        <h1>{data?.title}</h1>
                        <p>{data?.type}</p>
                        <p>description</p>
                        <p>{data?.location}</p>
                        <p>{data?.area}</p>
                        <p>{data?.status}</p>
                        <h3>{data?.price} $</h3>
                    </div>
                </div>)
                :""
            }
            
            {
                data !==null ? 
                props.showDetails.from==='projects' &&  <div className="ahm-showDetails-details-container">
                    <div className="ahm-showDetails-image-container">
                        <img src={data?.image} alt="aaaa" />
                    </div>
                    <div className="ahm-showDetails-details">
                        <h1>{data?.name}</h1>
                        <p>{data?.description}</p>
                        
                        <p>{data?.location}</p>
                        
                        <p>{data?.status}</p>
                        <h3>{data?.total_budget} $</h3>
                    </div>
                </div>
                : ""
            }
            {  
                data ===null &&<h1>Waiting...</h1>}
        </div>
    );
}