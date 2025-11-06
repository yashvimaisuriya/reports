import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from "recharts";

const LeadsStatusChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    { name: "Pending", leads: 0 },
    { name: "Closed", leads: 1 },
    { name: "Open", leads: 2 },
    { name: "Special", leads: 0 },
  ];

  const handlePrint = () => {
    window.print();
  };

  // ✅ Custom Legend
  const CustomLegend = () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        paddingBottom: 5,
        paddingLeft: 50,
      }}
    >
      <div
        style={{
          width: 25,
          height: 13,
          backgroundColor: "#007bff",
          marginRight: 6,
          borderRadius: 2,
        }}
      ></div>
      <span style={{ color: "#000", fontSize: "13px", fontWeight: "500" }}>
        No of leads
      </span>
    </div>
  );

  // ✅ Custom Tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "8px 10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontWeight: "bold",
              color: "#000",
              fontSize: "13px",
            }}
          >
            {label}
          </p>
          <p style={{ margin: 0, color: "#000", fontSize: "13px" }}>
            No of leads: {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    // ✅ Full background section
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6] p-10">
      {/* Chart Card */}
      <div className="bg-white border border-gray-300 rounded-md shadow-lg w-full max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-[#f9f9f9] rounded-t-md">
          <h2 className="text-gray-700 text-sm font-semibold">
            Leads by <span className="font-bold">Status</span>
          </h2>
          <button
            onClick={handlePrint}
            className="bg-purple-800 text-white text-sm px-4 py-1.5 rounded hover:bg-purple-900"
          >
            Print
          </button>
        </div>

        {/* Chart Section */}
        <div className="p-6 bg-white rounded-b-md" style={{ userSelect: "none" }}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              barCategoryGap="20%"
            >
              <CartesianGrid stroke="#e0e0e0" vertical={false} />
              <ReferenceLine y={0.5} stroke="#c0c0c0" />
              <ReferenceLine y={1.5} stroke="#c0c0c0" />
              <ReferenceLine y={2.5} stroke="#c0c0c0" />
              <ReferenceLine y={3.5} stroke="#c0c0c0" />
              <ReferenceLine y={0} stroke="#dddadaff" strokeWidth={1.5} />

              <XAxis
                dataKey="name"
                tick={{ fill: "#333" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#333" }}
                allowDecimals={false}
                domain={[0, "dataMax + 2"]}
                axisLine={false}
                tickLine={false}
              />

              <Legend
                verticalAlign="top"
                align="left"
                content={<CustomLegend />}
                wrapperStyle={{
                  paddingLeft: "10px",
                  paddingBottom: "0px",
                }}
              />

              <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />

              <Bar
                dataKey="leads"
                name="No of leads"
                barSize={60}
                isAnimationActive={false}
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index === activeIndex ? "#0056b3" : "#007bff"}
                    style={{
                      transition: "fill 0.2s ease-in-out",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <style>{`
        .recharts-surface:focus {
          outline: none !important;
        }
      `}</style>
    </div>
  );
};

export default LeadsStatusChart;
