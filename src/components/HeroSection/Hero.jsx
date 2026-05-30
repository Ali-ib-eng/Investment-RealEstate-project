import {useEffect, useState } from "react"
import "./Hero.css"
import { FaSearch} from "react-icons/fa";
const Hero = ({title,paragraph,searchBtn}) => {
    const [form,setForm]=useState({
        location:"",
        type:"",
        budget:""
    })
    const [error,setError]=useState("");
    //console.log(form.type)
    const handleChange=(e)=>{
        const {name,value}=e.target;
        if(name=="budget"&&value<0){
            setError("value is negative");
        }else{setError("")}
  setForm({
    ...form,
    [name]:value
  });
};
const handleSearch=()=>{
    console.log(form);
    setForm({
        location:"",
        type:"",
        budget:""
    })
}
useEffect(()=>{
    if(error){
        const timer=setTimeout(()=>{
            setError("")
        },2000)
    return()=>clearTimeout(timer)
}
},[error])
  return (
    <>
    {error&&<p className="errorMessage">{error}</p>}
        <div className="Ali-hero-container">
            <div className="Ali-bg-groundImg">
                <div className="Ali-hero-content">
                    <h1 className="Ali-h1-hero">{title}</h1>
                    <p className="Ali-p-hero">{paragraph}</p>
                    <div className="Ali-inputFileds">
                        <div className="Ali-location">
                            <label className="Ali-label" htmlFor="location">Location</label>
                        <select className="Ali-selectKind" name="location" id="location"
                        value={form.location}
                        onChange={handleChange}
                        >
                        <option value="">Select a country</option>   
                        <option value="Damascus">Damascus</option>
                        <option value="Aleppo">Aleppo</option>
                        <option value="Lattakia">Lattakia</option>
                        <option value="Homs">Homs</option>
                    </select>
                        </div>
                        <div className="Ali-PropertyType">
                            <label className="Ali-label" htmlFor="type">Property Type</label>
                        <select className="Ali-selectKind" name="type" id="type"
                        value={form.type}
                        onChange={handleChange}
                        >
                            <option value="">Choose Type</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Residential">Residential</option>
                        <option value="Development">Development</option>
                    </select>
                        </div>
                        <div className="Ali-InvestmentBudget">
                            <label className="Ali-label" htmlFor="budget">Investment Budget</label>
                        <input className="Ali-inputPrice" type="number" name="budget" id="budget"
                        value={form.budget}
                        onChange={handleChange}
                        placeholder="$10,000 - $50,000" />
                        </div>
                    </div>
                    <button onClick={handleSearch} className="Ali-search-btn">
                        {searchBtn}
                        <div className="Ali-searchbtnreactIcon"><FaSearch /></div>
                        </button>
                </div>
            </div>
            
            </div>
    </>
)
}
export default Hero
