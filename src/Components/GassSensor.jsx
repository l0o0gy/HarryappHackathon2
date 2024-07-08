import React, { useState } from 'react';
import AddData from './AddData';
import Button from '@mui/material/Button';
import img from '../assets/img/carbon-monoxide.png'


export default function HumidityCard({}) {
  const [data, setData] = useState([]);

  return (
    <div style={{
      // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
       width: 200, marginTop: "20px", borderRadius: "20px", height: 300, backgroundColor: "white" }}>
      <h1 style={{ paddingTop: '20px', fontSize: "20px",color:'gray' }}>
        CO2 Gas Sensor
      </h1>
      <div style={{ display: "flex", justifyContent: "center", paddingTop: '40px',marginBottom:'20px' }}>
        <img src={img} alt='gas Logo' style={{width:90}}/>
      </div>
        <div>
        <AddData setData={setData}  />
          {data.length > 0 && data.map((item) => (
          <h1 key={item?.gasSensor} style={{marginTop:"10px"}}>{item?.gasSensor} ppm </h1>
        ))}
      </div>
      <Button variant="contained" disableElevation style={{marginTop:"8px"}}>
        More Details
      </Button>
    </div>
  );
}
