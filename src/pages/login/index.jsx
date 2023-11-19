import { ButtonClick } from "@/components/button";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useToken } from "@/utils/context/token";
import { loginSchema, userLogin } from "@/utils/api/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputLabel } from "@/components/input-with-label";
import iconEyeClose from "@/assets/logos/icon-eye-close.svg";
import iconEyeOpen from "@/assets/logos/icon-eye-open.svg";
import { LayoutLogin } from "@/components/card-login";
function Login() {
  const { changeToken } = useToken();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [changeIcon, setChangeIcon] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  async function handleLogin(data) {
    try {
      const result = await userLogin(data);
      changeToken(JSON.stringify(result));
      navigate("/dashboard");
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    setChangeIcon(!changeIcon);
  };

  return (
    <LayoutLogin
    label="Raih Peduli - Login"
    id="raih-peduli-tittle"
    route="/">
      <form aria-label="form-input" onSubmit={handleSubmit(handleLogin)}>

        {/* input username */}
        <InputLabel
          id="username"
          aria-label="username"
          label="Username"
          type="text"
          isLogin={true}
          placeholder="Masukkan username anda"
          name="username"
          register={register}
          error={errors.username?.message}
        />

        {/* input password */}
        <div className="flex justify-between items-center font-bold text-[14px]">
          <label htmlFor="password">Password</label>
          <Link to="/lupa-password" id="forgot-password">
            Lupa Password ?
          </Link>
        </div>
        <div className="relative mb-[75px]">
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
          className="w-[457px] h-[56px] bg-[#293066] hover:bg-[#293066] text-white"
        />
      </form>
      {errorMessage && (
        <p className="text-[#FC544B] text-center mt-[-25px] font-semibold text-base">
          {errorMessage}
        </p>
      )}
    </LayoutLogin>
  );
}

export default Login;
