import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const LeadsStatusTable = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(50);
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    { status: "Special", leads: 0 },
    { status: "Pending", leads: 0 },
    { status: "Open", leads: 2 },
    { status: "Closed", leads: 1 },
  ];

  const filteredData = data.filter((item) =>
    item.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
   <div className="bg-[#e5e9ec] flex justify-center py-6">
      <div className="bg-white shadow-sm border border-gray-200 rounded-md w-[90%] max-w-6xl">
        {/* Header Controls */}
        <div className="flex justify-between items-center px-4 py-3 border-gray-200">
          {/* Entries Dropdown */}
          <div className="relative flex items-center">
            <select
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(e.target.value)}
              className="appearance-none border border-gray-300 rounded-sm text-sm px-2 py-[3px] pr-6 focus:outline-none cursor-pointer"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-2 text-gray-500 pointer-events-none"
            />
          </div>

          {/* Search */}
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-600">Search:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-sm px-2 py-[3px] text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto p-4">
          <table className="w-full text-sm text-gray-700 border border-gray-200 border-collapse">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-2 border border-gray-200 font-semibold uppercase text-xs w-[80%]">
                  Lead Status
                </th>
                <th className="px-4 py-2 border border-gray-200 font-semibold uppercase text-xs text-center bg-gray-100">
                  Total Leads
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2 border border-gray-200">
                    {item.status}
                  </td>
                  <td className="px-4 py-2 border border-gray-200 text-center">
                    {item.leads}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer (Aligned to Right Like Your Image with Divider) */}
        <div className="flex justify-end items-center gap-6 px-4 py-2  border-gray-200 text-sm text-gray-600">
          {/* Showing entries text */}
          <span className="text-gray-500 text-[13px]">
            Showing <span className="font-semibold text-gray-700">1</span> to{" "}
            <span className="font-semibold text-gray-700">
              {filteredData.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-700">{data.length}</span>{" "}
            entries
          </span>

          {/* Divider line */}
          <span className="text-gray-400">|</span>

          {/* Pagination */}
          <div className="flex items-center space-x-2">
            <button
              disabled
              className="p-1 rounded border border-gray-300 bg-gray-100 opacity-50 cursor-not-allowed"
            >
              <img
                src="/img/left arrow.jpg"
                alt="Left Arrow"
                className="w-3.5 h-3.5"
              />
            </button>
            <span className="text-gray-700 text-sm border border-gray-300 rounded px-2 py-[2px] bg-gray-100">
              1
            </span>
            <button
              disabled
              className="p-1 rounded border border-gray-300 bg-gray-100 opacity-50 cursor-not-allowed"
            >
              <img
                src="/img/right arrow.jpg"
                alt="Right Arrow"
                className="w-3.5 h-3.5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsStatusTable;
