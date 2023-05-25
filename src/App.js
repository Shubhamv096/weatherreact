import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import icon from "./weather.png";
import {apikey , apiUrl} from "./components/constants"
import CurrentDate from "./components/CurrentDate";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});

  const apicall = (city) => {
    if (!city) return;
    axios.get(`${apiUrl}weather?q=${city}&appid=${apikey}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log('Error- Something went wrong', err));
  };
  useEffect(() => {
    apicall("allahabad");
  }, []);

  function handleClick() {
    apicall(city);
  }
  return (
    <div className="box-container">
      <div className="weatherBg">
        <h1 className="heading">
          Welcome to <span className="span">Weather App</span>
        </h1>
        <div className="search-box">
          <input className="input-box" type="text" placeholder="enter city..." value={city} onChange={(e) => {setCity(e.target.value);}}/>
          <button className="btn btn-primary" type="submit" onClick={(e) => handleClick(e)}>
            {" "}
            Search{" "}
          </button>
        </div>

        <div className="temp-content">
          <div className="temp-image">
            <img src={icon} alt="W-icon" className="w-icon" />
            <span className="w-description">
              {data?.weather?.[0]?.description}
            </span>
          </div>

          <div className="temp-detail">
            <div className="date"><CurrentDate/></div>
            <span className="w-city">{data?.name} </span>
            <span className="w-temp">
              {(data?.main?.temp - 273.15).toFixed(2)} °C
            </span>
          </div>
        </div>

        <div className="bottom-content">
          <div className="inside-bottom">
            <div>
              <h3>Wind Speed -</h3>
              <span> {data?.wind?.speed} km/h </span>
            </div>
            <div>
              <h3>Pressure -</h3>
              <span> {data?.main?.pressure} hpa </span>
            </div>
            <div>
              <h3> Humidity -</h3>
              <span> {data?.main?.humidity} % </span>
            </div>
            <div>
              <h3>Max Temp -</h3>
              <span> {(data?.main?.temp_max - 273.15).toFixed(2)} °C</span>
            </div>
            <div>
              <h3>Min Temp -</h3>
              <span> {(data?.main?.temp_min - 273.15).toFixed(2)} °C</span>
            </div>
          </div> 
        </div>

      </div>
    </div>
  );
}

export default App;
