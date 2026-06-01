// import '../../pages/login/login.css'
import '../login/login.css'

export default function ErrorNotification(props){


    return (
        <div className='ahm-notification'>
            <h3>{props.ErrorMessage}</h3>
            <button onClick={()=>props.setErrorInput({isErrorInput:false, errorMessage:''})} className='ahm-notificationBtn'>Ok</button>
        </div>
    )
}