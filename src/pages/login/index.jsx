import { ButtonClick } from "@/components/button";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useToken } from "@/utils/context/token";
import { loginSchema, userLogin } from "@/utils/api/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputLabel } from "@/components/input-with-label";

function Login() {

  const {changeToken} = useToken();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
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
  };

  return (
    <div className="flex flex-col items-center justify-center pt-[20px] bg-[#F4F6F9] h-screen">
      <div className="flex flex-col items-center justify-center">
        <img src="/logo-new.svg" alt="logo" className="w-[118px] h-[115px] " />
        <p className="font-normal mb-[30px] text-[28px] text-[#293066]">
          <span className="font-bold">RAIH</span> PEDULI
        </p>
      </div>
      <div className="flex flex-col w-[531px] bg-white">
        <hr className="border-2 border-[#293066] w-full" />

        {/* content login */}
        <div className="ml-[40px] mr-[34px] my-[35px]">
          <Link
            id="btn-back"
            to="/"
            className="flex items-center gap-[10px] mb-[50px] text-[#293066]"
          >
            <img src="/left-arrow.svg" alt="btn-back" className="h-[26px] w-[26px] mt-[2px]"/>
            <p className="text-2xl font-bold">Raih Peduli - Login</p>
          </Link>
          {/* form input */}
          <form aria-label="form-input" onSubmit={handleSubmit(handleLogin)}>
            {/* input username */}
            <InputLabel
              id="username"
              aria-label="username"
              type="text"
              isLogin={true}
              label="Username"
              placeholder="Masukkan username anda"
              name="username"
              register={register}
              error={errors.username?.message}
            />
            
            {/* input password */}
            <div className="flex justify-between items-center font-bold">
              <label htmlFor="password">Password</label>
              <Link to="/" id="forgot-password">Lupa Password ?</Link>
            </div>
            <div className="relative mb-[50px]">
              <InputLabel
                register={register}
                name="password"
                error={errors.password?.message}
                id="password"
                aria-label="password"
                type={showPassword ? "text" : "password"}
                className="mb-[10px]"
                placeholder="Masukkan password anda"
              />
              <img
                src="/icon-eye-vector.svg"
                alt=""
                className="absolute right-[10px] top-[20%] tranlsate-y-[100%] cursor-pointer"
                onClick={toggleShowPassword}
              />
            </div>
            <ButtonClick
              id="btn-submit"
              aria-label="btn-submit-form"
              label="Login"
              className="w-[457px] h-[56px] bg-[#293066] hover:bg-[#293066] text-white mb-[50px]"
            />
          </form>
          {errorMessage && <p className="text-[#FC544B] text-center mt-[-25px] font-semibold text-base">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;
