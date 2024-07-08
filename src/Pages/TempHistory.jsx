import React, { Component } from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import Navbar from '../Components/Navbar'

export default class TempHistory extends Component {
  render() {
    return (
      <div>
        <Navbar/>
           <LineChart style={{backgroundcolor:"whitesmoke"}}
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />
      </div>
    )
  }
}
