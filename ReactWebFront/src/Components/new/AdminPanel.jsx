import React, { useState, useEffect } from "react";
import { HiSortAscending, HiSortDescending } from "react-icons/hi";
import axios from "axios";

const AdminPanel = () => {
  const [students, setStudents] = useState([]);
  const [totalRent, setTotalRent] = useState(0);
  const [occupiedBeds, setOccupiedBeds] = useState(0);
  const [sortOrder, setSortOrder] = useState("asc");

  const fixedRent = 2000; // Define the fixed rent for each student

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/students");
        setStudents(response.data);

        // Calculate total rent and occupied beds
        setTotalRent(response.data.length * fixedRent);
        setOccupiedBeds(response.data.length);
      } catch (error) {
        console.error("Error fetching data from server:", error);
      }
    };

    fetchStudents();
  }, []);

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
    <div className="font-serif container mx-auto p-8 lg:mt-20">
      <h1 className="text-5xl text-center text-amber-950 mb-6">Hostel Admin Panel</h1>

      {/* Cards for Total Rent and Occupied Beds */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
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
              onClick={() => sortStudents("firstname")}
            >
              Name{" "}
              {sortOrder === "asc" ? (
                <HiSortAscending className="inline ml-1" />
              ) : (
                <HiSortDescending className="inline ml-1" />
              )}
            </th>
            <th className="px-4 py-2 text-left">Contact</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Address</th>
            <th className="px-4 py-2 text-left">Parent Info</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">
                {student.firstname} {student.lastname} {student.middlename}
              </td>
              <td className="px-4 py-2">{student.contact}</td>
              <td className="px-4 py-2">{student.email}</td>
              <td className="px-4 py-2">{student.address}</td>
              <td className="px-4 py-2">
                {student.parentFirstname} ({student.parentAge}), {student.parentOccupation}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
