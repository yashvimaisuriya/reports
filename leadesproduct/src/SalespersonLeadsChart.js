import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const SalespersonLeads = () => {
  const data = [
    { name: "Suku", all: 2, miss: 1, unscheduled: 0, closed: 1 },
    { name: "Test", all: 1, miss: 1, unscheduled: 0, closed: 0 },
    { name: "Tester_salesman", all: 0, miss: 0, unscheduled: 0, closed: 0 },
    { name: "Test", all: 0, miss: 0, unscheduled: 0, closed: 0 },
  ];

  const handlePrint = () => window.print();

  // Tick values for grid lines between 0-4
  const yTicks = [0, 1, 2, 3, 4];

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-6">
      <div className="bg-white border border-gray-300 rounded-md shadow-md w-full max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-gray-50">
          <h2 className="text-gray-700 text-sm font-semibold">
            Salesperson <span className="font-bold">Leads</span>
          </h2>
          <button
            onClick={handlePrint}
            className="bg-purple-800 text-white text-sm px-4 py-1.5 rounded hover:bg-purple-900"
          >
            Print
          </button>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-5 px-6 py-2 ml-20 mt-4">
          <LegendItem color="#34d399" label="Todays added Leads" />
          <LegendItem color="#FF8A80" label="All Leads" />
          <LegendItem color="#007bff" label="Miss lead" />
          <LegendItem color="#94a3b8" label="Unscheduled" />
          <LegendItem color="#6ee7b7" label="Closed Leads" />
        </div>

        {/* Chart */}
        <div className="p-6 pt-4">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 60, left: 20, bottom: 5 }}
              barCategoryGap="35%"
            >
              {/* Solid horizontal grid lines */}
              <CartesianGrid stroke="#d1d5db" vertical={false} />

              {/* Reference lines between ticks */}
              <ReferenceLine y={0.5} stroke="#d1d5db" strokeWidth={1} />
              <ReferenceLine y={1.5} stroke="#d1d5db" strokeWidth={1} />
              <ReferenceLine y={2.5} stroke="#d1d5db" strokeWidth={1} />
              <ReferenceLine y={3.5} stroke="#d1d5db" strokeWidth={1} />

              <XAxis
                dataKey="name"
                tick={{ fontSize: 13, fill: "#333" }}
                axisLine={false} // <-- Remove black border here
                tickLine={false}
              />

              <YAxis
                domain={[0, 4]}
                ticks={yTicks}
                tick={{ fontSize: 13, fill: "#333" }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                cursor={false}
                contentStyle={{
                  fontSize: "13px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                }}
              />

              <Bar dataKey="all" stackId="a" fill="#FF8A80" name="All Leads" barSize={80} />
              <Bar dataKey="miss" stackId="a" fill="#007bff" name="Miss lead" barSize={80} />
              <Bar dataKey="unscheduled" stackId="a" fill="#94a3b8" name="Unscheduled" barSize={80} />
              <Bar dataKey="closed" stackId="a" fill="#6ee7b7" name="Closed Leads" barSize={80} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* ✅ Remove focus outline from chart */}
      <style>{`
        .recharts-surface:focus {
          outline: none !important;
        }
      `}</style>
    </div>
  );
};

// Legend item component
const LegendItem = ({ color, label }) => (
  <div className="flex items-center">
    <div
      className="rounded-sm mr-2"
      style={{ width: 24, height: 12, backgroundColor: color }}
    ></div>
    <span className="text-[13px] text-gray-700">{label}</span>
  </div>
);

export default SalespersonLeads;