import React,{useState} from 'react';
import { FaChevronLeft, FaSearch,FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import GoldenBeachImage from '../../../../public/IMG-homePage/Golden Beach Resort.png'
import { useNavigate } from 'react-router-dom'

import './viewAllInvestments.css'
import '../investmentOpportunities.css'

export default function viewAllInvestments(){
    const navigate = useNavigate();
    const [SearchValue, setSearchValue] = useState({
        location:'',
        money:'',
    })


    const SearchForm=()=>{
        return(
            <div className='ahm-formContainerVeiwAll'>
                <select onChange={(e)=>setSearchValue({...SearchValue, location:e.target.value})} className='ahm-selectLocation text-gray-500'>
                    <option value=''>select Location</option>
                    <option value='lattakia'>Lattakia</option>
                    <option value='aleppo'>Aleppo</option>
                    <option value='damascuse'>Damascuse</option>
                </select> <br/>
                <input onChange={e=>setSearchValue({...SearchValue, money:e.target.value})} className='ahm-input text-gray-500' placeholder='money...' />
                <div className='ahm-containerSearchIcon'> <FaSearch className='ahm-searchIcon'/> </div>
            </div>
        );
    }

    const InvestmentOpportunitesList =()=>{
        return(
            <div className='ahm-InvestmentOpportunitesList '>

                
                <div className='ahm-card w-[32%] h-full rounded-xl shadow-xl'> 
                    <img src={GoldenBeachImage} alt='invest img' className='ahm-imageCard  '/> 
                    <div className=' ahm-infoCard '>
                        <h3 className='text-xl '>Golden Beach Resort</h3>
                        <p className='text-gray-500'>18%</p>
                    </div>
                    <p className='ahm-investLocation text-gray-500'> <FaMapMarkerAlt /> Location</p>
                    <div className='ahm-progress text-gray-700'>
                        <p>Progress</p>
                        <p>75%</p>
                    </div>
                    <div className='ahm-progressPercent'>
                        <p className='ahm-progressPercent2'></p>
                    </div>
                    <hr className='ahm-line text-gray-500 '/>
                    <div className='ahm-costContainer'>
                        <p className=' text-2xl font-bold'>2500 $</p>
                        <p className='ahm-detailsBtn text-gray-500 flex items-center gap-3 '>Details <FaChevronRight /> </p>
                    </div>
                </div>
                
                <div className='ahm-card w-[32%] h-full rounded-xl shadow-xl'> 
                    <img src={GoldenBeachImage} alt='invest img' className='ahm-imageCard  '/> 
                    <div className=' ahm-infoCard '>
                        <h3 className='text-xl '>Golden Beach Resort</h3>
                        <p className='text-gray-500'>18%</p>
                    </div>
                    <p className='ahm-investLocation text-gray-500'> <FaMapMarkerAlt /> Location</p>
                    <div className='ahm-progress text-gray-700'>
                        <p>Progress</p>
                        <p>75%</p>
                    </div>
                    <div className='ahm-progressPercent'>
                        <p className='ahm-progressPercent2'></p>
                    </div>
                    <hr className='ahm-line text-gray-500 '/>
                    <div className='ahm-costContainer'>
                        <p className=' text-2xl font-bold'>2500 $</p>
                        <p className='ahm-detailsBtn text-gray-500 flex items-center gap-3 '>Details <FaChevronRight /> </p>
                    </div>
                </div>
                
                <div className='ahm-card w-[32%] h-full rounded-xl shadow-xl'> 
                    <img src={GoldenBeachImage} alt='invest img' className='ahm-imageCard  '/> 
                    <div className=' ahm-infoCard '>
                        <h3 className='text-xl '>Golden Beach Resort</h3>
                        <p className='text-gray-500'>18%</p>
                    </div>
                    <p className='ahm-investLocation text-gray-500'> <FaMapMarkerAlt /> Location</p>
                    <div className='ahm-progress text-gray-700'>
                        <p>Progress</p>
                        <p>75%</p>
                    </div>
                    <div className='ahm-progressPercent'>
                        <p className='ahm-progressPercent2'></p>
                    </div>
                    <hr className='ahm-line text-gray-500 '/>
                    <div className='ahm-costContainer'>
                        <p className=' text-2xl font-bold'>2500 $</p>
                        <p className='ahm-detailsBtn text-gray-500 flex items-center gap-3 '>Details <FaChevronRight /> </p>
                    </div>
                </div>
                
                <div className='ahm-card w-[32%] h-full rounded-xl shadow-xl'> 
                    <img src={GoldenBeachImage} alt='invest img' className='ahm-imageCard  '/> 
                    <div className=' ahm-infoCard '>
                        <h3 className='text-xl '>Golden Beach Resort</h3>
                        <p className='text-gray-500'>18%</p>
                    </div>
                    <p className='ahm-investLocation text-gray-500'> <FaMapMarkerAlt /> Location</p>
                    <div className='ahm-progress text-gray-700'>
                        <p>Progress</p>
                        <p>75%</p>
                    </div>
                    <div className='ahm-progressPercent'>
                        <p className='ahm-progressPercent2'></p>
                    </div>
                    <hr className='ahm-line text-gray-500 '/>
                    <div className='ahm-costContainer'>
                        <p className=' text-2xl font-bold'>2500 $</p>
                        <p className='ahm-detailsBtn text-gray-500 flex items-center gap-3 '>Details <FaChevronRight /> </p>
                    </div>
                </div>

            </div>
        );
    }

    return (
        <div className="ahm-veiwAllInvestment  ">
            <div className="ahm-header text-center flex items-center h-[50px] ">
                <FaChevronLeft onClick={()=>navigate(-1)} className='hover:text-gray-500 cursor-pointer' />
                <p  className='line-1.3 text-[32px] font-700 w-full '>All Investment Opportunties</p>
            </div>
            <hr className='ahm-lineInViewAll'/>
            {SearchForm()}
            {InvestmentOpportunitesList()}
        </div>
    )
}