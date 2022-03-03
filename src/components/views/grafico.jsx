import React, { useMemo,useState,useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const scores = [[1], [2], [3], [2], [2], [4], [0]];
const labels = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

const options = {
  fill: true,
  animations: true,
  scales: {
    y: {
      min: 0
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};

export default function BarChart(props) {
   let [scor, setScore] = useState(props.Score);
   useEffect(() => {
   
  setScore(props.Score);
}, [props.Score]);


  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Visitas",
          tension: 0.3,
          data: scor,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.3)",
        },
      ],
      labels,
    };
  }, []);

  return (
    <div className="App">
      <Bar data={data} options={options} />
    </div>
  );
}
