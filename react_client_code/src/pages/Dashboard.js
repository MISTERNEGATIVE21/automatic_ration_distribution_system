import React, { useState } from "react";
import Navbar from "../components/dashboard/Navbar";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Dashboard = () => {
  const [amount, setAmount] = useState();
  const handleDispense = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/dispense",
        {
          dispenseAmount: +amount,
          type: "liquid",
        }
      );
      console.log(data);
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
    }finally {
      setAmount("");
    }
  };
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
                <div className="rounded-md bg-yellow-50 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <h3 className="text-[22px] font-medium text-yellow-800 mb-4">
                        Monthly Ration Quota
                      </h3>
                      <div className="mt-2 ml-4 text-sm text-yellow-700">
                        <ol className="list-decimal">
                          <li className="text-[15px] font-medium">
                            <span>Liquid (Oil/kerosene):</span>{" "}
                            <span>200ml/month (Each Member)</span>
                          </li>
                          <li className="text-[15px] font-medium mt-2">
                            <span>Solid (Rice/Wheat):</span>{" "}
                            <span>250gm/month (Each Member)</span>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Dispensing */}
                {/* Liquid */}
                <hr className="mt-5" />
                <div className="mt-4">
                  <h2 className="ml-3 font-bold text-[20px] text-[#363636]">
                    Liquid Dispensing
                  </h2>
                  <div className="mt-5">
                    <label className="ml-3 block text-sm font-medium text-gray-700">
                      Enter amount in ml:
                    </label>
                    <div className="flex ml-3 mt-2">
                      <input
                        type="number"
                        placeholder="ex : 200 (don't write unit - ml)"
                        className="h-10 border border-gray-300 mt-1 rounded outline-none px-4 w-1/2 bg-gray-50"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                      <button
                        className="ml-3 bg-green-500 text-white font-bold py-2 px-4 rounded"
                        onClick={handleDispense}
                      >
                        Dispense
                      </button>
                    </div>
                  </div>
                </div>
                {/* Solid */}
                <hr className="mt-5" />
                <div className="mt-4">
                  <h2 className="ml-3 font-bold text-[20px] text-[#363636]">
                    Solid Dispensing
                  </h2>
                  <div className="mt-5">
                    <label className="ml-3 block text-sm font-medium text-gray-700">
                      Enter amount in gram:
                    </label>
                    <div className="flex ml-3 mt-2">
                      <input
                        type="number"
                        placeholder="ex : 250 (don't write unit - gram)"
                        className="h-10 border border-gray-300 mt-1 rounded outline-none px-4 w-1/2 bg-gray-50"
                        // value={dispenseAmount}
                        // onChange={(e) => setDispenseAmount(e.target.value)}
                      />
                      <button
                        className="ml-3 bg-green-500 text-white font-bold py-2 px-4 rounded"
                        // onClick={handleDispense}
                      >
                        Dispense
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
