import { LayoutLogin } from "@/components/card-login";
import { InputLabel } from "@/components/input-with-label";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ButtonClick } from "@/components/button";

const schema = z.object({
  email: z
    .string().min(1, { message: "Email tidak boleh kosong" }).email({ message: "Penggunaan email tidak valid" }),
});

function ForgotPasswordPage() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function handleOTP() {
    try {
      navigate("/otp-password");
    } catch (error) {
      throw error;
    }
  }
  return (
    <LayoutLogin
      label="Raih Peduli - Lupa Password"
      id="raih-peduli-tittle"
      route="/login"
    >
      <p className="opacity-70 mb-[1.25rem]">
        Kami akan mengirimkan OTP untuk mengatur ulang kata sandi anda
      </p>
      <form onSubmit={handleSubmit(handleOTP)}>
        <InputLabel
          id="email-form-reset-password"
          aria-label="email-form-reset-password"
          type="email"
          name="email"
          isLogin={true}
          label="Email"
          placeholder="Masukkan email anda"
          register={register}
          error={errors.email?.message}
        />
        <ButtonClick
          id="btn-submit"
          aria-label="btn-submit-form"
          label="Lupa Password"
          className="w-[28.565rem] h-[3.5rem] bg-[#293066] hover:bg-[#293066] text-white mt-[4rem]"
        />
      </form>
    </LayoutLogin>
  );
}

export default ForgotPasswordPage;
