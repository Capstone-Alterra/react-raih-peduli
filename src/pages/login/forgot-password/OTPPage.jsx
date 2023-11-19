import { ButtonClick } from "@/components/button";
import { LayoutLogin } from "@/components/card-login";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function OTPPage() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const navigate = useNavigate();
  
  const handleOTP = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleNextClick = () => {
    alert("Entered OTP is " + otp.join(""));
    navigate("/repassword");
  };

  return (
    <LayoutLogin
      label="Raih Peduli - Lupa Password"
      route="/lupa-password"
      id="raih-peduli-tittle"
    >
      <p className="opacity-70 my-[49px]">
        Kode Verifikasi OTP telah dikirim ke admin@gmail.com
      </p>
      <div className="row">
        <div className="col text-center">
          {otp.map((data, index) => {
            return (
              <input
                id="otp-form"
                aria-label="otp-form"
                className="bg-[#E5E9F4] border-1 rounded-[8px] w-[50px] h-[50px] text-center mx-[10px] mb-5 font-bold text-xl"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleOTP(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}
          <p className="opacity-70">OTP Entered - {otp.join("")}</p>
          <ButtonClick
            label="Selanjutnya"
            aria-label="btn-next-otp"
            id="btn-next-otp"
            className="w-[457px] h-[56px] bg-[#293066] hover:bg-[#293066] text-white mt-[40px]"
            onClick={handleNextClick}
          />
        </div>
      </div>
    </LayoutLogin>
  );
}

export default OTPPage;
