import React, { useState } from 'react';
import AddData from './AddData';
import Thermometer from 'react-thermometer-ecotropy';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function TemperatureCard({ darkMode }) {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const goToTempPage = () => {
    navigate('/temphisto');
  };

  return (
    <div style={{ 
      // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
       width: 200, marginTop: '20px', borderRadius: '20px', height: 300, backgroundColor: 'white' }}>
      <h1 style={{ paddingTop: '20px', fontSize: '20px', color:"gray" }}>
        Temperature
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
        <AddData setData={setData} />
        {data.length > 0 && data.map((item, index) => (
          <Thermometer
            key={index}
            theme='light'
            value={Number(item?.temperature).toFixed(1)}
            max="100"
            format="°C"
            size="mediam"
            height="140"
          />
        ))}
      </div>
      <Button variant="contained" disableElevation style={{ marginTop: '20px' }} onClick={goToTempPage}>
        More Details
      </Button>
    </div>
  );
}
