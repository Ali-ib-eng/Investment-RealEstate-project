import { useEffect, useState } from "react";
import {FaChevronLeft,FaSearch,FaMapMarkerAlt} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./viewAllInvestments.css";
import "../investments/investmentOpportunities.css";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
function SearchForm({
  searchValue,
  onMoneyChange,
  onLocationChange,
  onSearch,
}) {
  const searchDisabled =
    searchValue.location === "" || searchValue.money === "";
  return (
    <div className="ahm-formContainerVeiwAll">
      <div className="ahm-searchContainer">
        <input
          type="number"
          value={searchValue.money}
          onChange={(e) => onMoneyChange(e.target.value)}
          className="ahm-input"
          placeholder="money..."
        />

        {searchDisabled ? (
          <div style={{
              color: "red",
              opacity: "0.2",
              cursor: "auto",}}
            className="ahm-containerSearchIcon"
          >
            <FaSearch className="ahm-searchIcon" />
          </div>
        ):(
          <div
            onClick={onSearch}
            className="ahm-containerSearchIcon"
          >
            <FaSearch className="ahm-searchIcon" />
          </div>
        )}
      </div>

      <select
        value={searchValue.location}
        onChange={(e) => onLocationChange(e.target.value)}
        className="ahm-selectLocation"
      >
        <option value="">select Location</option>
        <option value="lattakia">Lattakia</option>
        <option value="aleppo">Aleppo</option>
        <option value="damascus">Damascus</option>
      </select>
      <br />
    </div>
  );
}

function InvestmentOpportunitesList({ investments, onBuy }) {
  return (
    <div className="ahm-InvestmentOpportunitesList">
      {investments.map((investment) => (
        <div className="ahm-card" key={investment.id}>
          {/*
          <img
            src={investment.image}
            alt="invest img"
            className="ahm-imageCard"
          />
            */}
          <div className="ahm-infoCard">
            <h3 className="ah-h3-card">
              {investment.name}
            </h3>
          </div>
          <p className="ahm-investLocation">
            <FaMapMarkerAlt />
            {investment.location}
          </p>
          <hr className="ahm-line" />
          <p className="ahm-investmentCost">
            {investment.total_budget} $
          </p>
          <button
            type="button"
            className="ahm-buyBTN"
            onClick={() => onBuy(investment.id)}
          >
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}

export default function ViewAllInvestments() {
  const [data, setData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isInnerSearching, setIsInnerSearching] =useState(false);
  const [dataAfterFilter, setDataAfterFilter] = useState([]);
  const [dataAfterSearch, setDataAfterSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState({
    location: "",
    money: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    //fetch projects form backEnd
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://zoological-flow-production-40af.up.railway.app/api/projects"
        );
        const projects = response.data?.data || [];
        setData(projects);
        console.log(projects);
        const formData = location.state?.formData;
        if (formData !== undefined) {
          setIsSearching(true);

          const filteredData = projects.filter((item) => {
            const locationTest =
              item.location.toLowerCase() ===
              formData.location.toLowerCase();
              const moneyTest =
              parseFloat(item.total_budget) <=
              parseFloat(formData.budget);
            return locationTest && moneyTest;
          });
          setDataAfterFilter(filteredData);
        }else{
          setIsSearching(false);
        }
      } catch (error) {
        console.error(
          "Error while fetching projects:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [location.state]);

  const handleMoneyChange =(money)=>{
    setSearchValue((previousValue)=>({
      ...previousValue,
      money,
    }));
  };
    const handleLocationChange = (selectedLocation) => {
    setSearchValue((previousValue) => ({
      ...previousValue,
      location: selectedLocation,
    }));
  };
  const searchHandler = ()=>{
    if (!searchValue.location||!searchValue.money) {
      return;
    }
    //add filter for items
    const filteredData = data.filter((item) => {
      const locationTest =
        item.location.toLowerCase() ===
        searchValue.location.toLowerCase();
      const moneyTest =
        parseFloat(item.total_budget) <=
        parseFloat(searchValue.money);
      return locationTest && moneyTest;
    });
    setDataAfterSearch(filteredData);
    setIsInnerSearching(true);
  };

  const buyHandler = (investmentId) => {
    navigate("/formForInverstorData", {
      state: {
        id: investmentId,
      },
    });
  };
  let investmentsToDisplay = data;
  if (isSearching) {
    investmentsToDisplay = dataAfterFilter;
  }
  if (isInnerSearching) {
    investmentsToDisplay = dataAfterSearch;
  }
  return (
    <div className="ahm-veiwAllInvestment">
      <div className="ahm-header">
        <FaChevronLeft
          onClick={() => navigate(-1)}
          className="ahm-headerIcon"
        />
        <p>All Investment Opportunties</p>
      </div>
      <hr className="ahm-lineInViewAll" />
      <SearchForm
        searchValue={searchValue}
        onMoneyChange={handleMoneyChange}
        onLocationChange={handleLocationChange}
        onSearch={searchHandler}
      />
      {loading ? (
        <LoadingAnimation />
      ) : (
        <InvestmentOpportunitesList
          investments={investmentsToDisplay}
          onBuy={buyHandler}
        />
      )}
    </div>
  );
}