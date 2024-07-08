import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TemperatureCard from './TemperatureCard';
import HumidityCard from './HumidityCard'; 
import GassSensor from './GassSensor'
import Concentration from './Concentration';

function MainCard() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div style={{display:'flex',justifyContent:'start'}}>
      <div style={{ marginLeft: '100px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width: 300, marginTop: "20px", borderRadius: "20px", height: 300 }}>
        <Button variant="contained" disableElevation style={{ width: 300, height: 50, padding: "30px" }} onClick={() => handleButtonClick('temperature')}>
          Temperature
        </Button> <br/>
        <Button variant="contained" disableElevation style={{ width: 300, height: 50, padding: "30px" }} onClick={() => handleButtonClick('humidity')}>
          Humidity
        </Button><br/>
        <Button variant="contained" disableElevation style={{ width: 300, height: 50, padding: "30px" }} onClick={() => handleButtonClick('gasSensor')}>
          Gas Sensor
        </Button><br/>
        <Button variant="contained" disableElevation style={{ width: 300, height: 50, padding: "30px" }} onClick={() => handleButtonClick('concentration')}>
          Concentration
        </Button><br/>
      </div>

      <div style={{ marginTop: '5px' }}>
        {selectedComponent === 'temperature' && <TemperatureCard />}
        {selectedComponent === 'humidity' && <HumidityCard />}
        {selectedComponent === 'gasSensor' && <div><GassSensor/></div>}
        {selectedComponent === 'concentration' && <div><Concentration/></div>}
      </div>
    </div>
  );
}

export default MainCard;
