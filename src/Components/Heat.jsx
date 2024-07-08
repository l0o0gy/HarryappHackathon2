import React, { useState, useEffect } from 'react';
import AddData from './AddData';

function Heat() {
  const [data, setData] = useState([]);
  const [gradientPosition, setGradientPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition(prevPosition => (prevPosition + 1) % 50);
    }, 100); // Change the interval time as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      <AddData setData={setData} />
      {data.length > 0 && data.map((item, index) => (
        <div
          key={index}
          // value={item.heatIndex}
          style={{
            // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            width: 1150,
            hight:10,
            marginTop: '20px',
            borderRadius: '20px',
            backgroundColor: 'white',
            backgroundImage: `linear-gradient(to right, #fd1d1d ${item.heatIndex}%,#E99120, #E2F2E8)`
          }}
        >
          <h1 style={{ paddingTop: '5px', fontSize: '20px' ,color:"white"}}>
            Heat {Number(item?.heatIndex).toFixed(1)} °C 
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Heat;
