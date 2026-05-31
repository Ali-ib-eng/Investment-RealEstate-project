import { useState } from 'react';
import './login.css'
import {FaGoogle, FaUser, FaRegEnvelope, FaLock } from 'react-icons/fa'

import { MdOutlinePassword } from "react-icons/md";


export default function Login (){
    const [newAccountData, setNewAccountData] = useState({
        fullname:'', emailAddress:'', password:'', confirmPassword:'', isAgreeToConditions:false
    })

    const [existAccountData, setExistAccountData]= useState({
        emailAddress:'', password:'',
    })

    const [isCreateNewAccount, setIsCreateNewAccount]= useState(true)

    const confirmPasswordHandler = () => {
        if(newAccountData.password !== newAccountData.confirmPassword){
            setNewAccountData({...newAccountData, password:'', confirmPassword:''})
            alert('passwords do not match');
            
        }
        else if(!newAccountData.isAgreeToConditions){
            alert('you must agree to the terms of service and privacy policy to create an account')
        }
        else if(newAccountData.fullname === '' || newAccountData.emailAddress === '' || newAccountData.password === '' || newAccountData.confirmPassword === ''){
            alert('please fill all the fields')

        }
        else{
            alert('account created successfully')
        }
    }

    const createAccountForm =()=>{
        return (
            <div className='ahm-loginContainer'>
                <img src='/IMG-homePage/pro-logo.png' alt='logo' style={{height:"80px", width:'80px'}} />
                <h1 className='ahm-loginH1' style={{fontSize:'25px', margin:'5px 0px'}}>Create An Account</h1>

                <form className="ahm-loginForm" action="">
                    <label>Full name</label><br />
                    <div className='ahm-inputContainer' >
                        <FaUser className='ahm-inputIcon'/>
                        <input onChange={(e)=>setNewAccountData({...newAccountData, fullname:e.target.value })} type='text' placeholder={newAccountData.fullname || "Ahmed Salmo"} />
                    </div>

                    <label>Email Address</label><br />
                    <div className='ahm-inputContainer' >
                        <FaRegEnvelope className='ahm-inputIcon'/>
                        <input onChange={(e)=>setNewAccountData({...newAccountData, emailAddress:e.target.value })} type='email' placeholder={newAccountData.emailAddress || "email@gmail.com"} />
                    </div>

                    <label>Password</label><br />
                    <div className='ahm-inputContainer' >
                        <FaLock className='ahm-inputIcon'/>
                        <input onChange={(e)=>setNewAccountData({...newAccountData, password:e.target.value })} type='password' placeholder={newAccountData.password || 'password' } />
                    </div>

                    <label>Confirm Password</label><br />
                    <div className='ahm-inputContainer' >
                        <MdOutlinePassword className='ahm-inputIcon' />
                        <input onChange={(e)=>setNewAccountData({...newAccountData, confirmPassword:e.target.value })} type='password' placeholder={newAccountData.confirmPassword || 'password' } />
                    </div>
                    <input checked={newAccountData.isAgreeToConditions} onClick={()=>setNewAccountData({...newAccountData, isAgreeToConditions:!newAccountData.isAgreeToConditions})} type='checkbox' style={{ width:'fit-content', margin:'10px 0px'}}/> 
                    <label  style={{fontSize:'11px' , backgroundColor:'white', width:"fit-content", margin:'10px 0px 10px 5px'}}>I agree to the terms of service and privacy policy</label><br />

                    <button onClick={confirmPasswordHandler} type='button' className='ahm-loginBtn'>Create Account</button>
                </form>
                <div className='ahm-loginOr'>
                    <p className='ahm-orStyle' >or</p>
                    <hr className='ahm-loginLine'/>
                </div>
                <button type='button' className='ahm-loginBtnWithGoogle'><FaGoogle/> sign up with google</button>
                <p className='ahm-loginWithExistAccount'>Already have an account? <span onClick={()=>setIsCreateNewAccount(false)} style={{color:'blue',cursor:'pointer'}}>Log in</span></p>

            </div>
        );
    }

    const logInFormWithExistAccount =()=>{
        return(
            <div className='ahm-loginContainer'>
                <img src='/IMG-homePage/pro-logo.png' alt='logo' style={{height:"80px", width:'80px'}} />
                <h1 className='ahm-loginH1' style={{fontSize:'25px', margin:'5px 0px'}}>Sign in</h1>
                <form className="ahm-loginForm" action="">
                    

                    <label>Email Address</label><br />
                    <div className='ahm-inputContainer' >
                        <FaRegEnvelope className='ahm-inputIcon'/>
                        <input onChange={(e)=>setExistAccountData({...existAccountData, emailAddress:e.target.value })} type='email' placeholder={newAccountData.emailAddress || "email@gmail.com"} />
                    </div>

                    <label>Password</label><br />
                    <div className='ahm-inputContainer' >
                        <FaLock className='ahm-inputIcon'/>
                        <input onChange={(e)=>setExistAccountData({...existAccountData, password:e.target.value })} type='password' placeholder={newAccountData.password || 'password' } />
                    </div>

                    
                    
                    <button  type='button' className='ahm-loginBtn'>sign in</button>
                </form>
                <div className='ahm-loginOr'>
                    <p className='ahm-orStyle' >or</p>
                    <hr className='ahm-loginLine'/>
                </div>
                <button type='button' className='ahm-loginBtnWithGoogle'><FaGoogle/> sign up with google</button>
                <p className='ahm-loginWithExistAccount'>New to Syria Rebuild? <span onClick={()=>setIsCreateNewAccount(true)} style={{color:'blue',cursor:'pointer'}}>Create new account</span></p>

            </div>
        );
    }

    return(
        <div className="ahm-loginPage">
            {/* {createAccountForm()} */}
            {/* {logInFormWithExistAccount()} */}
            {
                isCreateNewAccount ? createAccountForm() : logInFormWithExistAccount()
            }


        </div>
    );
}