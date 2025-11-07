import React, { useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export default function LeadsBySourceList() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const fromDatePickerRef = useRef(null);
  const toDatePickerRef = useRef(null);

  const sources = [
    { id: 1, name: "Facebook", leadsAdded: 0, followUp: 0 },
    { id: 2, name: "Google", leadsAdded: 0, followUp: 0 },
    { id: 3, name: "Instagram", leadsAdded: 2, followUp: 2 },
    { id: 4, name: "Internet", leadsAdded: 1, followUp: 1 },
    { id: 5, name: "Helo", leadsAdded: 0, followUp: 0 },
  ];

  const handleSearch = () => {
    const formattedFromDate = fromDate
      ? moment(fromDate).format("YYYY-MM-DD")
      : "N/A";
    const formattedToDate = toDate
      ? moment(toDate).format("YYYY-MM-DD")
      : "N/A";
    console.log("Searching from", formattedFromDate, "to", formattedToDate);
  };

  // ✅ Custom styled input for react-datepicker
  const CustomDateInput = React.forwardRef(
    ({ value, onClick, placeholder }, ref) => (
      <input
        type="text"
        value={value}
        readOnly
        onClick={onClick}
        placeholder={placeholder}
        className="border border-gray-300 rounded-l-md p-2 pl-3 w-40 text-sm focus:outline-none focus:ring-1 focus:ring-[#00AEEF] text-gray-700 placeholder-gray-400 cursor-pointer"
        ref={ref}
      />
    )
  );

  return (
    <div className="min-h-screen bg-[#f7f9fb] py-8">
      <div className="w-[95%] md:w-[90%] max-w-[1100px] mx-auto bg-white mt-4 border border-gray-300 rounded-sm shadow-md">
        {/* Header */}
        <div className="border-b px-4 py-3">
          <h2 className="text-lsm font-semibold text-gray-800 text-left">
            Leads By <span className="font-bold">Source List</span>
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
                calendarClassName="tailwind-datepicker"
                className="border border-gray-300 rounded-l-md p-2 w-40 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
                ref={fromDatePickerRef}
              />
              <button
                type="button"
                onClick={() => fromDatePickerRef.current.setOpen(true)}
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
                calendarClassName="tailwind-datepicker"
                className="border border-gray-300 rounded-l-md p-2 w-40 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
                ref={toDatePickerRef}
              />
              <button
                type="button"
                onClick={() => toDatePickerRef.current.setOpen(true)}
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
              className="bg-[#00AEEF] text-white font-semibold px-11 py-1.5 rounded text-sm shadow-sm hover:bg-[#0095D9] transition duration-200 ease-in-out"
            >
              Search
            </button>
            <p className="text-red-500 text-xs font-medium mt-1 text-right">
              Leads Count Contain (Custom Leads + Deals)
            </p>
          </div>
        </div>
                
        {/* Table */}
        <div className="overflow-x-auto px-6 pb-5">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#f2f5f7] text-gray-700 border-b border-gray-300">
                <th className="px-3 py-2 w-[10%] text-left font-semibold">
                  SR. NO.
                </th>
                <th className="px-3 py-2 text-left font-semibold">SOURCE</th>
                <th className="px-3 py-2 text-left font-semibold">
                  LEADS ADDED
                </th>
                <th className="px-3 py-2 text-left font-semibold">
                  FOLLOW UP LEADS
                </th>
              </tr>
            </thead>
            <tbody>
              {sources.map((src, index) => (
                <tr
                  key={src.id}
                  className="hover:bg-gray-50 border-b border-gray-200"
                >
                  <td className="border border-gray-200 px-3 py-2 text-left">
                    {index + 1}
                  </td>
                  <td className="border border-gray-200 px-3 py-2 text-left">
                    {src.name}
                  </td>
                  <td className="border border-gray-200 px-3 py-2 text-left">
                    {src.leadsAdded}
                  </td>
                  <td className="border border-gray-200 px-3 py-2 text-left">
                    {src.followUp}
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