import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function AnalyticsChart({ data }) {
  const chartData = [
    {
      name: "Stars",
      value: data.stargazers_count,
    },
    {
      name: "Forks",
      value: data.forks_count,
    },
    {
      name: "Issues",
      value: data.open_issues_count,
    },
  ];

  return (
    <div className="bg-slate-800 rounded-2xl p-8 mt-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">
        📊 Repository Analytics
      </h2>

      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="value" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AnalyticsChart;