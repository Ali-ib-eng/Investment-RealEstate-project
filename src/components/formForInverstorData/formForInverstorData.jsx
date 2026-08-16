import { useEffect, useState } from "react";

import './formForInverstorData.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import axios from "axios";

export default function FormForInverstorData(){
    const navigate = useNavigate();
    const location = useLocation();
    const [productID, setProductID] = useState(null);
    const [token, setToken] = useState(null);
    const [data, setData]= useState({
        email:'',
        name:'',
        phone:'',
        amount:0,
        paymentType:'',
        payment_date:''
    });

    useEffect(()=>{
        const id = location.state?.id;
        setProductID(parseInt(id));
        console.log(id);
        setData({
            ...data,
            payment_date: new Date().toISOString().substring(0, 10)
        })
        const fetchToken = localStorage.getItem('token');
        setToken(fetchToken);
    },[])
    
    const [isError, setIsError] = useState(false);

    const submitHandler = (e)=>{
        e.preventDefault();
        
        console.log(data);
        if(data.email=='' || data.name=='' || data.phone=='' || data.amount==0 || data.paymentType==""){
            setIsError(true);
        }
        else{
            setIsError(false);
            
            postData();
            console.log('data sent to server');
        }
    }

    const postData = async()=>{
        try{
            const posting = await axios.post(`https://zoological-flow-production-40af.up.railway.app/api/payments`, {
                investment_id:productID,
                amount:parseInt(data.amount),
                payment_type:data.paymentType,
                payment_date:data.payment_date,
                status:'paid'
            },
                {
                    headers:{
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                console.log(posting.data);
        }catch(err){
            console.log(err.response.data);
        }
    }

    const cancelHandler = (e)=>{
        e.preventDefault();
        setData({
            email:'',
            name:'',
            phone:'',
            amount:0,
            paymentType:''
        });
        setIsError(false);
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
                <label htmlFor="amount">Amount:</label>
                <input 
                    type="number" 
                    onChange={(e)=>setData({...data,amount:e.target.value})}
                />
                
                <select onChange={(e)=> setData({...data, paymentType:e.target.value})}>
                    <option value="">select payment type</option>
                    <option value="bank_transfer">Bank transfer</option>
                    <option value="sham_cash">Sham cash</option>
                </select>

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

            
            
        </div>
    );
}
