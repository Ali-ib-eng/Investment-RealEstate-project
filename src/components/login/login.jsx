
import { useState } from 'react';
import './login.css';
import {FaGoogle, FaRegEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ErrorNotification from '../errorNotification/errorNotification';
import CreateAccount from '../createAccount/createAccount';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export default function Login (){
const navigate = useNavigate();
    const [googleLoginSuccess,setGoogleLoginSuccess]=useState("");
    const [loginSuccess, setLoginSuccess]=useState(false);
    const [loading, setLoading]=useState(false);
const login = useGoogleLogin({
  onSuccess: () => ( 
    setGoogleLoginSuccess("Google login successful!"),
    setTimeout(() => {navigate(-1)},3000)
  ),
  onError: () => setGoogleLoginSuccess("Google login failed. Please try again."),
});
/*useEffect(()=>{
    const googleLoginMessageTimeout=setTimeout(() => {
        setGoogleLoginSuccess("");
    }, 3000); // Clear the message after 3 seconds
    return ()=>clearTimeout(googleLoginMessageTimeout); // Cleanup the timeout on component unmount
},[googleLoginSuccess])*/
    const [existAccountData, setExistAccountData]= useState({
        emailAddress:'', password:'',
    })


    const [isCreateNewAccount, setIsCreateNewAccount]= useState(true);

    const [ErrorInput, setErrorInput] = useState({
        isErrorInput:false,
        errorMessage:''
    })

    const postLoginData = async()=>{
        try{
            setLoading(true);
            const response = await axios.post('https://pogo-exponent-jiffy.ngrok-free.dev/api/auth/login', {email: existAccountData.emailAddress, password: existAccountData.password});
            console.log(response.data); // Handle the response as needed
            setExistAccountData({emailAddress:'', password:''});
            setLoginSuccess(true);
            setTimeout(()=>{
                setLoginSuccess(false);
                navigate(-1);
            },3000)
        }catch(err){
            console.log(err);
            setErrorInput({
                isErrorInput:true,
                errorMessage:'Login failed. Please check your credentials and try again.'
            })
        }
        finally{
            setLoading(false);
        }
    }
    const loginConfirm =()=>{
        if(existAccountData.emailAddress === "" || existAccountData.password === ""){
            setErrorInput({
                isErrorInput:true,
                errorMessage:'please fill all the fields'
            })
        }
        else postLoginData()
    }

    const logInFormWithExistAccount =()=>{
        return(
            <div className='ahm-loginContainer'>
                <img src='/IMG-homePage/pro-logo.png' alt='logo' style={{height:"80px", width:'80px'}} />
                <h1 className='ahm-loginH1' style={{fontSize:'20px', margin:'5px 0px'}}>Sign in</h1>
                <form className="ahm-loginForm" action="">
                    
                    <label>Email Address</label><br />
                    <div className='ahm-inputContainer' >
                        <FaRegEnvelope className='ahm-inputIcon'/>
                        <input disabled={ErrorInput.isErrorInput} onChange={(e)=>setExistAccountData({...existAccountData, emailAddress:e.target.value })} type='email' placeholder={existAccountData.emailAddress || "email@gmail.com"} />
                    </div>

                    <label>Password</label><br />
                    <div className='ahm-inputContainer' >
                        <FaLock className='ahm-inputIcon'/>
                        <input disabled={ErrorInput.isErrorInput} onChange={(e)=>setExistAccountData({...existAccountData, password:e.target.value })} type='password' placeholder={existAccountData.password || 'password' } />
                    </div>

                    
                    
                    <button disabled={ErrorInput.isErrorInput} onClick={loginConfirm} type='button' className='ahm-loginBtn'>{loading ? "Signing in..." : "Sign in"}</button>

                </form>
                <div className='ahm-loginOr'>
                    <p className='ahm-orStyle' >or</p>
                    <hr className='ahm-loginLine'/>
                </div>
                <button className='ahm-loginBtnWithGoogle' onClick={() => login()}
    > <FaGoogle /> Sign in with Google </button>
                {googleLoginSuccess && <p className="Ali-googleAndAccountAuth">{googleLoginSuccess}</p>} 
                <p className='ahm-loginWithExistAccount'>New to Syria Rebuild? <span onClick={()=>(!ErrorInput.isErrorInput &&  setIsCreateNewAccount(true))} style={{color:'blue',cursor:'pointer'}}>Create new account</span></p>
                {loginSuccess && <p className="Ali-googleAndAccountAuth"> Log in Successed.</p>}
            </div>
        );
    }


    return(
        <div className="ahm-loginPage">
            {isCreateNewAccount ? <CreateAccount setIsCreateNewAccount={setIsCreateNewAccount} /> : logInFormWithExistAccount()}
            {/* {logInFormWithExistAccount()} */}
            {ErrorInput.isErrorInput && <ErrorNotification ErrorMessage={ErrorInput.errorMessage} setErrorInput={setErrorInput}  />}
            
        </div>
    );
}