import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";

const data = [
  { name: "Housing", value: 400, color: "#FFB6C1" },
  { name: "Shopping", value: 150, color: "#AEC6CF" },
  { name: "Travel", value: 250, color: " #9370DB" },
  { name: "Grocery", value: 300, color: "#7CFC00" },
  { name: "Entertainment", value: 100, color: "#E6E6FA" },

];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h3>Expence by Category</h3>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
