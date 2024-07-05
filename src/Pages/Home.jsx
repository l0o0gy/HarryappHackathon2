import React from 'react'
// import MiniDrawer from '../Components/drawer'
import ChartsOverviewDemo from '../Components/BarChart'
import Navbar from '../Components/Navbar'
import Detailsbox from '../Components/Detailsbox'
function Home() {
  return (
    <div>
        <Navbar/>
        <Detailsbox/>
      {/* <MiniDrawer/> */}
      <ChartsOverviewDemo/>
    </div>
  )
}

export default Home
