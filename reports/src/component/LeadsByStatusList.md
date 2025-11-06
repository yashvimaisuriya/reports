import React, { useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const LeadsByStatusList = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const fromRef = useRef(null);
  const toRef = useRef(null);

  const [statuses] = useState([
    { id: 1, name: "Pending", leads: 0 },
    { id: 2, name: "Closed", leads: 1 },
    { id: 3, name: "Open", leads: 2 },
    { id: 4, name: "Special", leads: 0 },
  ]);

  const handleFromChange = (e) => setFromDate(e.target.value);
  const handleToChange = (e) => setToDate(e.target.value);

  const handleSearch = () => {
    console.log("Searching from", fromDate, "to", toDate);
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen py-10">
      <div className="w-[80%] h-[40%] max-w-6xl bg-white border-2 border-gray-300 rounded-md shadow-lg">
        {/* Header */}
        <div className="px-6 py-4 border-b-2 border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 text-left">
            Leads By <span className="font-bold">Status List</span>
          </h2>
        </div>

        {/* Filter Row */}
        <div className="flex flex-wrap items-center justify-end gap-16 px-8 py-5 border-gray-200">
          {/* From Date */}
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium text-sm">From</label>
            <div className="flex relative">
              <input
                type="text"
                value={fromDate}
                readOnly
                placeholder="From Date"
                className="border border-gray-300 rounded-l-md p-2 pl-3 w-40 text-sm focus:outline-none focus:ring-1 focus:ring-[#00AEEF] text-gray-700 placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => fromRef.current?.showPicker?.()}
                className="bg-[#00AEEF] rounded-r-md px-3 flex items-center justify-center hover:bg-[#0095D9] transition"
                name="From date"
              >
                <FaCalendarAlt className="text-white text-base" />
              </button>
              <input
                ref={fromRef}
                type="date"
                onChange={handleFromChange}
                className="absolute opacity-0 pointer-events-none"
              />
            </div>
          </div>

          {/* To Date */}
          <div className="flex items-center gap-4">
            <label className="text-gray-700 font-medium text-sm">To</label>
            <div className="flex relative">
              <input
                type="text"
                value={toDate}
                readOnly
                placeholder="To Date"
                className="border border-gray-300 rounded-l-md p-2 pl-3 w-40 text-sm focus:outline-none focus:ring-1 focus:ring-[#00AEEF] text-gray-700 placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => toRef.current?.showPicker?.()}
                className="bg-[#00AEEF] rounded-r-md px-3 flex items-center justify-center hover:bg-[#0095D9] transition"
                name="To date"
              >
                <FaCalendarAlt className="text-white text-base" />
              </button>
              <input
                ref={toRef}
                type="date"
                onChange={handleToChange}
                className="absolute opacity-0 pointer-events-none"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="flex flex-col items-end">
            <button
              onClick={handleSearch}
              className="bg-[#00AEEF] text-white font-semibold px-6 py-2 rounded text-sm shadow-sm hover:bg-[#0095D9] transition duration-200 ease-in-out"
            >
              Search
            </button>
            <p className="text-red-500 text-xs font-medium mt-1 text-right">
              Leads Count Contain (Custom Leads + Deals)
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto px-6 pb-6">
          <table className="w-full text-sm text-left border-collapse border border-gray-300 rounded-md overflow-hidden">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs font-semibold">
              <tr>
                <th className="px-4 py-2 text-left w-[10%]">
                  SR. NO.
                </th>
                <th className="px-4 py-2 w-[30%]">
                  LEADS STATUS
                </th>
                <th className="px-4 py-2 text-left w-[20%]">
                  LEADS
                </th>
              </tr>
            </thead>
            <tbody>
              {statuses.map((status) => (
                <tr
                  key={status.id}
                  className="hover:bg-gray-50 transition duration-150"
                >
                  <td className="px-8 py-2 border border-gray-300 text-left text-gray-600">
                    {status.id}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-gray-600 font-medium">
                    {status.name}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-left text-gray-600">
                    {status.leads}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeadsByStatusList;
