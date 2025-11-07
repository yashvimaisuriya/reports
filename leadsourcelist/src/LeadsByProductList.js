import React, { useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function LeadsByProductList() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const fromRef = useRef(null);
  const toRef = useRef(null);

  const products = [
    { id: 1, name: "Galaxy S1", leadsAdded: 0, followUp: 0 },
    { id: 2, name: "Galaxy S2", leadsAdded: 0, followUp: 0 },
    { id: 3, name: "Bandhani", leadsAdded: 0, followUp: 0 },
    { id: 4, name: "Lenovo Ideapad", leadsAdded: 0, followUp: 0 },
    { id: 5, name: "hi", leadsAdded: 0, followUp: 0 },
  ];

  const handleSearch = () => {
    console.log("From:", fromDate, "To:", toDate);
  };

  return (
    <div className="min-h-screen bg-[#f4f7fa] py-8">
      <div className="w-[95%] md:w-[90%] max-w-[1100px] mx-auto bg-white border border-gray-300 shadow-md rounded-sm">
        {/* Header */}
        <div className="border-b border-gray-300 px-6 py-3 text-left">
          <h2 className="text-gray-800 font-semibold text-[16px]">
            Leads By <span className="font-bold">Product List</span>
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
                placeholderText="Select date"
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
                placeholderText="Select date"
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
          <div className="flex flex-col items-end">
            <button
              onClick={handleSearch}
              className="bg-[#00AEEF] hover:bg-[#0095D9] text-white font-semibold text-sm px-10 py-1.5 rounded shadow-sm"
            >
              Search
            </button>
            <p className="text-red-500 text-xs font-medium mt-1">
              Leads Count Contain (Custom Leads + Deals)
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto px-6 pb-5">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#f2f5f7] text-gray-700 border-b border-gray-300">
                <th className="px-3 py-2 text-left font-semibold w-[10%]">
                  SR. NO.
                </th>
                <th className="px-3 py-2 text-left font-semibold">PRODUCT</th>
                <th className="px-3 py-2 text-left font-semibold">LEADS ADDED</th>
                <th className="px-3 py-2 text-left font-semibold">
                  FOLLOW UP LEADS
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-3 py-2 border border-gray-200 text-left">
                    {index + 1}
                  </td>
                  <td className="px-3 py-2 border border-gray-200 text-left">
                    {item.name}
                  </td>
                  <td className="px-3 py-2 border border-gray-200 text-left">
                    {item.leadsAdded}
                  </td>
                  <td className="px-3 py-2 border border-gray-200 text-left">
                    {item.followUp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
