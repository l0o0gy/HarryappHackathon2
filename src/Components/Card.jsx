import React from 'react';

function Card({ data, title }) {
    console.log(data);
  return (
    <div style={{display:'flex',justifyContent:'space-between',marginLeft: '100px'}}>
         <div style={{ border: '1px solid #ccc',margin:'10px', padding: '10px', borderRadius: '5px', width:300,height:200 }}>
      <h2>{title}</h2>
      <p> {data?.temperature}</p>
      <p> {data?.humidity}</p>
      <p> {data?.gasSensor}</p>
      <p> {data?.concentration}</p>
      <p> {data?.time}</p>
      <p> {data?.heatIndex}</p>
    </div>
    </div>
  );
}

export default Card;
