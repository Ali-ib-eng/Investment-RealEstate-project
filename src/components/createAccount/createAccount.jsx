
import { useEffect, useState } from 'react';
import '../login/login.css'
import { FaGoogle ,FaUser, FaRegEnvelope, FaLock } from 'react-icons/fa';
import { MdOutlinePassword } from "react-icons/md";
import ErrorNotification from '../errorNotification/errorNotification';
import { useGoogleLogin } from '@react-oauth/google';

export default function CreateAccount(props){
const [googleLoginSuccess,setGoogleLoginSuccess]=useState("");
const login = useGoogleLogin({
  onSuccess: () => setGoogleLoginSuccess("Google login successful!"),
  onError: () => setGoogleLoginSuccess("Google login failed. Please try again."),
});
useEffect(()=>{
    const googleLoginMessageTimeout=setTimeout(() => {
        setGoogleLoginSuccess("");
    }, 3000); // Clear the message after 3 seconds

    return ()=>clearTimeout(googleLoginMessageTimeout); // Cleanup the timeout on component unmount
},[googleLoginSuccess])
    const [ErrorInput, setErrorInput] = useState({
        isErrorInput:false,
        errorMessage:''
    })

    const [newAccountData, setNewAccountData] = useState({
        fullname:'', emailAddress:'', password:'', confirmPassword:'', isAgreeToConditions:false
    });

    const createAccountConfirm = () => {

        if(newAccountData.fullname === '' || newAccountData.emailAddress === '' || newAccountData.password === '' || newAccountData.confirmPassword === ''){
            
            setErrorInput({
                isErrorInput:true,
                errorMessage:'please fill all the fields',
            })
        }

        else if(newAccountData.password !== newAccountData.confirmPassword){
            setNewAccountData({...newAccountData, password:'', confirmPassword:''})
            
            setErrorInput({
                isErrorInput:true,
                errorMessage:'passwords do not match',
            })
        }
        
        else if(!newAccountData.isAgreeToConditions){
            
            setErrorInput({
                isErrorInput:true,
                errorMessage:'you must agree to the terms of service and privacy policy to create an account',
            })
        }
        
        else{
            alert('account created successfully')
        }
    }
    


    const createAccountForm =()=>{
        
        return (
            <div  className='ahm-loginContainer'>
                <img src='/IMG-homePage/pro-logo.png' alt='logo' style={{height:"80px", width:'80px'}} />
                <h1 className='ahm-loginH1' style={{fontSize:'25px', margin:'5px 0px'}}>Create An Account</h1>

                <form className="ahm-loginForm" action="">
                    <label>Full name</label><br />
                    <div className='ahm-inputContainer' >
                        <FaUser className='ahm-inputIcon'/>
                        <input disabled={ErrorInput.isErrorInput} onChange={(e)=>setNewAccountData({...newAccountData, fullname:e.target.value })} type='text' placeholder={newAccountData.fullname || "Ahmed Salmo"} />
                    </div>

                    <label>Email Address</label><br />
                    <div className='ahm-inputContainer' >
                        <FaRegEnvelope className='ahm-inputIcon'/>
                        <input disabled={ErrorInput.isErrorInput} onChange={(e)=>setNewAccountData({...newAccountData, emailAddress:e.target.value })} type='email' placeholder={newAccountData.emailAddress || "email@gmail.com"} />
                    </div>

                    <label>Password</label><br />
                    <div className='ahm-inputContainer' >
                        <FaLock className='ahm-inputIcon'/>
                        <input disabled={ErrorInput.isErrorInput} onChange={(e)=>setNewAccountData({...newAccountData, password:e.target.value })} type='password' placeholder={newAccountData.password || 'password' } />
                    </div>

                    <label>Confirm Password</label><br />
                    <div className='ahm-inputContainer' >
                        <MdOutlinePassword className='ahm-inputIcon' />
                        <input disabled={ErrorInput.isErrorInput} onChange={(e)=>setNewAccountData({...newAccountData, confirmPassword:e.target.value })} type='password' placeholder={newAccountData.confirmPassword || 'password' } />
                    </div>
                    <input disabled={ErrorInput.isErrorInput} checked={newAccountData.isAgreeToConditions} onChange={()=>setNewAccountData({...newAccountData, isAgreeToConditions:!newAccountData.isAgreeToConditions})} type='checkbox' style={{ width:'fit-content', margin:'10px 0px'}}/> 
                    <label  style={{fontSize:'11px', width:"fit-content", margin:'10px 0px 10px 5px'}}>I agree to the terms of service and privacy policy</label><br />

                    <button  disabled={ErrorInput.isErrorInput} onClick={createAccountConfirm} type='button' className='ahm-loginBtn'>Create Account</button>
                </form>
                <div className='ahm-loginOr'>
                    <p className='ahm-orStyle' >or</p>
                    <hr className='ahm-loginLine'/>
                </div>
               

<button className='ahm-loginBtnWithGoogle' onClick={() => login()}
    > <FaGoogle /> Sign in with Google </button>
                {googleLoginSuccess && <p className="Ali-googleAuth">{googleLoginSuccess}</p>} 
                <p className='ahm-loginWithExistAccount'>Already have an account? <span  onClick={()=>(!ErrorInput.isErrorInput && props.setIsCreateNewAccount(false))} style={{color:'blue',cursor:'pointer'}}>Log in</span></p>

            </div>
        );
    }
    

    return(
        <div className="ahm-loginPage">
            {createAccountForm()}
            {ErrorInput.isErrorInput && <ErrorNotification ErrorMessage={ErrorInput.errorMessage} setErrorInput={setErrorInput} />}
        
        </div>
        
    );
}