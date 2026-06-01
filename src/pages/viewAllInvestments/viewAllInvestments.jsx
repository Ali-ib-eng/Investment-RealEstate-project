import {useState} from 'react';
import { FaChevronLeft, FaSearch,FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import GoldenBeachImage from '/IMG-homePage/Golden Beach Resort.png'
import { useNavigate } from 'react-router-dom'

import './viewAllInvestments.css'
import '../investments/investmentOpportunities.css'

export default function viewAllInvestments(){
    const navigate = useNavigate();
    const [SearchValue, setSearchValue] = useState({
        location:'',
        money:'',
    })


    const SearchForm=()=>{
        return(
            <div className='ahm-formContainerVeiwAll'>
                <select onChange={(e)=>setSearchValue({...SearchValue, location:e.target.value})} className='ahm-selectLocation '>
                    <option value=''>select Location</option>
                    <option value='lattakia'>Lattakia</option>
                    <option value='aleppo'>Aleppo</option>
                    <option value='damascuse'>Damascuse</option>
                </select> <br/>
                <input onChange={e=>setSearchValue({...SearchValue, money:e.target.value})} className='ahm-input ' placeholder='money...' />
                <div className='ahm-containerSearchIcon'> <FaSearch className='ahm-searchIcon'/> </div>
            </div>
        );
    }

    const InvestmentOpportunitesList =()=>{
        return(
            <div className='ahm-InvestmentOpportunitesList '>

                
                <div className='ahm-card '> 
                    <img src={GoldenBeachImage} alt='invest img' className='ahm-imageCard  '/> 
                    <div className=' ahm-infoCard '>
                        <h3 className='ah-h3-card'>Golden Beach Resort</h3>
                        <p className=''>18%</p>
                    </div>
                    <p className='ahm-investLocation '> <FaMapMarkerAlt /> Location</p>
                    <div className='ahm-progress '>
                        <p>Progress</p>
                        <p>75%</p>
                    </div>
                    <div className='ahm-progressPercent'>
                        <p className='ahm-progressPercent2'></p>
                    </div>
                    <hr className='ahm-line  '/>
                    <div className='ahm-costContainer'>
                        <p className=' ahm-investmentCost'>2500 $</p>
                        <p className='ahm-detailsBtn  '>Details <FaChevronRight /> </p>
                    </div>
                </div>
                
                
                <div className='ahm-card '> 
                    <img src={GoldenBeachImage} alt='invest img' className='ahm-imageCard  '/> 
                    <div className=' ahm-infoCard '>
                        <h3 className=''>Golden Beach Resort</h3>
                        <p className=''>18%</p>
                    </div>
                    <p className='ahm-investLocation '> <FaMapMarkerAlt /> Location</p>
                    <div className='ahm-progress '>
                        <p>Progress</p>
                        <p>75%</p>
                    </div>
                    <div className='ahm-progressPercent'>
                        <p className='ahm-progressPercent2'></p>
                    </div>
                    <hr className='ahm-line  '/>
                    <div className='ahm-costContainer'>
                        <p className=' ahm-investmentCost'>2500 $</p>
                        <p className='ahm-detailsBtn  '>Details <FaChevronRight /> </p>
                    </div>
                </div>
                
                
                <div className='ahm-card '> 
                    <img src={GoldenBeachImage} alt='invest img' className='ahm-imageCard  '/> 
                    <div className=' ahm-infoCard '>
                        <h3 className=''>Golden Beach Resort</h3>
                        <p className=''>18%</p>
                    </div>
                    <p className='ahm-investLocation '> <FaMapMarkerAlt /> Location</p>
                    <div className='ahm-progress '>
                        <p>Progress</p>
                        <p>75%</p>
                    </div>
                    <div className='ahm-progressPercent'>
                        <p className='ahm-progressPercent2'></p>
                    </div>
                    <hr className='ahm-line  '/>
                    <div className='ahm-costContainer'>
                        <p className=' ahm-investmentCost'>2500 $</p>
                        <p className='ahm-detailsBtn  '>Details <FaChevronRight /> </p>
                    </div>
                </div>
                
                
                <div className='ahm-card '> 
                    <img src={GoldenBeachImage} alt='invest img' className='ahm-imageCard  '/> 
                    <div className=' ahm-infoCard '>
                        <h3 className=''>Golden Beach Resort</h3>
                        <p className=''>18%</p>
                    </div>
                    <p className='ahm-investLocation '> <FaMapMarkerAlt /> Location</p>
                    <div className='ahm-progress '>
                        <p>Progress</p>
                        <p>75%</p>
                    </div>
                    <div className='ahm-progressPercent'>
                        <p className='ahm-progressPercent2'></p>
                    </div>
                    <hr className='ahm-line  '/>
                    <div className='ahm-costContainer'>
                        <p className=' ahm-investmentCost'>2500 $</p>
                        <p className='ahm-detailsBtn  '>Details <FaChevronRight /> </p>
                    </div>
                </div>
                

            </div>
        );
    }

    return (
        <div className="ahm-veiwAllInvestment  ">
            <div className="ahm-header  ">
                <FaChevronLeft onClick={()=>navigate(-1)} className='ahm-headerIcon' />
                <p  className=''>All Investment Opportunties</p>
            </div>
            <hr className='ahm-lineInViewAll'/>
            {SearchForm()}
            {InvestmentOpportunitesList()}
        </div>
    )
}