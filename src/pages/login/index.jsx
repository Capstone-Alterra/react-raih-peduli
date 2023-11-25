import { ButtonClick } from "@/components/button";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { login, loginSchema } from "@/utils/api/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputLabel } from "@/components/input-with-label";
import iconEyeClose from "@/assets/logos/icon-eye-close.svg";
import iconEyeOpen from "@/assets/logos/icon-eye-open.svg";
import { LayoutLogin } from "@/components/card-login";
import { useToken } from "@/utils/context/token";
function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [changeIcon, setChangeIcon] = useState(false);

  const { changeToken } = useToken();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  async function handleLogin(data) {
    const { email, password } = data;
    try {
      const res = await login(email, password);
      changeToken(res.data.access_token);
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    setChangeIcon(!changeIcon);
  };

  return (
    <LayoutLogin label="Raih Peduli - Login" id="raih-peduli-tittle" route="/">
      <form aria-label="form-input" onSubmit={handleSubmit(handleLogin)}>
        {/* input username */}
        <InputLabel
          id="email"
          aria-label="email"
          label="Email"
          type="text"
          isLogin={true}
          placeholder="Masukkan email anda"
          name="email"
          register={register}
          error={errors.email?.message}
        />

        {/* input password */}
        <div className="flex justify-between items-center font-bold text-sm">
          <label htmlFor="password">Password</label>
          <Link to="/lupa-password" id="forgot-password">
            Lupa Password ?
          </Link>
        </div>
        <div className="relative mb-[2.5rem]">
          <InputLabel
            id="password"
            isLogin={true}
            aria-label="password"
            type={showPassword ? "text" : "password"}
            placeholder="Masukkan password anda"
            name="password"
            register={register}
            error={errors.password?.message}
          />
          <img
            src={changeIcon ? iconEyeOpen : iconEyeClose}
            alt="iconeye"
            className="absolute right-[3%] top-[-6%] translate-y-[100%] cursor-pointer"
            onClick={toggleShowPassword}
          />
        </div>

        <ButtonClick
          id="btn-submit"
          aria-label="btn-submit-form"
          label="Login"
          className="w-full h-[3.25rem] bg-[#293066] hover:bg-[#293066] text-white mb-3"
        />
      </form>
      {errorMessage && (
        <p className="text-[#FC544B] text-center font-base text-base">
          {errorMessage}
        </p>
      )}
    </LayoutLogin>
  );
}

export default Login;
