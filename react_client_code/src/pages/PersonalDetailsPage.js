import React, { useContext } from "react";
import Navbar from "../components/dashboard/Navbar";
import { RationContext } from "../context/RationContext";

const PersonalDetailsPage = () => {
  const { loggedInDetails } = useContext(RationContext);
  console.log(loggedInDetails);
  return (
    <div class="flex flex-1 bg-gray-50">
      <Navbar />

      <div class="flex flex-col flex-1 bg-gray-100">
        <main>
          <div class="py-6">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              {/* <!-- ADD YOUR CONTENT HERE --> */}
              <div className="container p-8 bg-white rounded-md shadow-sm max-w-lg">
                <h2 className="text-3xl font-semibold mb-6">
                  Personal Details
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-3 rounded-sm">
                    <label className="text-gray-500">Full Name</label>
                    <p className="text-black font-medium">
                      {loggedInDetails?.full_name}
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-sm">
                    <label className="text-gray-500">Username</label>
                    <p className="text-black font-medium">
                      {loggedInDetails?.username}
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-sm">
                    <label className="text-gray-500">Email</label>
                    <p className="text-black font-medium">
                      {loggedInDetails?.email}
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-sm">
                    <label className="text-gray-500">Phone</label>
                    <p className="text-black font-medium">
                      {loggedInDetails?.phone}
                    </p>
                  </div>
                  <div className="col-span-2 bg-gray-100 p-3 rounded-sm">
                    <label className="text-gray-500">Address</label>
                    <p className="text-black font-medium">
                      {loggedInDetails?.address}
                    </p>
                  </div>
                  <div className=" bg-gray-100 p-3 rounded-sm">
                    <label className="text-gray-500">Date of Birth</label>
                    <p className="text-black font-medium">
                      {loggedInDetails?.dob}
                    </p>
                  </div>
                  <div className=" bg-gray-100 p-3 rounded-sm">
                    <label className="text-gray-500">Gender</label>
                    <p className="text-black font-medium">
                      {loggedInDetails?.gender}
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-sm">
                    <label className="text-gray-500">Aadhaar</label>
                    <p className="text-black font-medium">
                      {loggedInDetails?.aadhaar}
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-sm">
                    <label className="text-gray-500">RFID</label>
                    <p className="text-black font-medium">
                      {loggedInDetails?.rfid}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PersonalDetailsPage;
