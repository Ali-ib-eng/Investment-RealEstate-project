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
    const [isSearching, setIsSearching] = useState(false);
    const [isInnerSearching, setIsInnerSearching]= useState(false)

    const [dataAfterFilter, setDataAfterFilter] = useState([]);
    const [dataAfterSearch, setDataAfterSearch] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();
    

    useEffect(()=>{
        try{
            const getData = async()=>{
                const response = 
                    await axios.get('https://zoological-flow-production-40af.up.railway.app/api/projects');
                setData(response.data.data);
                console.log(response.data.data);

                const formData= location.state?.formData
                formData === undefined ? null : setIsSearching(true)
                if(formData !== undefined){
                    const filteredData = response.data.data.filter(item => {
                        const locationTest = item.location.toLowerCase() === formData.location.toLowerCase();
                        const moneyTest = parseFloat( item.total_budget ) <= parseFloat(formData.budget)
                        return locationTest && moneyTest;
                        // return item.location.toLowerCase() === (formData).location.toLowerCase();
                    })
                    setDataAfterFilter(filteredData)
                }
            }
            getData();

        }catch(error){
            console.log(error)
        }

    },[])


    
    const [SearchValue, setSearchValue] = useState({
        location:'',
        money:'',
    })
////////////////////////////////////////////////////////////////////////////////////////////////////
    const searchHandler = ()=>{
        if( SearchValue.location === '' && SearchValue.money === '' ){
            alert('please enter location or money');
        }
        else {
            console.log(data)
            console.log(SearchValue)
            const filteredData = data.filter(item => {
                const locationTest = item.location.toLowerCase() === SearchValue.location.toLowerCase();
                const moneyTest = parseFloat( item.total_budget ) <= parseFloat(SearchValue.money)
                return locationTest && moneyTest;
            })
            console.log(filteredData);

            return(
                <div className='ahm-InvestmentOpportunitesList '>
    
                    {
                        filteredData.length>0 && filteredData.map((investment)=>(
                            <div className='ahm-card ' key={investment.id}> 
                                {/* <img src={investment.image} alt='invest img' className='ahm-imageCard  '/>  */}
                                <div className=' ahm-infoCard '>
                                    <h3 className='ah-h3-card'>{investment.name}</h3>
                                </div>
                                <p className='ahm-investLocation '> <FaMapMarkerAlt /> {investment.location}</p>
                                
                                <hr className='ahm-line  '/>
                                
                                    <p className=' ahm-investmentCost'>{investment.total_budget} $</p>
                                    
                                    <button  className='ahm-buyBTN'>
                                        Buy
                                    </button>
                                
                            </div>
                        ))
                    }
                    
                    </div>
            );
        }
    }


    const SearchForm=()=>{
        return(
            <div className='ahm-formContainerVeiwAll'>
                <div className='ahm-searchContainer '>
                    <input onChange={e=>setSearchValue({...SearchValue, money:e.target.value})} className='ahm-input ' placeholder='money...' />
                    <div onClick={()=> (searchHandler, setIsInnerSearching(true)) } className='ahm-containerSearchIcon'> <FaSearch className='ahm-searchIcon'/> </div>
                </div>
                <select onChange={(e)=>setSearchValue({...SearchValue, location:e.target.value})} className='ahm-selectLocation '>
                    <option value=''>select Location</option>
                    <option value='lattakia'>Lattakia</option>
                    <option value='aleppo'>Aleppo</option>
                    <option value='damascus'>Damascus</option>
                </select> <br/>
                
            </div>
        );
    }

    const InvestmentOpportunitesList =()=>{
        return(
            <div className='ahm-InvestmentOpportunitesList '>

                {
                    data.length>0 && data.map((investment)=>(
                        <div className='ahm-card ' key={investment.id}> 
                            {/* <img src={investment.image} alt='invest img' className='ahm-imageCard  '/>  */}
                            <div className=' ahm-infoCard '>
                                <h3 className='ah-h3-card'>{investment.name}</h3>
                            </div>
                            <p className='ahm-investLocation '> <FaMapMarkerAlt /> {investment.location}</p>
                            
                            <hr className='ahm-line  '/>
                            
                                <p className=' ahm-investmentCost'>{investment.total_budget} $</p>
                                
                                <button  className='ahm-buyBTN'>
                                    Buy
                                </button>
                            
                        </div>
                    ))
                }
                
                </div>
        );
    }

    const filteredData = ()=>{
        return(
            <div className='ahm-InvestmentOpportunitesList '>

                {
                    dataAfterFilter.length>0 && dataAfterFilter.map((investment)=>(
                        <div className='ahm-card ' key={investment.id}> 
                            {/* <img src={investment.image} alt='invest img' className='ahm-imageCard  '/>  */}
                            <div className=' ahm-infoCard '>
                                <h3 className='ah-h3-card'>{investment.name}</h3>
                            </div>
                            <p className='ahm-investLocation '> <FaMapMarkerAlt /> {investment.location}</p>
                            
                            <hr className='ahm-line  '/>
                            
                                <p className=' ahm-investmentCost'>{investment.total_budget} $</p>
                                
                                <button  className='ahm-buyBTN'>
                                    Buy
                                </button>
                            
                        </div>
                    ))
                }
                
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
            {isSearching == true ?  filteredData():'' }
            {isInnerSearching == true ? searchHandler():''}
            {isInnerSearching == false && isSearching == false ? InvestmentOpportunitesList():''}
        </div>
    )
}