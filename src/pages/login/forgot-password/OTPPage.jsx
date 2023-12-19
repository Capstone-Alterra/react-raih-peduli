import { ButtonClick } from "@/components/button";
import { LayoutLogin } from "@/components/card-login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "@/utils/context/token";
import { otpVerification } from "@/utils/api/auth/forget-password/api";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 5000,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

function OTPPage() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const navigate = useNavigate();
  const { changeToken } = useToken();

  const handleOTP = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleNextClick = async () => {
    try {
      const response = await otpVerification(otp.join(""));
      Toast.fire({ icon: "success", title: "OTP yang dimasukan benar" });
      const accessToken = response.access_token;
      const refreshToken = "";

      changeToken(accessToken, refreshToken);

      navigate("/repassword");
    } catch (error) {
      const errorMessage = error.response?.data?.message;
      Toast.fire({ icon: "error", title: `Error verifying OTP: ${errorMessage}` });
    }
  };

  return (
    <LayoutLogin label="Raih Peduli - Lupa Password" route="/lupa-password" id="raih-peduli-tittle">
      <p className="opacity-70 my-[2.5rem]">Kode verifikasi OTP telah dikirim ke email kamu.</p>
      <div className="row">
        <div className="col text-center">
          {otp.map((data, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              aria-label={`otp-input-${index}`}
              className="bg-[#E5E9F4] border-1 rounded-lg w-[3rem] h-[3rem] text-center mx-[0.625rem] mb-5 font-bold text-xl"
              type="text"
              name="otp"
              maxLength="1"
              autoComplete="off"
              value={data}
              onChange={(e) => handleOTP(e.target, index)}
              onFocus={(e) => e.target.select()}
              autoFocus={index === 0}
            />
          ))}
          <p className="opacity-70">OTP Entered - {otp.join("")}</p>
          <ButtonClick label="Selanjutnya" aria-label="btn-next-otp" id="btn-next-otp" className="w-full h-[3.25rem] bg-[#293066] hover:bg-[#293066] text-white mt-[2rem]" onClick={handleNextClick} />
        </div>
      </div>
    </LayoutLogin>
  );
}

export default OTPPage;
