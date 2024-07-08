import { useEffect, useState } from 'react';

export default function AddData({ setData }) {
  const [data, setDataState] = useState ({ temperature: '', humidity: '', gasSensor: '',concentration:'',time:'',user:'',heatIndex:''});
  // const [history, setHistoryState] = useState({ temperature: '', humidity: '', gasSensor: '',concentration:'',time:'',user:'',heatIndex:''});

  const getData = () => {
    fetch(`http://192.168.43.11:3000/sensorsInfoLast`)
      .then((res) => res.json())
      .then((resData) => { 
        console.log(resData);
        setDataState(resData); 
        setData(resData); 
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  },[getData]); 

  // const historyData = () => {
  //   fetch(`http://192.168.43.11:3000/sensorsInfo`)
  //     .then((res) => res.json())
  //     .then((resData) => { 
  //       console.log(resData);
  //       setHistoryState(resData); 
  //       setData(resData); 
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  // useEffect(() => {
  //   historyData();
  // }, []); 

  return null
}
