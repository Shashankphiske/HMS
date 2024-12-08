import React, { useState, useEffect } from "react";
import { HiSortAscending, HiSortDescending } from "react-icons/hi"; // Add icons for sorting

const AdminPanel = () => {
  const [students, setStudents] = useState([]);
  const [totalRent, setTotalRent] = useState(0);
  const [occupiedBeds, setOccupiedBeds] = useState(0);
  const [sortOrder, setSortOrder] = useState("asc"); // State to handle sorting

  useEffect(() => {
    // Mock Data for Testing
    const fetchedStudents = [
      { id: 1, name: "John Doe", rent: 5000, bed: "A1" },
      { id: 2, name: "Jane Smith", rent: 6000, bed: "B2" },
      { id: 3, name: "Alice Johnson", rent: 4500, bed: "C3" },
      { id: 4, name: "Bob Brown", rent: 5500, bed: "D4" },
    ];

    setStudents(fetchedStudents);
    setTotalRent(fetchedStudents.reduce((total, student) => total + student.rent, 0));
    setOccupiedBeds(fetchedStudents.length);
  }, []);

  // Sort students by name or rent based on the order
  const sortStudents = (key) => {
    const sorted = [...students].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return a[key] < b[key] ? 1 : -1;
      }
    });
    setStudents(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="container mx-auto p-8 lg:mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Hostel Admin Panel</h1>

      {/* Total Rent and Occupied Beds */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Total Rent Collected</h2>
          <p className="text-2xl text-gray-700">₹{totalRent}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Occupied Beds</h2>
          <p className="text-2xl text-gray-700">{occupiedBeds}</p>
        </div>
      </div>

      {/* Student Table */}
      <h2 className="text-2xl font-semibold mb-4">Current Students</h2>
      <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th
              className="px-4 py-2 text-left cursor-pointer"
              onClick={() => sortStudents("name")}
            >
              Name{" "}
              {sortOrder === "asc" ? (
                <HiSortAscending className="inline ml-1" />
              ) : (
                <HiSortDescending className="inline ml-1" />
              )}
            </th>
            <th
              className="px-4 py-2 text-left cursor-pointer"
              onClick={() => sortStudents("rent")}
            >
              Rent{" "}
              {sortOrder === "asc" ? (
                <HiSortAscending className="inline ml-1" />
              ) : (
                <HiSortDescending className="inline ml-1" />
              )}
            </th>
            <th className="px-4 py-2 text-left">Bed</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{student.name}</td>
              <td className="px-4 py-2">{student.rent}</td>
              <td className="px-4 py-2">{student.bed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
