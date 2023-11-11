import { Button } from "@/components/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
// import { Button } from "@/components/ui/button";
function Login() {
  const navigate = useNavigate();
  async function handleLogin(data) {
    try {
      navigate("/dashboard");
    } catch (error) {
      throw error;
    }
  }
  return (
    <div className="flex flex-col items-center pt-[79px] bg-[#F4F6F9] h-screen">
      <div className="flex flex-col items-center justify-center">
        <img src="/logo-new.svg" alt="logo" className="w-[118px] h-[115px] " />
        <p className="font-normal mb-[50px] text-[28px] text-[#293066]">
          <span className="font-bold">RAIH</span> PEDULI
        </p>
      </div>
      <div className="flex flex-col w-[531px] bg-white">
        <hr className="border-2 border-[#293066] w-full" />

        {/* content login */}
        <div className="ml-[40px] mr-[34px] my-[50px]">
          <Link
            to="/"
            className="flex items-center gap-[10px] mb-[75px] text-[#293066]"
          >
            <img src="/left-arrow.svg" alt="left-arrow" />
            <p className="text-2xl font-bold">Raih Peduli - Login</p>
          </Link>
          {/* form input */}
          <form aria-label="form-login" onSubmit={handleLogin}>
            {/* input username */}
            <label className="pb-4 font-bold" htmlFor="username">
              Username
            </label>
            <Input
              id="username"
              aria-label="username"
              type="text"
              className="mb-[20px]"
              placeholder="Masukkan username anda"
            />
            {/* input password */}
            <div className="flex justify-between items-center pb-4 font-bold">
              <label htmlFor="password">Password</label>
              <Link to="/">Lupa Password ?</Link>
            </div>
            <Input
              id="password"
              aria-label="password"
              type="password"
              className="mb-[75px]"
              placeholder="Masukkan password anda"
            />
            {/* component button sendiri */}
            <Button
              aria-label="btn-submit"
              label="Login"
              width="457px"
              height="56px"
              bgColor="#293066"
              textColor="#FFF"
            />
            {/* button component ui */}
            {/* <Button
            className="w-[457px] h-[56px] bg-[#293066] text-white rounded-xl font-bold text-base"
            type="submit"
            >
            Login
            </Button> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
