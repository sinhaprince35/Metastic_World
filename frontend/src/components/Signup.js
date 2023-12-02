import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import TextField from '@mui/material/TextField';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState("");
  const [otp, setOtp] = useState("");
 

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = signInWithPhoneNumber(auth, phone, recaptcha);
      confirmation.codeLength = 4;
      setUser(confirmation);
      toast.success('Click the check box to send the OTP', { position: toast.POSITION.TOP_CENTER });
    } catch (error) {
      console.log(error);
       // Show error toast
       toast.error('Error sending OTP', { position: toast.POSITION.TOP_CENTER });
    }
  };

  const verifyOtp = async() => {
    try {
      const data = await user.confirm(otp);
      console.log(data);
       // Show success toast
       toast.success('OTP verified successfully!', { position: toast.POSITION.TOP_CENTER });
    } catch (error) {
      console.log(error);
      // Show error toast
      toast.error('Error verifying OTP', { position: toast.POSITION.TOP_CENTER });
    }
    
  }
  

  return (
    <div>
      <ToastContainer/>
      <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
        Sign up user by WhatsApp
      </h1>
      <PhoneInput
        country={"in"}
        value={phone}
        onChange={(phone) => setPhone("+" + phone)}
      />
      <button onClick={sendOtp} className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
        Send OTP
      </button>
      <div id="recaptcha" className="w-full flex gap-1 items-center justify-center py-2.5"></div>
      <TextField onChange={(e)=>setOtp(e.target.value)} sx={{width:"360px"}} label="Enter OTP" variant="outlined"/>
      <button onClick={verifyOtp} className="bg-purple-400 mt-2 w-full flex gap-1 items-center justify-center py-2.5 text-black rounded">
        Verify OTP
      </button>
    </div>
  );
};

export default Signup;
