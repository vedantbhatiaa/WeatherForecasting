import React, { useState } from 'react'
import "./weatherapp.css"
import search_icon from "../assets/search.png"
import clear from "../assets/clear.png"
import cloudy from "../assets/cloud.png"
import rainy from "../assets/rain.png"
import humidity from "../assets/humidity.png"
import drizzle from "../assets/drizzle.png"
import snow from "../assets/snow.png"
import wind from "../assets/wind.png"
import bgImg from "../assets/bg.jpg"
const WeatherApp = () => {
  let api_key="2b8c86b4f42d52e15bbf0dfd2257655b";
  const [icon,setIcon]= useState(cloudy)

  const search=async()=>{
    const element = document.getElementsByClassName("cityInput")
    if(element[0].value==="")
    {
      return 0
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity");
    const wind = document.getElementsByClassName("wind");
    const temp = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location")

    humidity[0].innerHTML = data.main.humidity+"%";
    wind[0].innerHTML= data.wind.speed+" km/h";
    temp[0].innerHTML = data.main.temp+"°C";
    location[0].innerHTML = data.name;

    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
    {
      setIcon(clear)
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
    {
      setIcon(cloudy)
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
    {
      setIcon(drizzle)
    }
    else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
    {
      setIcon(drizzle)
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
    {
      setIcon(rainy)
    }
    else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
    {
      setIcon(rainy)
    }
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
    {
      setIcon(snow)
    }
    else{
      setIcon(clear)
    }
  }
  return (
    <div className="main" style={{backgroundImage:`url(${bgImg})`}}>
      
      <div className="container">
        <div className="topbar">
          <input type="text" className="cityInput" placeholder='Search'/>
          <div className="search_icon" onClick={()=>{search()}}>
            <img src={search_icon} alt="" className='searchIcon' />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="topweather">
              <div className="weatherImg">
                <img src={icon} alt="" />
              </div>
              <div className="weather-temp">
                24 C
              </div>
            </div>
            <div className="weather-location">
              Mumbai
            </div>
          </div>
          <div className="col">
            <div className="data-container">
              <div className="element">
                <img src={humidity} alt="" className='icon' />
                <div className="data">
                  <div className="humidity">
                    64%
                  </div>
                  <div className="text">Humidity</div>
                </div>
              </div>
              <div className="element">
                <img src={wind} alt="" className='icon' />
                <div className="data">
                  <div className="wind">
                    18km/h
                  </div>
                  <div className="text">Wind Speed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    
    
  )
}
export default WeatherApp
