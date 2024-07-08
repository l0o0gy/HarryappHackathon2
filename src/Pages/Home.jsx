import React from 'react'
import Navbar from '../Components/Navbar'
import Detailsbox from '../Components/TemperatureCard'
import HumidityCard from '../Components/HumidityCard'
import  GasSensor from '../Components/GassSensor'
import Concentration from '../Components/Concentration';
import Heat from '../Components/Heat'
import Table  from '../Pages/Table'
// import WebSocketComponent from '../Components/WebSocket'

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        {/* <MainCard/> */}
        {/* <WebSocketComponent/> */}
        <Heat/>
        <div style={{display:"flex" , justifyContent:'space-evenly'}}>
          <Detailsbox/>
          <HumidityCard/>
          <GasSensor/>
          <Concentration/>
        </div> 
        <div style={{display:"flex" , justifyContent:'center'}}>
         <Table/>
         </div>
    </div>
  )
}

export default Home
