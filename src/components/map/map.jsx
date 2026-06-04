

import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaSearch } from "react-icons/fa";
import "./map.css";

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center, 15);
  return null;
}

export default function MapSearch() {
  const [address, setAddress] = useState("");
  const [position, setPosition] = useState([33.5138, 36.2765]);

  const searchAddress = async () => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        address
      )}`
    );

    const data = await response.json();

    if (data.length > 0) {
      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);

      setPosition([lat, lon]);
    } else {
      alert("العنوان غير موجود");
    }
  };

  return (
    <div style={{ width: "full", height: "100%" }}>
      <div className="ahm-mapSearchContainer" >
        <input
          
          type="text"
          placeholder="أدخل العنوان"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <div className="ahm-searchBtnContainer">
          <FaSearch className="ahm-searchBtn" onClick={searchAddress}/>
        </div>
      </div>

      <MapContainer
        center={position}
        zoom={15}
        style={{ width: "full", height: "88%", borderRadius:'10px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} />

        <ChangeView center={position} />
      </MapContainer>
    </div>
  );
}