
import axios from "axios";
import {  useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import '../login/login.css'
import { FaGoogle ,FaUser, FaRegEnvelope, FaLock } from 'react-icons/fa';
import { MdOutlinePassword } from "react-icons/md";
import ErrorNotification from '../errorNotification/errorNotification';
import { useGoogleLogin } from '@react-oauth/google';

export default function CreateAccount(props){
//const navigate = useNavigate();
const [googleLoginSuccess,setGoogleLoginSuccess]=useState("");
const [loading, setLoading]=useState(false);
const [createAccountSuccess, setCreateAccountSuccess]=useState(false);
const login = useGoogleLogin({
  onSuccess: () =>( 
    setGoogleLoginSuccess("Google login successful!"),
    setTimeout(() => {props.setIsCreateNewAccount(false)},3000)
  ),
  onError: () => (
    setGoogleLoginSuccess("Google login failed. Please try again."),
    setTimeout(() => {setGoogleLoginSuccess("")},3000)
  ),

});
/*useEffect(()=>{
    const CreateAccount=setTimeout(() => {
        
        
        setCreateAccountSuccess(false);
    }, 3000); // Clear the message after 3 seconds

    return ()=>clearTimeout(CreateAccount); // Cleanup the timeout on component unmount
    
},[createAccountSuccess]);*/
    const [ErrorInput, setErrorInput] = useState({
        isErrorInput:false,
        errorMessage:''
    })

    const [newAccountData, setNewAccountData] = useState({
        fullname:'',
         emailAddress:'',
        password:'',
        confirmPassword:'',
        isAgreeToConditions:false
    });
    
   const createAccountConfirm=()=>{

  if(
    !newAccountData.fullname||
    !newAccountData.emailAddress||
    !newAccountData.password||
    !newAccountData.confirmPassword
  ) {

    setErrorInput({
      isErrorInput:true,
      errorMessage:'please fill all the fields',
    });
    return false;
  }

  if (newAccountData.password !== newAccountData.confirmPassword) {

    setNewAccountData({
      ...newAccountData,
      password: '',
      confirmPassword: ''
    });

    setErrorInput({
      isErrorInput: true,
      errorMessage: 'passwords do not match',
    });
    
    return false;
  }

  if (!newAccountData.isAgreeToConditions) {

    setErrorInput({
      isErrorInput: true,
      errorMessage:
        'you must agree to the terms of service and privacy policy to create an account',
    });
    return false;
  }
  return true;
};
// mmmmm

 const UserRegister=async(formData)=>{
  try{
    
    setLoading(true);
    
     const response = await axios.post(
      "https://pogo-exponent-jiffy.ngrok-free.dev/api/auth/register",
      {
        name: formData.fullname,
        email: formData.emailAddress,
        password: formData.password,
        password_confirmation:
          formData.confirmPassword,
        is_agree_to_conditions:
          formData.isAgreeToConditions,
      }
    );

    console.log(response.data);
//save token in local storage
    if (response.data.token) {
      localStorage.setItem("token",response.data.token);
    }
    setCreateAccountSuccess(true);
    //alert("Account created successfully");
   setTimeout(()=>{props.setIsCreateNewAccount(false)},3000)
  }catch(error){
    console.log(error);
    setErrorInput({
      isErrorInput: true,
      errorMessage:
        error.response?.data?.message ||
        "Registration failed"
    });
    

}finally{
    setLoading(false);
  }
  
};
const handleCreateAccount=async()=>{
  const isValid=createAccountConfirm();
  if (!isValid)
  return ;

  const formData = { ...newAccountData };
  
  try{
    await UserRegister(formData);

     setNewAccountData({
      fullname: '',
      emailAddress: '',
      password: '',
      confirmPassword: '',
      isAgreeToConditions: false
    });

    setCreateAccountSuccess(true);

    setTimeout(() => {
      props.setIsCreateNewAccount(false);
    }, 3000);
  }
  catch(error){
    console.log(error)
  }
  
};

    const createAccountForm =()=>{
        
        return (
            <div  className='ahm-loginContainer'>
                <img src='/IMG-homePage/pro-logo.png' alt='logo' style={{height:"80px", width:'80px'}} />
                <h1 className='ahm-loginH1' style={{fontSize:'25px', margin:'5px 0px'}}>Create An Account</h1>

                <form className="ahm-loginForm" action="">
                    <label>Full name</label><br />
                    <div className='ahm-inputContainer' >
                        <FaUser className='ahm-inputIcon'/>
                      
                        <input className="Ali-inputslogin" value={newAccountData.fullname} disabled={ErrorInput.isErrorInput} onChange={(e)=>setNewAccountData({...newAccountData, fullname:e.target.value })} type='text' placeholder={newAccountData.fullname || "User name"} />
                    </div>

                    <label>Email Address</label><br />
                    <div className='ahm-inputContainer' >
                        <FaRegEnvelope className='ahm-inputIcon'/>
                        <input className="Ali-inputslogin" value={newAccountData.emailAddress} disabled={ErrorInput.isErrorInput} onChange={(e)=>setNewAccountData({...newAccountData, emailAddress:e.target.value })} type='email' placeholder={newAccountData.emailAddress || "Email@gmail.com"} />
                    </div>

                    <label>Password</label><br />
                    <div className='ahm-inputContainer' >
                        <FaLock className='ahm-inputIcon'/>
                        <input className="Ali-inputslogin" value={newAccountData.password} disabled={ErrorInput.isErrorInput} onChange={(e)=>setNewAccountData({...newAccountData, password:e.target.value })} type='password' placeholder={newAccountData.password || 'Password' } />
                    </div>

                    <label>Confirm Password</label><br />
                    <div className='ahm-inputContainer' >
                        <MdOutlinePassword className='ahm-inputIcon' />
                        <input className="Ali-inputslogin" value={newAccountData.confirmPassword}  disabled={ErrorInput.isErrorInput} onChange={(e)=>setNewAccountData({...newAccountData, confirmPassword:e.target.value })} type='password' placeholder={newAccountData.confirmPassword || 'Confirm Password' } />
                    </div>
                    <input disabled={ErrorInput.isErrorInput} checked={newAccountData.isAgreeToConditions} onChange={()=>setNewAccountData({...newAccountData, isAgreeToConditions:!newAccountData.isAgreeToConditions})} type='checkbox' style={{ width:'fit-content', margin:'10px 0px'}}/> 
                    <label  style={{fontSize:'11px', width:"fit-content", margin:'10px 0px 10px 5px'}}>I agree to the terms of service and privacy policy</label><br />
                    <button  disabled={ErrorInput.isErrorInput} onClick={handleCreateAccount} type='button' className='ahm-loginBtn'>{loading ? "Creating account Now...":"Create Account"}</button>
                    {createAccountSuccess && <p className="Ali-googleAndAccountAuth">Account created successfully! Please log in.</p>}
                    
                </form>
                <div className='ahm-loginOr'>
                    <p className='ahm-orStyle' >or</p>
                    <hr className='ahm-loginLine'/>
                </div>
               

<button className='ahm-loginBtnWithGoogle' onClick={() => login()}
    > <FaGoogle /> Sign in with Google </button>                            
                {googleLoginSuccess && <p className="Ali-googleAndAccountAuth">{googleLoginSuccess}</p>} 
                <p className='ahm-loginWithExistAccount'>Already have an account? <span  onClick={()=>(!ErrorInput.isErrorInput && props.setIsCreateNewAccount(false))} style={{color:'blue',cursor:'pointer'}}>Log in</span></p>
            </div>
        )
    }
    

    return(
        <div className="ahm-loginPage">
            {createAccountForm()}
            {ErrorInput.isErrorInput && <ErrorNotification ErrorMessage={ErrorInput.errorMessage} setErrorInput={setErrorInput} />}
        
        </div>
        
    )
}
