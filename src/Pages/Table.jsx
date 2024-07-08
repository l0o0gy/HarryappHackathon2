import React, { useState,useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddData from '../Components/AddData';


function createData(temperature, humidity, gasSensor, concentration, heatIndex) {
  return { temperature, humidity, gasSensor, concentration, heatIndex };
}

const initialData = [
  createData("", "", "", "", ""),
  createData("", "", "", "", ""),
  createData("", "", "", "", ""),
];

export default function DenseTable() {
  const [data, setData] = useState(initialData);
  const [history, setHistoryState] = useState([{ temperature: '', humidity: '', gasSensor: '',concentration:'',time:'',user:'',heatIndex:''}]);


  const historyData = () => {
    fetch(`http://192.168.43.11:3000/sensorsInfo`)
      .then((res) => res.json())
      .then((resData) => { 
        console.log(resData);
        setHistoryState(resData); 
        setData(resData); 
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    historyData();
  }, []); 
  return (
    <TableContainer component={Paper} style={{ width: 1150,borderRadius: '20px' ,display: 'flex', justifyContent: 'center', margin: '50px',padding:"20px 0px" }}>
      <Table style={{ width: 800 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Temperature</TableCell>
            <TableCell align="right">Humidity</TableCell>
            <TableCell align="right">Gas Sensor</TableCell>
            <TableCell align="right">Concentration</TableCell>
            <TableCell align="right">Heat Index</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* <AddData setData={setData} /> */}
          {history.map((item, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {item.temperature}
              </TableCell>
              <TableCell align="right">{item.humidity}</TableCell>
              <TableCell align="right">{item.gasSensor}</TableCell>
              <TableCell align="right">{item.concentration}</TableCell>
              <TableCell align="right">{item.heatIndex}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
