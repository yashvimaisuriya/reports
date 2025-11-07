import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const LeadsByProductChart = () => {
  const data = [
    { name: "Galaxy S1", leads: 1 },
    { name: "Galaxy S2", leads: 0 },
    { name: "Bandhani", leads: 2 },
    { name: "Lenovo Ideapad", leads: 0 },
    { name: "hi", leads: 0 },
  ];

  const handlePrint = () => {
    window.print();
  };

  // ✅ Custom Legend Component
  const CustomLegend = () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        paddingBottom: 20,
        marginLeft: 60, // ✅ Added left margin to whole legend (blue box + text)
      }}
    >
      <div
        style={{
          width: 20,
          height: 10,
          backgroundColor: "#3d60d2",
          marginRight: 8,
          borderRadius: 2,
        }}
      ></div>
      <span style={{ color: "#000", fontWeight: "500", fontSize: "14px" }}>
        No of leads
      </span>
    </div>
  );

  return (
    <div className="flex items-center justify-center p-4 bg-gray-100 min-h-screen">
      <div className="bg-white border border-gray-300 rounded-md shadow-md w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-gray-50">
          <h2 className="text-gray-700 text-sm font-semibold">
            Leads by <span className="font-bold">Product</span>
          </h2>
          <button
            onClick={handlePrint}
            className="bg-purple-800 text-white text-sm px-4 py-1.5 rounded hover:bg-purple-900"
          >
            Print
          </button>
        </div>

        {/* Chart Area */}
        <div
          className="p-6 bg-white rounded-b-md"
          style={{
            userSelect: "none", // Prevent selection outline
          }}
        >
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              barCategoryGap="20%"
              style={{
                border: "none",
                outline: "none",
                boxShadow: "none",
                background: "transparent",
              }}
            >
              {/* ✅ Light grid lines */}
              <CartesianGrid stroke="#e0e0e0" vertical={false} />

              {/* ✅ Solid horizontal interval lines */}
              <ReferenceLine y={0.5} stroke="#c0c0c0" />
              <ReferenceLine y={1.5} stroke="#c0c0c0" />
              <ReferenceLine y={2.5} stroke="#c0c0c0" />
              <ReferenceLine y={3.5} stroke="#c0c0c0" />

              {/* ✅ Dark X-axis baseline */}
              <ReferenceLine y={0} stroke="#444" strokeWidth={1.5} />

              {/* X-Axis */}
              <XAxis
                dataKey="name"
                tick={{ fill: "#333" }}
                axisLine={false}
                tickLine={false}
              />

              {/* Y-Axis */}
              <YAxis
                tick={{ fill: "#333" }}
                allowDecimals={false}
                domain={[0, 4]}
                ticks={[0, 1, 2, 3, 4]}
                axisLine={false}
                tickLine={false}
              />

              {/* Legend */}
              <Legend
                verticalAlign="top"
                align="left"
                content={<CustomLegend />}
              />

              {/* Bar */}
              <Bar
                dataKey="leads"
                fill="#3d60d2"
                name="No of leads"
                barSize={80}
                radius={[6, 6, 0, 0]}
                isAnimationActive={false}
              />
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

export default LeadsByProductChart;