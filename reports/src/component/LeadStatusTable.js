import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

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
    <div className="bg-[#e5e9ec] min-h-screen flex justify-center items-center">
      <div className="bg-white shadow border border-gray-300 rounded-md w-[90%] max-w-5xl">
        {/* Top Controls */}
        <div className="flex justify-between items-center px-4 py-3">
          {/* Dropdown */}
          <div className="relative">
            <div className="flex items-center border border-gray-300 rounded-sm bg-white px-2 py-[3px] w-[60px]">
              <select
                value={entriesPerPage}
                onChange={(e) => setEntriesPerPage(e.target.value)}
                className="appearance-none bg-transparent text-sm text-gray-700 w-full focus:outline-none cursor-pointer"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <ChevronDown
                size={16}
                className="text-gray-700 absolute right-2 pointer-events-none"
              />
            </div>
          </div>

          {/* Search */}
          <div className="flex items-center space-x-2">
            <label className="text-gray-600 text-sm">Search:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-sm px-3 py-[3px] text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto p-4">
          <table className="w-full text-sm text-left border border-gray-200 border-collapse">
            <thead className="text-gray-700">
              <tr>
                <th className="px-6 py-2 border border-gray-300 font-semibold uppercase text-xs bg-white">
                  Lead Status
                </th>
                <th className="px-6 py-2 border border-gray-300 font-semibold uppercase text-xs text-left bg-gray-100">
                  Total Leads
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-2 border border-gray-200 w-[80%]">
                    {item.status}
                  </td>
                  <td className="px-6 py-2 text-center border border-gray-200">
                    {item.leads}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-end items-center px-4 py-3 text-sm text-gray-600 gap-3">
          <span>
            Showing <b>1</b> to <b>{filteredData.length}</b> of <b>{data.length}</b> entries
          </span>

          <div className="flex items-center space-x-2">
            <div className="h-4 border-l border-gray-300"></div>

            {/* Pagination */}
            <div className="flex items-center space-x-1">
              {/* Left Arrow */}
              <button className="p-[6px] border border-gray-300 rounded-md bg-gray-100 text-gray-400 cursor-not-allowed hover:bg-gray-200 transition">
                <FaAngleLeft size={16} />
              </button>

              {/* Page Number */}
              <button className="px-3 py-[5px] border border-gray-300 rounded-md bg-blue-50 text-blue-600 font-semibold shadow-sm">
                1
              </button>

              {/* Right Arrow */}
              <button className="p-[6px] border border-gray-300 rounded-md bg-gray-100 text-gray-400 cursor-not-allowed hover:bg-gray-200 transition">
                <FaAngleRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsStatusTable;
