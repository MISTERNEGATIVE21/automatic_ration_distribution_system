import React, { useEffect, useState } from "react";
import Navbar from "../components/dashboard/Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const FamilyDetailsPage = () => {
  const [familyData, setFamilyData] = useState();
  useEffect(() => {
    const getFamilyData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/get-family-members",
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("ration_jwt_auth")
              )}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(data);
        setFamilyData(data.family_members);
      } catch (error) {
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    };
    getFamilyData();
  }, []);
  return (
    <>
      <ToastContainer />
      <div class="flex flex-1 bg-gray-50">
        <Navbar />

        <div class="flex flex-col flex-1 bg-gray-100">
          <main>
            <div class="py-6">
              <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                {/* <!-- ADD YOUR CONTENT HERE --> */}
                <div>
                  <h2 className="text-3xl font-semibold mb-6">
                    Family Details
                  </h2>
                  <table className="min-w-full bg-white border border-gray-300 rounded-md overflow-hidden">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="py-2 px-4 border-r">Full Name</th>
                        <th className="py-2 px-4 border-r">Email</th>
                        <th className="py-2 px-4 border-r">Phone</th>
                        <th className="py-2 px-4 border-r">DOB</th>
                        <th className="py-2 px-4 border-r">Gender</th>
                        <th className="py-2 px-4 border-r">Aadhar</th>
                        <th className="py-2 px-4">Relation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {familyData?.map((member, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-2 px-4 border-r text-center">
                            {member?.full_name}
                          </td>
                          <td className="py-2 px-4 border-r text-center">
                            {member?.email}
                          </td>
                          <td className="py-2 px-4 border-r text-center">
                            {member?.phone}
                          </td>
                          <td className="py-2 px-4 border-r text-center">{member?.dob}</td>
                          <td className="py-2 px-4 border-r text-center">
                            {member?.gender}
                          </td>
                          <td className="py-2 px-4 border-r text-center">
                            {member?.aadhaar}
                          </td>
                          <td className="py-2 px-4 text-center">{member?.relation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default FamilyDetailsPage;
