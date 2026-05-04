import { useState } from 'react'
import {FaArrowRight, FaMapMarkerAlt, FaChevronRight, FaArrowCircleLeft, FaArrowCircleRight  } from 'react-icons/fa'
import GoldenBeachImage from '../../../public/IMG-homePage/Golden Beach Resort.png'
import CentralBusinessTower from '../../../public/IMG-homePage/CentralBusinessTower.png'
import JasmineResidentialComplex from '../../../public/IMG-homePage/JasmineResidentialComplex.png'
import {useNavigate} from 'react-router-dom'
import './investmentOpportunities.css'
import GetStartGuide from '../getStartGuide/getStartGuide'
import InteractiveMap from '../interactiveMap/interactiveMap'
import AboutPartners from '../aboutPartners/aboutPartners'

export default function InvestmentOpportunites (){
    const navigate = useNavigate();

    const [investmentsData, setInvestmentsData] = useState([
        {
            image:GoldenBeachImage,
            title: "Golden Beach Resort",
            parcent:'25%',
            progress:'75%',
            cost:2500,
            location:'Lattakia'
        },
        {
            image:CentralBusinessTower,
            title: "Central Business Tower",
            parcent:'13%',
            progress:'75%',
            cost:2300,
            location:'Aleppo'
        },
        {
            image:JasmineResidentialComplex,
            title: "Jasmine Residential Complex",
            parcent:'53%',
            progress:'75%',
            cost:5500,
            location:'Damascuse'
        },
    ])
    const [counterForIvestCard, setCounterForIvestCard] = useState(0)

    const investCard = ()=>{
        return (
            <div className='ahm-investCard '>
                {
                    investmentsData.length>0 && 
                    investmentsData.map((investment,index)=>(
                        <div key={index} className='ahm-card w-[32%] h-full rounded-xl shadow-xl '> 
                            <img src={investment.image} alt='invest img' className='ahm-imageCard  '/> 
                            <div className=' ahm-infoCard '>
                                <h3 className='text-xl '>{investment.title}</h3>
                                <p className='text-gray-500'>{investment.parcent}</p>
                            </div>
                            <p className='ahm-investLocation text-gray-500'> <FaMapMarkerAlt /> {investment.location}</p>
                            <div className='ahm-progress text-gray-700'>
                                <p>Progress</p>
                                <p>{investment.progress}</p>
                            </div>
                            <div className='ahm-progressPercent'>
                                <p  className={`ahm-progressPercent2 `}></p>
                            </div>
                            <hr className='ahm-line text-gray-500 '/>
                            <div className='ahm-costContainer'>
                                <p className=' text-2xl font-bold'>{investment.cost}$</p>
                                <p className='ahm-detailsBtn text-gray-500 flex items-center gap-3 '>Details <FaChevronRight /> </p>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        );
    }

    const investCardForMobile =()=>{
        return(
            <div className='ahm-investCardForMobile'>

                <div className='ahm-card w-[32%] h-full rounded-xl shadow-xl '> 
                    <img src={investmentsData[counterForIvestCard].image} alt='invest img' className='ahm-imageCard  '/> 
                    <div className=' ahm-infoCard '>
                        <h3 className='text-xl '>{investmentsData[counterForIvestCard].title}</h3>
                        <p className='text-gray-500'>{investmentsData[counterForIvestCard].parcent}</p>
                    </div>
                    <p className='ahm-investLocation text-gray-500'> <FaMapMarkerAlt /> {investmentsData[counterForIvestCard].location}</p>
                    <div className='ahm-progress text-gray-700'>
                        <p>Progress</p>
                        <p>{investmentsData[counterForIvestCard].progress}</p>
                    </div>
                    <div className='ahm-progressPercent'>
                        <p  className={`ahm-progressPercent2 `}></p>
                    </div>
                    <hr className='ahm-line text-gray-500 '/>
                    <div className='ahm-costContainer'>
                        <p className=' text-2xl font-bold'>{investmentsData[counterForIvestCard].cost}$</p>
                        <p className='ahm-detailsBtn text-gray-500 flex items-center gap-3 '>Details <FaChevronRight /> </p>
                    </div>
                </div>

                <hr />
                <div className='ahm-arrowContainer'>
                    <FaArrowCircleLeft className='ahm-arrows' onClick={()=>( counterForIvestCard===0 ? setCounterForIvestCard(investmentsData.length-1): setCounterForIvestCard(counterForIvestCard-1) )} />
                    <FaArrowCircleRight className='ahm-arrows' onClick={()=>( counterForIvestCard===investmentsData.length-1 ? setCounterForIvestCard(0): setCounterForIvestCard(counterForIvestCard +1) )} />
                </div>
            </div>
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