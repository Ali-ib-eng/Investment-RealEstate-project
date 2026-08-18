import { useEffect, useState } from "react";

import './formForInverstorData.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaIdCardAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import ErrorNotification from "../errorNotification/errorNotification";

import axios from "axios";

export default function FormForInverstorData(){
    const navigate = useNavigate();
    const location = useLocation();
    const [productID, setProductID] = useState(null);
    const [token, setToken] = useState(null);
    const [successPosting, setSuccessPosting] = useState(null);
    const [isSubmiting, setIsSubmiting] = useState(false);
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

    useEffect(() => {
  const fetchToken=localStorage.getItem("token")?.trim();

  if (!fetchToken) {
    navigate("/getStarted", {
      replace: true,
      state: {
        message: "Please log in before purchasing.",
      },
    });
    return;
  }
  setToken(fetchToken);
  const id = location.state?.id;
  if (id){
    setProductID(parseInt(id));
  }
}, [location.state, navigate]);
    
    

    /*const submitHandler = (e)=>{
        e.preventDefault();
        
        if(data.email=='' || data.name=='' || data.phone=='' || data.offer_amount==0 || data.buyer_national_id==""){
            setErrorInput({...ErrorInput, isErrorInput:true, errorMessage:'Please fill all fields'});
        }
        else{
            setIsSubmiting(true)
            setErrorInput({...ErrorInput, isErrorInput:false, errorMessage:''});
            postData();
        }
    }
*/
const submitHandler = (e) => {
  e.preventDefault();

  if (!token) {
    navigate("/getStarted", {
      replace: true,
      state: {
        message: "Please log in before purchasing.",
      },
    });

    return;
  }

  if (
    data.email === "" ||
    data.name === "" ||
    data.phone === "" ||
    data.offer_amount == 0 ||
    data.buyer_national_id === ""
  ) {
    setErrorInput({
      ...ErrorInput,
      isErrorInput: true,
      errorMessage: "Please fill all fields",
    });
  } else {
    setIsSubmiting(true);

    setErrorInput({
      ...ErrorInput,
      isErrorInput: false,
      errorMessage: "",
    });

    postData();
  }
};
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
                setIsSubmiting(false);
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
                <div style={{textAlign:'center', display:'flex', alignContent:'center', justifyContent:'center', gap:'7px', color:'rgb(73, 73, 230)', padding:"10px 0px 30px"}}>
                    <FaUserAlt style={{fontSize:'20px'}}/>
                    <h2>User data for purches</h2>
                </div>
                {/* <hr className="ahm-formLine"/> */}
                <label htmlFor="email" >Email *</label>
                <div className="ahm-fliedContainer">
                    <FaMessage className="ahm-formForInverstorData-Form-icon"/>
                    <input 
                        placeholder="xxxx@gmail.com"
                        type="email" 
                        onChange={(e)=>setData({...data,email:e.target.value})}
                    />
                </div>
                
                <label htmlFor="name">Name *</label>
                <div className="ahm-fliedContainer">
                    <FaUserAlt className="ahm-formForInverstorData-Form-icon"/>
                    <input 
                        placeholder="xxxx xxxx"
                        type="text" 
                        onChange={(e)=>setData({...data,name:e.target.value})}
                    />
                </div>

                <label htmlFor="phone">Phone *</label>

                <div className="ahm-fliedContainer">
                    <FaPhone className="ahm-formForInverstorData-Form-icon"/>
                    <input
                        placeholder="09x xxx xxxx"
                        type="text" 
                        onChange={(e)=>setData({...data,phone:e.target.value})}
                    />
                </div>


                <label htmlFor="amount">National ID *</label>

                <div className="ahm-fliedContainer">
                    <FaIdCardAlt className="ahm-formForInverstorData-Form-icon"/>
                    <input
                        placeholder="xxx-xxx-xx"
                        type="number" 
                        onChange={(e)=>setData({...data,buyer_national_id:e.target.value})}
                    />
                </div>

                <label htmlFor="amount">Offer Amount *</label>
                <div className="ahm-fliedContainer">
                    <FaDollarSign className="ahm-formForInverstorData-Form-icon"/>
                    <input
                        placeholder="x0 $"
                        type="number" 
                        onChange={(e)=>setData({...data,offer_amount:e.target.value})}
                    />
                </div>
                
                <textarea onChange={(e)=>setData({...data, note:e.target.value})} className="ahm-textArea" placeholder="Note"/>
                

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
                <p style={{textAlign:'center', padding:'10px 0px'}}>The field marked with an asterisk (*) next to its name is required.</p>
            </form>

            {ErrorInput.isErrorInput && <ErrorNotification ErrorMessage={ErrorInput.errorMessage} setErrorInput={setErrorInput}/>}
            {successPosting && <p className="ahm-postingSuccess"> Reguest Success </p>}
        </div>
    );
}
