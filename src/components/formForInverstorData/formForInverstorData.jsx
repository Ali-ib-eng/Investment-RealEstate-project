import { useState } from "react";

import './formForInverstorData.css';
import { useNavigate } from "react-router-dom";

export default function FormForInverstorData(){
    const navigate = useNavigate();
    const [data, setData]= useState({
        email:'',
        name:'',
        phone:'',
        amount:0
    });
    const [isError, setIsError] = useState(false);

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(data);
        if(data.email=='' || data.name=='' || data.phone=='' || data.amount==0){
            setIsError(true);
        }
        else{
            setIsError(false);
            // send data to server
            console.log('data sent to server');
        }
    }

    const cancelHandler = (e)=>{
        e.preventDefault();
        setData({
            email:'',
            name:'',
            phone:'',
            amount:0
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
