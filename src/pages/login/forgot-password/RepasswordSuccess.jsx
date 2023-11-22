import { ButtonClick } from "@/components/button";
import { LayoutLogin } from "@/components/card-login";
import React from "react";
import { Link } from "react-router-dom";

function RepasswordSuccess() {
  return (
    <LayoutLogin
      label="Raih Peduli - Lupa Password"
      route="/otp-password"
      id="raih-peduli-tittle"
    >
      <p className="opacity-70 mb-[2.5rem]">
        Password berubah. sekarang Anda dapat login dengan password baru Anda
      </p>
      <Link to="/login">
        <ButtonClick
          id="btn-next-login"
          aria-label="btn-next-login"
          label="Masuk"
          className="w-full h-[3.25rem] bg-[#293066] hover:bg-[#293066] text-white"
        />
      </Link>
    </LayoutLogin>
  );
}

export default RepasswordSuccess;
