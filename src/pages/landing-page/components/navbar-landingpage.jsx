// eslint-disable-next-line no-unused-vars
import React from "react"
import LogoRaihPeduli from "@/assets/logos/raihpeduli.svg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NavbarLandingPage() {
    const navigate = useNavigate();
    const handleToLogin = () => {
      navigate("/login");
    };

return(
<nav
className="w-full bg-white"
style={{
  height: "90px",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
}}
>
<div
  className="flex"
  style={{ margin: "20px 90px", width: "auto", height: "40px" }}
>
  <a href="/">
    <div className="flex" style={{ alignItems: "center" }}>
      <img src={LogoRaihPeduli} style={{ marginRight: "10px", width:"50px" }} />
      <p
        className="text-[#293066]"
        style={{ fontFamily: "Helvetica", fontSize: "23px" }}
      >
        <span className="font-bold">RAIH</span> PEDULI
      </p>
    </div>
  </a>

  <div className="flex justify-center items-center" style={{ flex: 1, justifyContent: "center" }}>
    <a
      href="#tentang-kami"
      className="text-[#293066]"
      style={{
        fontFamily: "Helvetica",
        fontSize: "12px",
        paddingTop: "10px",
        margin: "0 10px",
      }}
    >
      TENTANG KAMI
    </a>
    <a
      href="#donasi"
      className="text-[#293066]"
      style={{
        fontFamily: "Helvetica",
        fontSize: "12px",
        paddingTop: "10px",
        margin: "0 10px",
      }}
    >
      DONASI
    </a>
    <a
      href="#relawan"
      className="text-[#293066]"
      style={{
        fontFamily: "Helvetica",
        fontSize: "12px",
        paddingTop: "10px",
        margin: "0 10px",
      }}
    >
      RELAWAN
    </a>
    <a
      href="#berita"
      className="text-[#293066]"
      style={{
        fontFamily: "Helvetica",
        fontSize: "12px",
        paddingTop: "10px",
        margin: "0 10px",
      }}
    >
      BERITA
    </a>
  </div>

  <div>
    <Button
      id="toLogin"
      className="bg-[#293066] text-white w-[110px]"
      onClick={handleToLogin}
    >
      Masuk
    </Button>
  </div>
</div>
</nav>
)}