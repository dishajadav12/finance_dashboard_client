import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "2019",
    income: 4000,
    savings: 2400,
    expence: 2400,
  },
  {
    name: "2020",
    income: 3000,
    savings: 1398,
    expence: 2210,
  },
  {
    name: "2021",
    income: 1000,
    savings: 800,
    expence: 2290,
  },
  {
    name: "2022",
    income: 2780,
    savings: 3908,
    expence: 2000,
  },
  {
    name: "2023",
    income: 1890,
    savings: 4800,
    expence: 2181,
  },
  {
    name: "2024",
    income: 12390,
    savings: 300,
    expence: 2500,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Summary</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="expence"
              stackId="1"
              stroke="#FFCCCC"
              fill="#FFCCCC"
            />
            <Area
              type="monotone"
              dataKey="savings"
              stackId="1"
              stroke="#D48FD4"
              fill="#D48FD4"
            />
            <Area
              type="monotone"
              dataKey="income"
              stackId="1"
              stroke="#D8F5CC"
              fill="#D8F5CC"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
