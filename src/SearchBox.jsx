import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export function SearchBox({updateInfo}){
    let [city,SetCity]=useState("");
    let [error,SetError]=useState(false);


    let API_KEY="bc35641e5c647ac80506ba1242407924";
    let API_URL="https://api.openweathermap.org/data/2.5/weather";

    let getWeatherInfo= async ()=>{
    try{
        
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);

        let result={
            city:city,
            temp:jsonResponse.main.temp,
            temp_max:jsonResponse.main.temp_max,         
            temp_min:jsonResponse.main.temp_min,
            humidity:jsonResponse.main.humidity,
            pressure:jsonResponse.main.pressure,
            sea_level:jsonResponse.main.sea_level,
            description:jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
    }catch(err){
        throw err;
    }
    }

    let handleChange=(evt)=>{
        SetCity(evt.target.value);
    }

    let handleSubmit=async (evt)=>{
        try{
            evt.preventDefault();
            console.log(city);
            SetCity("");
            SetError(false);
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            SetError(true);
        }

    }


    
    return(

        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                {/* <h1> Weather Forcast Search</h1> */}
                <TextField id="outlined-basic" 
                label="Outlined" 
                variant="outlined" 
                required 
                value={city}
                onChange={handleChange}
                />
                <br /><br />
                <Button variant="outlined" type="submit">Search</Button>
            {error && <p style={{color:"red"}}>"No such City Found!!!!"</p>}
            </form>
            

        </div>
    );
}