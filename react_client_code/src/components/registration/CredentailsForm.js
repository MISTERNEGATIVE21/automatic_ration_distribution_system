import React, { useContext, useState } from "react";
import CredentailsFormDetails from "./CredentailsFormDetails";
import { RationContext } from "../../context/RationContext";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CredentailsForm = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [timer, setTimer] = useState(15); // Timer initialized to 10 seconds
  const [isScanning, setIsScanning] = useState(false);
  const [accountCredentials, setAccountCredentials] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    RFID: "",
  });

  const { personalDetails, familyMembersDetails } = useContext(RationContext);

  const getRFID = async () => {
    try {
      setIsScanning(true);
      const { data } = await axios.get("http://localhost:5000/api/scan"); 

      // Start the countdown
      let countdown = 15;
      const interval = setInterval(() => {
        countdown--;
        setTimer(countdown);
        if (countdown === 0) {
          clearInterval(interval);
          // Call /scanOutput after 10 seconds
          callScanOutput();
          setIsScanning(false)
        }
      }, 1000);
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

  const callScanOutput = async () => {
    try {
      const { data} = await axios.get("http://localhost:5000/api/scan-output");
      setAccountCredentials((prev) => ({
        ...prev,
        RFID: data,
      }));
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

  const handleSubmit = async () => {
    setLoader(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const reqData = {
        full_name: personalDetails.full_name,
        email: personalDetails.email,
        phone: personalDetails.phone,
        dob: personalDetails.dob,
        gender: personalDetails.gender,
        address:
          personalDetails.address +
          ", " +
          personalDetails.city +
          ", " +
          personalDetails.zipcode +
          ", " +
          personalDetails.state +
          ", " +
          personalDetails.country,
        username: accountCredentials.username,
        confirmPassword: accountCredentials.confirmPassword,
        password: accountCredentials.password,
        aadhaar: personalDetails.aadhaar,
        RFID_UID: accountCredentials.RFID,
        familyMembers: familyMembersDetails,
      };

      const { data } = await axios.post(
        `http://127.0.0.1:5000/api/register`,
        reqData,
        config
      );
      setLoader(false);
      console.log(data);
      toast.success(data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setLoader(false);
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

  return (
    <>
      <ToastContainer />
      <div class="mx-24 mt-8 p-8 border rounded-md">
        <div class="grid gap-2 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            <h1 className="text-[24px] font-bold mb-3">Step-3</h1>
            <p class="font-medium text-xl">Account Credentials</p>
            <p className="">
              Please fill out all the fields carefully for creating <br />{" "}
              account credentails.
            </p>
          </div>

          <div class="lg:col-span-2">
            <CredentailsFormDetails
              handleSubmit={handleSubmit}
              accountCredentials={accountCredentials}
              setAccountCredentials={setAccountCredentials}
              loader={loader}
              getRFID={getRFID}
              timer={timer}
              isScanning={isScanning}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CredentailsForm;
