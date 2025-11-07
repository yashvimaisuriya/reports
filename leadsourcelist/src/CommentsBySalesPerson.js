import React, { useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CommentsBySalesPerson() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [salesPerson, setSalesPerson] = useState("All Sales Person");
  const fromDatePickerRef = useRef(null);
  const toDatePickerRef = useRef(null);

  const comments = [
    {
      id: 1,
      date: "03-Nov-25 17:17",
      contact: "MPL ZXS",
      company: "Company Inc.",
      dueDate: "10-Mar-21 14:05",
      location: "Surat , India",
      comments: "hi - By Test",
      salesPerson: "Test ( CEO )",
    },
    {
      id: 2,
      date: "28-Oct-25 10:29",
      contact: "MPL1 ZXS1",
      company: "Company Inc.",
      dueDate: "09-Mar-21 10:33",
      location: "Surat , India",
      comments: "Need to have a followup call. - By Test",
      salesPerson: "Test ( CEO )",
    },
  ];

  const handleExport = () => {
    alert("Export to Excel clicked!");
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      <div className="border border-gray-300 bg-white rounded-md shadow-sm h-[250px]">
        {/* ✅ HEADER SECTION */}
        <div className="border-b border-gray-200 bg-white px-4 py-3 flex justify-between items-center rounded-t-md">
          <h2 className="text-lg md:text-base font-normal text-gray-700">
            Comments Given By <span className="font-semibold">Sales Person</span>
          </h2>
          <button
            onClick={handleExport}
            className="bg-[#3b5ba8] hover:bg-[#314b8a] text-white text-xs font-medium px-4 py-2 rounded"
          >
            Export To Excel
          </button>
        </div>

        {/* ✅ FILTERS SECTION */}
        <div className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 pr-[10%]">
          {/* Left Filters - GAP INCREASED TO md:gap-12 */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-12 w-full">
            {/* Sales Person Dropdown */}
            <select
              value={salesPerson}
              onChange={(e) => setSalesPerson(e.target.value)}
              className="border rounded px-3 py-2 w-full md:w-1/3 text-sm focus:ring-2 focus:ring-blue-400"
            >
              <option>All Sales Person</option>
              <option>Test (CEO)</option>
              <option>John (Manager)</option>
            </select>

            {/* From Date (Wider) */}
            <div className="flex relative">
              <DatePicker
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="From Date"
                className="border border-gray-300 rounded-l-md p-2 w-64 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
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

            {/* To Date (Wider) */}
            <div className="flex relative">
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="To Date"
                className="border border-gray-300 rounded-l-md p-2 w-64 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
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

          {/* ✅ Search Button (Right Side) */}
          <button className="bg-[#4285F4] hover:bg-blue-600 text-white text-sm font-medium px-10 py-2 rounded whitespace-nowrap">
            Search
          </button>
        </div>

        {/* ✅ TABLE SECTION */}
        <div className="overflow-x-auto p-4 pt-0">
          <table className="w-full text-sm text-left rounded-lg">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-3 py-2">SR.NO.</th>
                <th className="px-3 py-2">DATE</th>
                <th className="px-3 py-2">CONTACT PERSON</th>
                <th className="px-3 py-2">COMPANY</th>
                <th className="px-3 py-2">DUE DATE</th>
                <th className="px-3 py-2">LOCATION</th>
                <th className="px-3 py-2">COMMENTS</th>
                <th className="px-3 py-2">SALES PERSON</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-3 py-2 border">{index + 1}</td>
                  <td className="px-3 py-2 border">{item.date}</td>
                  <td className="px-3 py-2 border">{item.contact}</td>
                  <td className="px-3 py-2 border">{item.company}</td>
                  <td className="px-3 py-2 border">{item.dueDate}</td>
                  <td className="px-3 py-2 border">{item.location}</td>
                  <td className="px-3 py-2 border">{item.comments}</td>
                  <td className="px-3 py-2 border font-semibold">
                    {item.salesPerson}
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