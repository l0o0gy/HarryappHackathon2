import React, { useState } from 'react';
import AddData from './AddData';
import { GaugeContainer, GaugeValueArc, GaugeReferenceArc, useGaugeState } from '@mui/x-charts/Gauge';
import Button from '@mui/material/Button';

function GaugePointer({ color }) {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill={color} />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke={color}
        strokeWidth={3}
      />
    </g>
  );
}

export default function Concentration() {
  const [data, setData] = useState([]);

  const colors = ['smokewhite', 'blue', 'green', 'purple', 'orange', 'yellow'];

  return (
    <div style={{
      // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
       width: 200, marginTop: "20px", borderRadius: "20px", height: 300, backgroundColor: "white" }}>
      <h1 style={{ paddingTop: '20px', fontSize: "20px",color:"gray" }}>
        Concentration
      </h1>
      <div style={{ display: "flex", justifyContent: "center"}}>
        <AddData setData={setData} />
        {data.length > 0 && data.map((item, index) => (
          <GaugeContainer
            key={index}
            width={150}
            height={150}
            startAngle={-110}
            endAngle={110}
            value={item?.concentration /10000000000}
          >
            <GaugeReferenceArc stroke={colors[(index + 0) % colors.length]} />
            <GaugeValueArc stroke={colors[(index + 1) % colors.length]} />
            <GaugePointer color={colors[(index + 5) % colors.length]} />
          </GaugeContainer>
        ))}
      </div>
      <AddData setData={setData} />
      {data.length > 0 && data.map((item) => (
        <h1 key={item?.concentration}>{Number(item?.concentration/100000000).toFixed(1)} ppm</h1>
      ))}
      <Button variant="contained" disableElevation style={{marginTop:"8px"}}>
        More Details
      </Button>
    </div>
  );
}
