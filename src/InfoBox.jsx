import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import GrainIcon from '@mui/icons-material/Grain';

import "./InfoBox.css";


export function InfoBox({info}){
    let IMG_URL="https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;"
    

    return(
        <div className="InfoBox">
            {/* <h1>Weather Info</h1> */}
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={IMG_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} { info.temp>30 ? <SunnyIcon/> : info.humidity>30 ? <GrainIcon/>: <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' } } >
                    <p>description:{info.description}</p>
                    <p>humidity:{info.humidity}</p>
                    <p>pressure:{info.pressure}</p>
                    <p>sea_level:{info.sea_level}</p>
                    <p>temp:{info.temp}</p>
                    <p>temp_max:{info.temp_max}</p>
                    <p>temp_min:{info.temp_min}</p>
                    
                    </Typography>
                </CardContent>
                
            </Card>
            </div>

        </div>
    );
}