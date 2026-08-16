import { useEffect, useState } from "react";

import './formForInverstorData.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import ErrorNotification from "../errorNotification/errorNotification";

import axios from "axios";

export default function FormForInverstorData(){
    const navigate = useNavigate();
    const location = useLocation();
    const [productID, setProductID] = useState(null);
    const [token, setToken] = useState(null);
    const [successPosting, setSuccessPosting] = useState(null);
    const [ErrorInput, setErrorInput] = useState({
        isErrorInput:false,
        errorMessage:''
    });
    const [data, setData]= useState({
        email:'',
        name:'',
        phone:'',
        buyer_national_id:'',
        offer_amount:0,
        note:''
    });

    useEffect(()=>{
        const id = location.state?.id;
        setProductID(parseInt(id));
        console.log(id);
        const fetchToken = localStorage.getItem('token');
        setToken(fetchToken);
    },[])
    
    

    const submitHandler = (e)=>{
        e.preventDefault();
        
        if(data.email=='' || data.name=='' || data.phone=='' || data.offer_amount==0 || data.buyer_national_id==""){
            setErrorInput({...ErrorInput, isErrorInput:true, errorMessage:'Please fill all fields'});
        }
        else{
            setErrorInput({...ErrorInput, isErrorInput:false, errorMessage:''});
            postData();
        }
    }

    const postData = async()=>{
        try{
            await axios.post(`https://zoological-flow-production-40af.up.railway.app/api/project-purchase-requests`, {
                project_id:productID,
                buyer_name:data.name,
                buyer_phone:data.phone,
                buyer_email:data.email,
                buyer_national_id:data.buyer_national_id,
                offer_amount:data.offer_amount,
                notes:data.note,
            },
                {
                    headers:{
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                setSuccessPosting(true);
                setTimeout(()=>{
                    setSuccessPosting(false);
                    setData({
                        email:'',
                        name:'',
                        phone:'',
                        buyer_national_id:'',
                        offer_amount:0,
                        note:''
                    });
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
            
            <form className="ahm-formForInverstorData-Form"> 
                <h1>Please enter all fields to complite purches process</h1>
                <hr className="ahm-formLine"/>
                <label htmlFor="email" >Email:</label>
                <input 
                    type="email" 
                    onChange={(e)=>setData({...data,email:e.target.value})}
                />
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    onChange={(e)=>setData({...data,name:e.target.value})}
                />
                <label htmlFor="phone">Phone:</label>
                <input 
                    type="text" 
                    onChange={(e)=>setData({...data,phone:e.target.value})}
                />
                <label htmlFor="amount">National ID:</label>
                <input 
                    type="number" 
                    onChange={(e)=>setData({...data,buyer_national_id:e.target.value})}
                />

                <label htmlFor="amount">Offer Amount:</label>
                <input 
                    type="number" 
                    onChange={(e)=>setData({...data,offer_amount:e.target.value})}
                />
                
                <textarea onChange={(e)=>setData({...data, note:e.target.value})} className="ahm-textArea" placeholder="Note"/>
                

                    <button 
                        type="submit"  
                        className="ahm-formForInverstorData-Form-btn-submit"
                        onClick={submitHandler}
                    >Submit</button>
                    <button 
                        type="cancel" 
                        className="ahm-formForInverstorData-Form-btn-cancel"
                        onClick={cancelHandler}
                    >cancel</button>
                
            </form>

            {ErrorInput.isErrorInput && <ErrorNotification ErrorMessage={ErrorInput.errorMessage} setErrorInput={setErrorInput}/>}
            {successPosting && <p className="ahm-postingSuccess"> Reguest Success </p>}
        </div>
    );
}
