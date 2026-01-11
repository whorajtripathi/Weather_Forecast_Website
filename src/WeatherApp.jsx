import { SearchBox } from "./SearchBox";
import { InfoBox } from "./InfoBox";
import "./WeatherApp.css"
import { useState } from "react";

export function WeatherApp(){

    let[weatherInfo,SetWeatherInfo]=useState({
         city:"Pune",
        description: "clear sky",
        humidity: 26,
        pressure: 1019,
        sea_level: 1019,
        temp: 17.8,
        temp_max: 17.8,
        temp_min: 17.8
    })

    let updateInfo=(result)=>{
        SetWeatherInfo(result);
    }

    return(

        <div>
            <h1 style={{textAlign:"center"}}>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}