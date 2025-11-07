import React from "react";
import LeadsStatusChart from "./components/LeadsStatusChart";
import LeadsStatusTable from "./components/LeadStatusTable";

export default function App() {
  return (
    <div className="min-h-screen bg-[#e5e9ec]">
      <div className="max-w-7xl mx-auto space-y-2 py-4">
        {/* Chart Section */}
        <div className="rounded-lg  p-3">
          <LeadsStatusChart />
        </div>

        {/* Table Section */}
        <div className="rounded-lg  p-3">
          <LeadsStatusTable />
        </div>
      </div>
    </div>
  );
}
