import {useEffect,useState} from 'react';
import { FaChevronLeft, FaSearch,FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import GoldenBeachImage from '/IMG-homePage/Golden Beach Resort.png'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

import './viewAllInvestments.css'
import '../investments/investmentOpportunities.css'
import axios from 'axios';



export default function viewAllInvestments(){
    const [data, setData] = useState([]);

    const [searchData, setSearchData] = useState(null)

    const location = useLocation();
    const navigate = useNavigate();
    

    useEffect(()=>{
        const getData = async()=>{
            const response = 
                await axios.get('https://zoological-flow-production-40af.up.railway.app/api/investments');
            setData(response.data);
            console.log(response.data)
        }
        getData();
        const formData = location.state?.formData || null;
        setSearchData(formData);
        
    },[])


    
    const [SearchValue, setSearchValue] = useState({
        location:'',
        money:'',
    })

    const searchHandler = ()=>{
        // const filteredData = data.filter(item => {
        //     const locationMatch = SearchValue.location ? item.location.toLowerCase().includes(SearchValue.location.toLowerCase()) : true;
        //     const moneyMatch = SearchValue.money ? item.money <= parseFloat(SearchValue.money) : true;
        //     return locationMatch && moneyMatch;
        // });
        // setSearchData(filteredData);
    }

    const SearchForm=()=>{
        return(
            <div className='ahm-formContainerVeiwAll'>
                <div className='ahm-searchContainer '>
                    <input onChange={e=>setSearchValue({...SearchValue, money:e.target.value})} className='ahm-input ' placeholder='money...' />
                    <div onClick={ searchHandler} className='ahm-containerSearchIcon'> <FaSearch className='ahm-searchIcon'/> </div>
                </div>
                <select onChange={(e)=>setSearchValue({...SearchValue, location:e.target.value})} className='ahm-selectLocation '>
                    <option value=''>select Location</option>
                    <option value='lattakia'>Lattakia</option>
                    <option value='aleppo'>Aleppo</option>
                    <option value='damascuse'>Damascuse</option>
                </select> <br/>
                
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
                    
                        <p className=' ahm-investmentCost'>2500 $</p>
                        
                        <button  className='ahm-buyBTN'>
                            Buy
                        </button>
                    
                </div>
                
                
                
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
                    
                        <p className=' ahm-investmentCost'>2500 $</p>
                        
                        <button  className='ahm-buyBTN'>
                            Buy
                        </button>
                    
                </div>
                
                
                
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
                    
                        <p className=' ahm-investmentCost'>2500 $</p>
                        
                        <button  className='ahm-buyBTN'>
                            Buy
                        </button>
                    
                </div>
                
                
                
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
                    
                        <p className=' ahm-investmentCost'>2500 $</p>
                        
                        <button  className='ahm-buyBTN'>
                            Buy
                        </button>
                    
                </div>
                
                
                
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
                    
                        <p className=' ahm-investmentCost'>2500 $</p>
                        
                        <button  className='ahm-buyBTN'>
                            Buy
                        </button>
                    
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
            { searchData == null ? SearchForm():''}
            {InvestmentOpportunitesList()}
        </div>
    )
}