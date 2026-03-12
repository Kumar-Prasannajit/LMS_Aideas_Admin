import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js"

import { Bar } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
)

import { assessmentData } from "../../../data/dashboardData"

function AssessmentChart(){

  const data = {
    labels: assessmentData.labels,
    datasets:[
      {
        label: "New Batch",
        data: assessmentData.newBatch,
        backgroundColor: "#2F6FED",
        borderRadius: 6
      },
      {
        label: "Old Batch",
        data: assessmentData.oldBatch,
        backgroundColor: "#E5E7EB",
        borderRadius: 6
      }
    ]
  }

  const options = {
    responsive:true,
    plugins:{
      legend:{
        position:"top",
        labels: {
          boxWidth: 14,
          boxHeight: 14,
          usePointStyle: true,
          pointStyle: "rectRounded"
        }
      }
    },
    scales:{
      y:{
        grid:{
          color:"#ECECEC"
        }
      },
      x:{
        grid:{
          display:false
        }
      }
    }
  }

  return <Bar data={data} options={options}/>
}

export default AssessmentChart