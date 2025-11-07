import React, { useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DealsBySourceList() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const fromRef = useRef(null);
  const toRef = useRef(null);

  // Empty table data
  const dealsData = [];

  const handleSearch = () => {
    console.log("Searching from:", fromDate, "to:", toDate);
  };

  return (
    <div className="min-h-screen bg-[#e9edf2] py-8">
      <div className="w-[95%] md:w-[90%] max-w-[1100px] min-h-[200px] mx-auto bg-white border border-gray-300 rounded-sm shadow-md">
        {/* Header */}
        <div className="border-b border-gray-300 px-6 py-3 text-left">
          <h2 className="text-gray-800 font-semibold text-[16px]">
            Deals By <span className="font-bold">Source List</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-end gap-10 px-8 py-5">
          {/* From Date */}
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium text-sm">From</label>
            <div className="flex">
              <DatePicker
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="From Date"
                className="border border-gray-300 rounded-l-md p-2 w-44 text-sm focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
                ref={fromRef}
              />
              <button
                onClick={() => fromRef.current.setOpen(true)}
                className="bg-[#00AEEF] px-3 rounded-r-md flex items-center justify-center"
              >
                <FaCalendarAlt className="text-white text-base" />
              </button>
            </div>
          </div>

          {/* To Date */}
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium text-sm">To</label>
            <div className="flex">
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="To Date"
                className="border border-gray-300 rounded-l-md p-2 w-44 text-sm focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
                ref={toRef}
              />
              <button
                onClick={() => toRef.current.setOpen(true)}
                className="bg-[#00AEEF] px-3 rounded-r-md flex items-center justify-center"
              >
                <FaCalendarAlt className="text-white text-base" />
              </button>
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-[#00AEEF] hover:bg-[#0095D9] text-white font-semibold text-sm px-10 py-1.5 rounded shadow-sm"
          >
            Search
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto px-4 pb-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#f2f5f7] text-gray-700 border-gray-300">
                <th className="px-3 py-3 text-left font-semibold w-[10%]">
                  SR. NO.
                </th>
                <th className="px-3 py-3 text-left font-semibold">SOURCE</th>
                <th className="px-3 py-3 text-left font-semibold">
                  LEADS ADDED
                </th>
                <th className="px-3 py-3 text-left font-semibold">DEALS</th>
              </tr>
            </thead>
            <tbody>
              {dealsData.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center text-gray-500 py-6 text-sm"
                  >
            
                  </td>
                </tr>
              ) : (
                dealsData.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-3 py-3 border border-gray-200">
                      {index + 1}
                    </td>
                    <td className="px-3 py-3 border border-gray-200">
                      {item.source}
                    </td>
                    <td className="px-3 py-3 border border-gray-200">
                      {item.leadsAdded}
                    </td>
                    <td className="px-3 py-3 border border-gray-200">
                      {item.deals}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
