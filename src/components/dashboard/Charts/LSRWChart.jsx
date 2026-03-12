import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js"

import { Doughnut } from "react-chartjs-2"

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

import { lsrwData } from "../../../data/dashboardData"

function LSRWChart(){

  const data = {
    labels: lsrwData.map(i => `${i.label} (${i.value}%)`),
    datasets:[
      {
        data: lsrwData.map(i => i.value),
        backgroundColor: lsrwData.map(i => i.color),
        borderWidth:0,
        spacing: 4
      }
    ]
  }

  const options = {
    cutout:"70%",
    plugins:{
      legend:{
        position:"right",
        labels: {
          boxWidth: 14,
          boxHeight: 14,
          usePointStyle: true,
          pointStyle: "rectRounded"
        }
      }
    }
  }

  return <Doughnut data={data} options={options}/>
}

export default LSRWChart