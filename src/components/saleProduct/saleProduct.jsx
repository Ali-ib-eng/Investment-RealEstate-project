import "./saleProduct.css"

import { useEffect, useState } from "react";

import '../formForInverstorData/formForInverstorData.css'
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaIdCardAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaLocationPinLock } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";
import { FaTextHeight } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import ErrorNotification from "../errorNotification/errorNotification";

import axios from "axios";

export default function FormForInverstorData(){
    const navigate = useNavigate();

    const [token, setToken] = useState(null);
    const [successPosting, setSuccessPosting] = useState(null);
    const [isSubmiting, setIsSubmiting] = useState(false);
    const [ErrorInput, setErrorInput] = useState({
        isErrorInput:false,
        errorMessage:''
    });
    const [data, setData]= useState({
        seller_name:'',//
        seller_phone:'',//
        seller_email:'',//
        seller_national_id:'',//
        title:'',//
        type:'',//
        price:0,//
        city:'',//
        location:'',//
        area:0,//
        bedrooms:0,
        description:'',
        notes:'',
    });

    useEffect(()=>{

        const fetchToken = localStorage.getItem('token');
        setToken(fetchToken);
    },[])
    
    

    const submitHandler = (e)=>{
        e.preventDefault();
        
        if(data.seller_email=='' || data.seller_name=='' || data.seller_phone=='' || data.price==0 || data.seller_national_id=="" ||
            data.area==0 || data.title == ''|| data.type=='' || data.city =='' || data.location == ''||
            data.bedrooms==0 || data.description==''
        ){
            setErrorInput({...ErrorInput, isErrorInput:true, errorMessage:'Please fill all fields'});
        }
        else{
            setIsSubmiting(true)
            setErrorInput({...ErrorInput, isErrorInput:false, errorMessage:''});
            postData();
        }
    }

    const postData = async()=>{
        try{
            await axios.post(`https://zoological-flow-production-40af.up.railway.app/api/property-sale-requests`, {
                seller_name:data.seller_name,
                seller_phone:data.seller_phone,
                seller_email:data.seller_email,
                seller_national_id:data.seller_national_id,//
                title:data.title,
                type:data.type,
                price:data.price,
                city:data.city,
                location:data.location,
                area:data.area,
                bedrooms:data.bedrooms,
                description:data.description,
                notes:data.notes,
            },
                {
                    headers:{
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                setIsSubmiting(false);
                setSuccessPosting(true);
                setTimeout(()=>{
                    setSuccessPosting(false);
                    
                    navigate(-1)
                },3000)
        }catch(err){
            setErrorInput({isErrorInput:true, errorMessage:'Failed to submit data. Please try again.'});
            console.log(err.response.data);
        }
    }

    const cancelHandler = (e)=>{
        e.preventDefault();
        setData({
            email:'',
            name:'',
            phone:'',
            buyer_national_id:'',
            offer_amount:0,
            note:''
        });
        navigate(-1)
    }

    return (
        <div className="ahm-formForInverstorData">
            <div className="ahm-sale-container-h1" >
                    {/* <FaUserAlt style={{fontSize:'20px'}}/> */}
                    <h1> Property Data</h1>
                </div>
            <form className="ahm-formForInverstorData-Form ahm-sale-container-form"> 
                

                <div className="ahm-field-container-sale"> 
                    <label htmlFor="email" >Email *</label>
                    <div className="ahm-fliedContainer">
                    
                        <FaMessage className="ahm-formForInverstorData-Form-icon"/>
                        <input 
                            placeholder="xxxx@gmail.com"
                            type="email" 
                            onChange={(e)=>setData({...data,seller_email:e.target.value})}
                        />
                    </div>
                </div>
                
                <div className="ahm-field-container-sale">
                    <label htmlFor="name">Name *</label>
                    <div className="ahm-fliedContainer">
                        <FaUserAlt className="ahm-formForInverstorData-Form-icon"/>
                        <input 
                            placeholder="xxxx xxxx"
                            type="text" 
                            onChange={(e)=>setData({...data,seller_name:e.target.value})}
                        />
                    </div>
                </div>

                <div className="ahm-field-container-sale">
                    <label htmlFor="phone">Phone *</label>
                    <div className="ahm-fliedContainer">
                        <FaPhone className="ahm-formForInverstorData-Form-icon"/>
                        <input
                            placeholder="09x xxx xxxx"
                            type="text" 
                            onChange={(e)=>setData({...data,seller_phone:e.target.value})}
                        />
                    </div>
                </div>


                <div className="ahm-field-container-sale">
                    <label htmlFor="amount">National ID *</label>
                    <div className="ahm-fliedContainer">
                        <FaIdCardAlt className="ahm-formForInverstorData-Form-icon"/>
                        <input
                            placeholder="xxx-xxx-xx"
                            type="number" 
                            onChange={(e)=>setData({...data,seller_national_id:e.target.value})}
                        />
                    </div>
                </div>

                <div className="ahm-field-container-sale">
                    <label htmlFor="amount">Title *</label>
                    <div className="ahm-fliedContainer">
                        <FaTextHeight className="ahm-formForInverstorData-Form-icon"/>
                        <input
                            placeholder="xxx "
                            type="text" 
                            onChange={(e)=>setData({...data,title:e.target.value})}
                        />
                    </div>
                </div>

                <div className="ahm-field-container-sale">
                    <label htmlFor="amount">type *</label>
                    <div className="ahm-fliedContainer">
                        <FaCity className="ahm-formForInverstorData-Form-icon"/>
                        <input
                            placeholder="xxx "
                            type="text" 
                            onChange={(e)=>setData({...data,type:e.target.value})}
                        />
                    </div>
                </div>
                

                <div className="ahm-field-container-sale">
                    <label htmlFor="amount">city *</label>
                    <div className="ahm-fliedContainer">
                        <FaCity className="ahm-formForInverstorData-Form-icon"/>
                        <input
                            placeholder="xxx "
                            type="text" 
                            onChange={(e)=>setData({...data,city:e.target.value})}
                        />
                    </div>
                </div>

                <div className="ahm-field-container-sale">
                    <label htmlFor="amount">location *</label>
                    <div className="ahm-fliedContainer">
                        <FaLocationPinLock className="ahm-formForInverstorData-Form-icon"/>
                        <input
                            placeholder="xxx "
                            type="text" 
                            onChange={(e)=>setData({...data,location:e.target.value})}
                        />
                    </div>
                </div>

                <div className="ahm-field-container-sale">
                    <label htmlFor="amount">description *</label>
                    <div className="ahm-fliedContainer">
                        <FaPen className="ahm-formForInverstorData-Form-icon"/>
                        <input
                            placeholder="xxx "
                            type="text" 
                            onChange={(e)=>setData({...data,description:e.target.value})}
                        />
                    </div>
                </div>

                <div className="ahm-field-container-sale">
                    <label htmlFor="amount">bedrooms *</label>
                    <div className="ahm-fliedContainer">
                        <FaBed className="ahm-formForInverstorData-Form-icon"/>
                        <input
                            placeholder="0x "
                            type="number" 
                            onChange={(e)=>setData({...data,bedrooms:parseInt(e.target.value)})}
                        />
                    </div>
                </div>

                <div className="ahm-field-container-sale">
                    <label htmlFor="amount">area *</label>
                        <div className="ahm-fliedContainer">
                            <FaChartArea className="ahm-formForInverstorData-Form-icon"/>
                            <input
                                placeholder="0x "
                                type="number" 
                                onChange={(e)=>setData({...data,area:parseInt(e.target.value)})}
                            />
                        </div>
                </div>

                <div className="ahm-field-container-sale">
                    <label htmlFor="amount">price *</label>
                    <div className="ahm-fliedContainer">
                        <FaDollarSign className="ahm-formForInverstorData-Form-icon"/>
                        <input
                            placeholder="0x "
                            type="number" 
                            onChange={(e)=>setData({...data,price:parseFloat(e.target.value)})}
                        />
                    </div>
                </div>
                
                <textarea onChange={(e)=>setData({...data, notes:e.target.value})} className="ahm-textArea" placeholder="Note"/>
                
                {/* <div className="ahm-field-container-sale ahm-field-container-sale-image">
                    <label htmlFor="image" className="ahm-file-Btn-image" > <FaPlus style={{padding:'3px'}} /> Image  </label>
                    <div  className="ahm-fliedContainer ahm-file-input-container">
                        
                        <input 
                            type="file" 
                            id="image"
                            style={{display:'none'}}
                        />
                    </div>
                </div> */}

                    <div className="ahm-sale-BTN-container"> 
                        <button 
                            type="submit"  
                            className="ahm-formForInverstorData-Form-btn-submit"
                            onClick={submitHandler}
                            disabled={isSubmiting}
                        > {isSubmiting===false ? <FaTelegram style={{fontSize:'18px'}}/>:''} {isSubmiting?"Waiting...":"Submit"}</button>
                        <button 
                            type="cancel" 
                            className="ahm-formForInverstorData-Form-btn-cancel"
                            onClick={cancelHandler}
                        > <FaTrash /> cancel</button>
                    </div>
                <p style={{textAlign:'center', padding:'10px 0px'}}>The field marked with an asterisk (*) next to its name is required.</p>
            </form>

            {ErrorInput.isErrorInput && <ErrorNotification ErrorMessage={ErrorInput.errorMessage} setErrorInput={setErrorInput}/>}
            {successPosting && <p className="ahm-postingSuccess"> Reguest Success </p>}
        </div>
    );
}
