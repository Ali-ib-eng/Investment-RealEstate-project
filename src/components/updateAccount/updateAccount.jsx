import { useState } from 'react';
import '../login/login.css';
import './updateAccount.css';
import { FaUser, FaRegEnvelope, FaLock } from 'react-icons/fa';

import ErrorNotification from '../errorNotification/errorNotification';

export default function UpdatePassword(){

    const [updateType, setUpdateType] = useState('password');


    const [ErrorInput, setErrorInput] = useState({
        isErrorInput:false,
        errorMessage:'',
    })

    const [newUpdatePasswordData, setNewUpdatePasswordData] = useState({
        fullname:'', emailAddress:'', oldPassword:'', newPassword:''
    });
    
    const [newUpdateEmailData, setNewUpdateEmailData] = useState({
        fullname:'', oldEmailAddress:'', password:'', newEmailAddress:'', 
    });

    const updatePasswordConfirm = () => {

        if(newUpdatePasswordData.fullname === '' || newUpdatePasswordData.emailAddress === '' || newUpdatePasswordData.oldPassword === '' || newUpdatePasswordData.newPassword === ''){
            
            setErrorInput({
                isErrorInput:true,
                errorMessage:'please fill all the fields',
            })
        }

    }
    const updateEmailConfirm = () => {

        if(newUpdateEmailData.fullname === '' || newUpdateEmailData.oldEmailAddress === '' || newUpdateEmailData.password === '' || newUpdateEmailData.newEmailAddress === ''){
            
            setErrorInput({
                isErrorInput:true,
                errorMessage:'please fill all the fields',
            })
        }

    }

    const updatePasswordForm =()=>{
        return (
            <div  className='ahm-updatePasswordFormContainer'>

                <div className='ahm-updatePassword-header'>
                    <img src='/IMG-homePage/pro-logo.png' alt='logo' style={{height:"80px", width:'80px'}} />
                    <h1 className='ahm-loginH1' style={{fontSize:'25px', margin:'5px 0px'}}>Update Password | Email</h1>
                    <button onClick={()=>setUpdateType('password')} style={updateType === 'password' ?  {backgroundColor:'var(--boxState)', color:'white',marginTop:'30px'}:{marginTop:'30px'} } > Update Password </button>
                    <button onClick={()=>setUpdateType('email')} style={updateType === 'email' ?  {backgroundColor:'var(--boxState)', color:'white'}:{} }> Update Email </button>
                    
                </div>

                {
                    updateType === 'password' ? 
                        <div className='ahm-updatePasswordForm'>
                            <h1 style={{textAlign:'center', marginBottom:'20px'}}>Update Password</h1>
                            <form className="ahm-loginForm" action="">
                                <label>Full name</label><br />
                                <div className='ahm-inputContainer' >
                                    <FaUser className='ahm-inputIcon'/>
                                    <input disabled={ErrorInput.isErrorInput} onChange={(e)=>setNewUpdatePasswordData({...newUpdatePasswordData, fullname:e.target.value })} type='text' placeholder={newUpdatePasswordData.fullname || "Ahmed Salmo"} />
                                </div>

                                <label>Email Address</label><br />
                                <div className='ahm-inputContainer' >
                                    <FaRegEnvelope className='ahm-inputIcon'/>
                                    <input disabled={ErrorInput.isErrorInput} onChange={(e)=>setNewUpdatePasswordData({...newUpdatePasswordData, emailAddress:e.target.value })} type='email' placeholder={newUpdatePasswordData.emailAddress || "email@gmail.com"} />
                                </div>

                                <label>Password</label><br />
                                <div className='ahm-inputContainer' >
                                    <FaLock className='ahm-inputIcon'/>
                                    <input disabled={ErrorInput.isErrorInput} onChange={(e)=>setNewUpdatePasswordData({...newUpdatePasswordData, oldPassword:e.target.value })} type='password' placeholder={newUpdatePasswordData.oldPassword || 'password' } />
                                </div>

                                <div className='ahm-loginOr'>
                                    <p className='ahm-orStyle' >O</p>
                                    <hr className='ahm-loginLine'/>
                                </div>
                                
                                <label>Enter New Password</label><br />
                                <div className='ahm-inputContainer' >
                                    <FaLock className='ahm-inputIcon'/>
                                    <input disabled={ErrorInput.isErrorInput} onChange={(e)=>setNewUpdatePasswordData({...newUpdatePasswordData, newPassword:e.target.value })} type='password' placeholder={newUpdatePasswordData.newPassword || 'password' } />
                                </div>

                                <button  disabled={ErrorInput.isErrorInput} onClick={updatePasswordConfirm} type='button' className='ahm-loginBtn'>Update Account</button>
                            </form>
                            
                        </div>
                        :
                        <div className='ahm-updatePasswordForm'>
                            <h1 style={{textAlign:'center', marginBottom:'20px'}}>Update Email</h1>
                            <form className="ahm-loginForm" action="">
                                <label>Full name</label><br />
                                <div className='ahm-inputContainer' >
                                    <FaUser className='ahm-inputIcon'/>
                                    <input disabled={ErrorInput.isErrorInput} onChange={(e)=>setNewUpdateEmailData({...newUpdateEmailData, fullname:e.target.value })} type='text' placeholder={newUpdateEmailData.fullname || "Ahmed Salmo"} />
                                </div>

                                <label>Email Address</label><br />
                                <div className='ahm-inputContainer' >
                                    <FaRegEnvelope className='ahm-inputIcon'/>
                                    <input disabled={ErrorInput.isErrorInput} onChange={(e)=>setNewUpdateEmailData({...newUpdateEmailData, oldEmailAddress:e.target.value })} type='email' placeholder={newUpdateEmailData.oldEmailAddress || "email@gmail.com"} />
                                </div>

                                <label>Password</label><br />
                                <div className='ahm-inputContainer' >
                                    <FaLock className='ahm-inputIcon'/>
                                    <input disabled={ErrorInput.isErrorInput} onChange={(e)=>setNewUpdateEmailData({...newUpdateEmailData, password:e.target.value })} type='password' placeholder={newUpdateEmailData.password || 'password' } />
                                </div>

                                <div className='ahm-loginOr'>
                                    <p className='ahm-orStyle' >O</p>
                                    <hr className='ahm-loginLine'/>
                                </div>
                                
                                <label>Enter New Email</label><br />
                                <div className='ahm-inputContainer' >
                                    <FaRegEnvelope className='ahm-inputIcon'/>
                                    <input disabled={ErrorInput.isErrorInput} onChange={(e)=>setNewUpdateEmailData({...newUpdateEmailData, newEmailAddress:e.target.value })} type='email' placeholder={newUpdateEmailData.newEmailAddress || "email@gmail.com"} />
                                </div>
                                
                                <button  disabled={ErrorInput.isErrorInput} onClick={updateEmailConfirm} type='button' className='ahm-loginBtn'>Update Account</button>
                            </form>
                            
                        </div>
                }

            </div>
        );
    }
    

    return(
        <div className="ahm-loginPage">
            {updatePasswordForm()}
            {ErrorInput.isErrorInput && <ErrorNotification ErrorMessage={ErrorInput.errorMessage} setErrorInput={setErrorInput} />}
        </div>
        
    );
}


