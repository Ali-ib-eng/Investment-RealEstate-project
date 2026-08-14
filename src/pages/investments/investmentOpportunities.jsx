import { useState,useEffect } from 'react'
import {FaArrowRight, FaMapMarkerAlt,FaArrowCircleLeft, FaArrowCircleRight  } from 'react-icons/fa'

import {useNavigate} from 'react-router-dom'
import './investmentOpportunities.css'
import GetStartGuide from '../getStartGuide/getStartGuide'
import InteractiveMap from '../interactiveMap/interactiveMap'
import AboutPartners from '../aboutPartners/aboutPartners'

import axios from 'axios'
import Loadinginvsetments from '../viewAllInvestments/Loadingfor_invsetments/Loadinginvsetments'

export default function InvestmentOpportunites (){
    const navigate = useNavigate();
    

    const [investmentsData, setInvestmentsData] = useState([]);
    const [counterForIvestCard, setCounterForIvestCard] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{

        const fetchData = async () => {
            setLoading(true);
            try{
                const response =await axios.get('https://zoological-flow-production-40af.up.railway.app/api/projects');
                setInvestmentsData(response.data.data);
                console.log(response.data.data)
            }catch(error){
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
            
        }
        fetchData();
    },[])

    const investCard = ()=>{
        return (
            <div className='ahm-investCard '>
                {loading&& <Loadinginvsetments/>}
                {
                    investmentsData.length>0 && 
                    investmentsData.map((investment)=>(
                        investmentsData.indexOf(investment)<3 &&
                        <div className='ahm-card ' key={investment.id}> 
                            <img src={investment.image} alt='invest img' className='ahm-imageCard  '/> 
                            <div className=' ahm-infoCard '>
                                <h3 className='ah-h3-card'>{investment.name}</h3>
                            </div>
                            <p className='ahm-investLocation '> <FaMapMarkerAlt /> {investment.location}</p>
                            
                            <hr className='ahm-line  '/>
                            
                                <p className=' ahm-investmentCost'>{investment.total_budget} $</p>
                                
                                <button  className='ahm-buyBTN' onClick={()=>navigate('/formForInverstorData',{state:{id:investment.id}})}>
                                    
                                        Buy
                                    
                                </button>
                            
                        </div>
                    ))
                }
                
            </div>
        );
    }

    const investCardForMobile =()=>{
        return(
            <>
            {
                investmentsData.length>0 && 
                <div className='ahm-investCardForMobile'>
                <div className='ahm-card  '> 
                    <img src={investmentsData[counterForIvestCard].image} alt='invest img' className='ahm-imageCard  '/> 
                    <div className=' ahm-infoCard '>
                        <h3 className=' '>{investmentsData[counterForIvestCard].name}</h3>
                    </div>
                    <p className='ahm-investLocation'> <FaMapMarkerAlt /> {investmentsData[counterForIvestCard].location}</p>
                    
                    <hr className='ahm-line '/>
                    
                        <p className='ahm-investmentCost  '>{investmentsData[counterForIvestCard].total_budget}$</p>
                        <button  className='ahm-buyBTN' onClick={()=>navigate('/formForInverstorData',{state:{id:investment.id}})}>
                            
                                Buy
                            
                        </button>
                    
                </div>

                <hr />
                <div className='ahm-arrowContainer'>
                    <FaArrowCircleLeft className='ahm-arrows' onClick={()=>( counterForIvestCard===0 ? setCounterForIvestCard(2 || investmentsData.length-1): setCounterForIvestCard(counterForIvestCard-1) )} />
                    <FaArrowCircleRight className='ahm-arrows' onClick={()=>( counterForIvestCard===2|| counterForIvestCard===investmentsData.length-1 ? setCounterForIvestCard(0): setCounterForIvestCard(counterForIvestCard +1) )} />
                </div>
            </div>
            }
            </>
        );
    }

    return (
        <>
            <div className="ahm-investmentsopportunties">
                <h2 className='ahm-h2 '>Investment Opportunities</h2>
                <div className='ahm-description'>
                    <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam in id voluptatibus impedit.</p>
                    <button onClick={()=>navigate('/viewAllInvestments')} className='ahm-veiwAll'>View All <FaArrowRight /></button> 
                </div>
                {investCard()}
                {investCardForMobile()}
            </div>
            <GetStartGuide />
            <InteractiveMap />
            <AboutPartners />
        </>
    );
}