import React from "react";
import "./App.css";
import SalespersonLeadsChart from "./SalespersonLeadsChart";
import LeadsByProductChart from "./LeadsByProductChart";

function App() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Chart */}
        <LeadsByProductChart />

        {/* Bottom Chart */}
        <SalespersonLeadsChart />
      </div>
    </div>
  );
}

export default App;
