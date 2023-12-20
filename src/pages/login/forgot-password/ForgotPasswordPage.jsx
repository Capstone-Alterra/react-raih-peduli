import { LayoutLogin } from "@/components/card-login";
import { InputLabel } from "@/components/input-with-label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ButtonClick } from "@/components/button";
import { ForgetPassword } from "@/utils/api/auth/forget-password";
import { ForgetPasswordSchema } from "@/utils/api/auth/forget-password";
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

function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: zodResolver(ForgetPasswordSchema),
  });

  async function handleOTP(data) {
    const { email } = data;
    try {
      localStorage.setItem("email", email);
      const response = await ForgetPassword(email);
      Toast.fire({ icon: "success", title: "OTP sudah dikirim ke email kamu" });
      navigate("/otp-password");
    } catch (error) {
      setErrorMessage(error.message);
    }
  }
  return (
    <LayoutLogin label="Raih Peduli - Lupa Password" id="raih-peduli-tittle" route="/login">
      <p className="opacity-70 mb-[2rem]">Kami akan mengirimkan OTP untuk mengatur ulang kata sandi anda</p>
      <form onSubmit={handleSubmit(handleOTP)}>
        <InputLabel id="email-form-reset-password" aria-label="email-form-reset-password" type="email" name="email" isLogin={true} label="Email" placeholder="Masukkan email anda" register={register} error={errors.email?.message} />
        <ButtonClick id="btn-submit" aria-label="btn-submit-form" label="Lupa Password" className="w-full h-[3.25rem] bg-[#293066] hover:bg-[#293066] text-white mt-[2.5rem] mb-3" />
      </form>
      {errorMessage && <p className="text-[#FC544B] text-center font-base text-base">{errorMessage}</p>}
    </LayoutLogin>
  );
}

export default ForgotPasswordPage;
