import axios from 'axios';
import './userDashboard.css';
import { FaUser, FaGoogle, FaPen,FaMapMarkerAlt, FaSearch  } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function UserDashboard() {
    const [loading, setLoading]=useState(false);
    const [logoutisSuccess,setlogoutisSuccess]=useState(false);
    const navigate=useNavigate();
    const GoToLogIn=()=>{
        navigate("/GetStarted", {state:{message:"You have been logged out successfully. Please log in again."}});
    };
    // api/auth/logout
const logoutUser = async () => {
  const token=localStorage.getItem("token")?.trim();
  if (!token) {
    console.log("Token is missing from localStorage");
    //GoToLogIn();
    return;
  }
  try {
    setLoading(true);
    const response = await axios.post(
      "https://zoological-flow-production-40af.up.railway.app/api/auth/logout",
      {},
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setlogoutisSuccess(true)
    console.log("Logout response:", response.data);
    //remove token from local storage and navigate to login page
    localStorage.removeItem("token");
    GoToLogIn();
  } catch (error) {
    console.error("Logout status:", error.response?.status);
    console.error("Logout response:", error.response?.data);
  } finally {
    setLoading(false);
  }
};

    return (
        <div className="ahm-userDashboard">
            <div className='ahm-userdetails'>
                <div className='ahm-userImageContainer'>
                    <img src='/IMG-aboutPage/person1.png' alt='user image' className='ahm-userImage'/>
                </div>
                <hr />
                
                <div className='ahm-userInfo'>
                    <div className='ahm-userInfoItem'>
                        <FaUser className='ahm-userDashboard-icons'/>
                        <p className='ahm-userName'>Ahmed</p>
                    </div>
                    
                    <div className='ahm-userInfoItem'>
                        <FaGoogle className='ahm-userDashboard-icons'/>
                        <p className='ahm-userName'> Email </p>
                    </div>
                    
                    <Link to='/updatePassword' className='ahm-userInfoItem ahm-userInfoActive' >
                        <FaPen className='ahm-userDashboard-icons'/>
                        <p className='ahm-userName'> Update Email | Password  </p>
                    </Link>
                    {/*className='ahm-userInfoItem ahm-userInfoActive ahm-logout'  */}
                    <div  className='Ali-logout'>
                        <MdLogout className='ahm-userDashboard-icons'/>
                        <button disabled={loading}  className='Ali-logoutButton' onClick={logoutUser}>{loading ? "Logging out...":"Log out"}</button>
                        {logoutisSuccess &&<p className="Ali-logout-message"> Logout Successed. please log in</p>}
                    </div>
                    

                </div>

            </div>

            <div className='ahm-userDashboard-investment'>
                <h2 className='ahm-investmentTitle'>Your Investments</h2>
                <div className='ahm-new-investmentContainer'>
                    <div className='ahm-title-container'>
                        <p style={{padding:'3px', borderRadius:'10px', backgroundColor:'rgb(22, 216, 22)',width:'fit-content'}}></p>
                        <h4>New Investments</h4>
                    </div>
                    <hr/>
                    <div className='ahm-investment-search-Container'>
                        <FaSearch className='ahm-search-incon'/>
                        <input type='text' placeholder='Search for an investment' className='ahm-investmentSearch'/>
                    </div>
                    <div className='ahm-investmentItem-container'>

                        <div className='ahm-investmentItem'>
                            <p>Investment 1</p>
                            <p> $1000</p>
                            <p> 01/01/2024</p>
                            <p> <FaMapMarkerAlt />  Lattakia</p>
                        </div>

                        <div className='ahm-investmentItem'>
                            <p>Investment 1</p>
                            <p> $1000</p>
                            <p> 01/01/2024</p>
                            <p> <FaMapMarkerAlt />  Lattakia</p>
                        </div>

                        <div className='ahm-investmentItem'>
                            <p>Investment adad asdasd asdas jghghj hfjfhf 1</p>
                            <p>$1000</p>
                            <p> 01/01/2024</p>
                            <p> <FaMapMarkerAlt />  Lattakia</p>
                        </div>
                        

                        <div className='ahm-investmentItem'>
                            <p>Investment adad asdasd asdas jghghj hfjfhf 1</p>
                            <p>$1000</p>
                            <p> 01/01/2024</p>
                            <p> <FaMapMarkerAlt />  Lattakia</p>
                        </div>
                        

                        <div className='ahm-investmentItem'>
                            <p>Investment adad asdasd asdas jghghj hfjfhf 1</p>
                            <p>$1000</p>
                            <p> 01/01/2024</p>
                            <p> <FaMapMarkerAlt />  Lattakia</p>
                        </div>
                        

                        <div className='ahm-investmentItem'>
                            <p>Investment adad asdasd asdas jghghj hfjfhf 1</p>
                            <p>$1000</p>
                            <p> 01/01/2024</p>
                            <p> <FaMapMarkerAlt />  Lattakia</p>
                        </div>
                        

                        <div className='ahm-investmentItem'>
                            <p>Investment adad asdasd asdas jghghj hfjfhf 1</p>
                            <p>$1000</p>
                            <p> 01/01/2024</p>
                            <p> <FaMapMarkerAlt />  Lattakia</p>
                        </div>
                        

                    </div>
                </div>
            </div>

            <div className='ahm-userDashboard-statistics'>
                <h2 className='ahm-statistics-investmentTitle'>Statistics</h2>
                <hr />
                <h3 style={{margin:'5px 0px 15px'}}>Total investment : $0 </h3>
                <p>Number of investments : 0</p>
                <hr style={{width:'50%' , margin:'25px auto', }} />
                <h4>Locations</h4>
                <div className='ahm-statistics-locationContainer'>
                    <p><FaMapMarkerAlt />  Lattakia </p>
                    <p><FaMapMarkerAlt />  Aleppo</p>
                    <p><FaMapMarkerAlt />  Damascuse</p>
                </div>
            </div>

        </div>
    );
}