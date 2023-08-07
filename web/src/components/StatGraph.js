import {
      Chart as ChartJS,
          CategoryScale,
          LinearScale,
          PointElement,
          LineElement,
          Title,
          Tooltip,
          Filler,
          Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Filler,
      Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => 5),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function StatGraph(props) {
	return <Line className="stat-graph" options={options} data={data} />;
}
