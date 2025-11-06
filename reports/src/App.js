import React from "react";
import LeadsStatusChart from "LeadsStatusChart";
import LeadsStatusTable from "./LeadsStatusTable";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-8 gap-8">
      {/* Chart Section */}
      <LeadsStatusChart />

      {/* Table Section */}
      <LeadsStatusTable />
    </div>
  );
}

export default App;
