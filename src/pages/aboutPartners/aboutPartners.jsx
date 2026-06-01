import partnerImage from '/IMG-homePage/Eng1.png'
import './aboutPartners.css'
import { useNavigate } from 'react-router-dom';

export default function AboutPartners (){
    const navigate = useNavigate();

    const partnersList =()=>{
        return(
            <div className='ahm-partners'>
                <h1 className='ahm-h1'>Trust Our Partners</h1>
                <div className="ahm-partnerCardContainer">

                    <div className="ahm-partnerCard">
                        <div className="ahm-aboutPartner " > <p className="ahm-notation">,,</p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti ipsam alias tenetur suscipit </div>
                        <div className='ahm-imageAndDetailsContainer '>
                            <img className='ahm-partnerImage' src={partnerImage} alt="img" />
                            <div className='ahm-partnerDetails'>
                                <p className='ahm-partnerName'>Name</p>
                                <p className=' ahm-partnerInvestDetail '>title</p>
                            </div>
                        </div>
                    </div>
                    <div className="ahm-partnerCard">
                        <div className="ahm-aboutPartner " > <p className="ahm-notation">,,</p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti ipsam alias tenetur suscipit </div>
                        <div className='ahm-imageAndDetailsContainer '>
                            <img className='ahm-partnerImage' src={partnerImage} alt="img" />
                            <div className='ahm-partnerDetails'>
                                <p className='ahm-partnerName'>Name</p>
                                <p className=' ahm-partnerInvestDetail '>title</p>
                            </div>
                        </div>
                    </div>
                    <div className="ahm-partnerCard">
                        <div className="ahm-aboutPartner " > <p className="ahm-notation">,,</p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti ipsam alias tenetur suscipit </div>
                        <div className='ahm-imageAndDetailsContainer '>
                            <img className='ahm-partnerImage' src={partnerImage} alt="img" />
                            <div className='ahm-partnerDetails'>
                                <p className='ahm-partnerName'>Name</p>
                                <p className=' ahm-partnerInvestDetail '>title</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
    
    const encourageCustomerToBeInvestor =()=>{
        return (
            <div className='ahm-joinPartContainer'>
                <h1 className='ahm-h1'>Be Part Of Reconstruction History</h1>
                <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. A sit in totam architecto dolorem </p>
                <div className='ahm-buttonContainer'>
                    <button onClick={()=>navigate('/getStarted')} className='ahm-registerBtn'>Register as Investor</button>
                    <button className='ahm-contactAdvisorBtn'>Contact Advisor</button>
                </div>
            </div>
        );
    }

    return (
        <>
            {partnersList()}
            {encourageCustomerToBeInvestor()}
        </>
    );
}