import ChartBar from "./ChartBar.js";
import "./Chart.scss";

const Chart = (props) => {
  const pointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...pointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
