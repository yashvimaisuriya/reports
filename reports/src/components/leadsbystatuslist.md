import React, { useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const LeadsByStatusList = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [page, setPage] = useState(1);
  const fromRef = useRef(null);
  const toRef = useRef(null);

  const statuses = [
    { id: 1, name: "Pending", leads: 0 },
    { id: 2, name: "Closed", leads: 1 },
    { id: 3, name: "Open", leads: 2 },
    { id: 4, name: "Special", leads: 0 },
  ];

  const handleSearch = () => {
    console.log("Searching from", fromDate, "to", toDate);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen py-10">
      <div className="w-[80%] max-w-6xl bg-white border-2 border-gray-300 rounded-md shadow-lg">
        {/* Header */}
        <div className="px-6 py-4 border-b-2 border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 text-left">
            Leads By <span className="font-bold">Status List</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-end gap-16 px-8 py-5 border-gray-200">
          {/* From Date */}
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium text-sm">From</label>
            <div className="flex relative">
              <DatePicker
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="From Date"
                className="border border-gray-300 rounded-l-md p-2 w-40 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
                ref={fromRef}
              />
              <button
                type="button"
                onClick={() => fromRef.current.setOpen(true)}
                className="bg-[#00AEEF] rounded-r-md px-3 py-[10px] flex items-center justify-center"
              >
                <FaCalendarAlt className="text-white text-base" />
              </button>
            </div>
          </div>

          {/* To Date */}
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium text-sm">To</label>
            <div className="flex relative">
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="To Date"
                className="border border-gray-300 rounded-l-md p-2 w-40 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
                ref={toRef}
              />
              <button
                type="button"
                onClick={() => toRef.current.setOpen(true)}
                className="bg-[#00AEEF] rounded-r-md px-3 py-[10px] flex items-center justify-center"
              >
                <FaCalendarAlt className="text-white text-base" />
              </button>
            </div>
          </div>

          {/* Search */}
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
                <th className="px-4 py-2 text-left w-[10%]">SR. NO.</th>
                <th className="px-4 py-2 w-[30%]">LEADS STATUS</th>
                <th className="px-4 py-2 text-left w-[20%]">LEADS</th>
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

          {/* Pagination with custom SVG Arrows */}
          <div className="flex items-center justify-center gap-2 mt-6 select-none">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className={`w-8 h-8 flex items-center justify-center rounded-sm ${
                page === 1
                  ? "text-gray-300 bg-gray-100 cursor-not-allowed"
                  : "hover:bg-gray-200"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className={page === 1 ? "opacity-30" : ""}
              >
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>

            {/* Page Number */}
            <div className="w-8 h-8 flex items-center justify-center rounded-sm bg-gray-100 text-gray-800 text-sm font-semibold border border-gray-200">
              {page}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsByStatusList;
