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

    const [dataAfterFilter, setDataAfterFilter] = useState([]);

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
                const filteredData = response.data.data.filter(item => {
                    const locationTest = item.location.toLowerCase() === formData.location.toLowerCase();
                    const moneyTest = parseFloat( item.total_budget ) <= parseFloat(formData.budget)
                    return locationTest && moneyTest;
                    // return item.location.toLowerCase() === (formData).location.toLowerCase();
                })
                setDataAfterFilter(filteredData)
            }
            getData();
            
            // const formData= location.state?.formData
            // setSearchData(formData);
            // (location.state?.formData) === undefined ? null: filteringData();
        }catch(error){
            console.log(error)
        }

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

    // const filteringData =()=>{
    //     const filteredData = data.filter(item => {
    //         // const locationTest = item.location.toLowerCase() === searchData.location.toLowerCase();
    //         // const moneyTest = parseFloat( item.total_budget ) <= parseFloat(searchData.budget)
    //         // return locationTest && moneyTest;
    //         return item.location.toLowerCase() === searchData.location.toLowerCase();
    //     })
    //     console.log(filteredData)
    //     setDataAfterFilter(filteredData);
    // }

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
            {isSearching == true ?  filteredData():InvestmentOpportunitesList() }
        </div>
    )
}