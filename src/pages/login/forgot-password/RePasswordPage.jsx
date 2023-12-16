import { InputLabel } from "@/components/input-with-label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LayoutLogin } from "@/components/card-login";
import iconEyeClose from "@/assets/logos/icon-eye-close.svg";
import iconEyeOpen from "@/assets/logos/icon-eye-open.svg";
import { ButtonClick } from "@/components/button";
import { ResetPassword } from "@/utils/api/auth/forget-password/api";
import { ConfirmationPassword } from "@/utils/api/auth/forget-password";
import { useToken } from "@/utils/context/token";

function RePasswordPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [changeIcon, setChangeIcon] = useState(false);
  const { changeToken } = useToken();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: zodResolver(ConfirmationPassword),
  });

  async function handleRepassword(data) {
    const { password } = data;
    try {
      await ResetPassword(password);
      changeToken();
      navigate("/lupa-password-sukses");
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
    <LayoutLogin label="Raih Peduli - Lupa Password" route="/otp-password" id="raih-peduli-tittle">
      <p className="opacity-70 my-[1.25rem]">Silahkan buat Password Baru.</p>

      <form aria-label="form-input" onSubmit={handleSubmit(handleRepassword)}>
        <div className="relative">
          <InputLabel id="password" aria-label="password" label="Password" type={showPassword ? "text" : "password"} isLogin={true} placeholder="Masukkan password anda" name="password" register={register} error={errors.password?.message} />
          <img src={changeIcon ? iconEyeOpen : iconEyeClose} alt="iconeye" className="absolute right-[3%] top-[-4%] translate-y-[300%] cursor-pointer" onClick={toggleShowPassword} />
        </div>

        <div className="relative mb-[2.5rem]">
          <InputLabel
            id="confirm-password"
            label="Confirm Password"
            isLogin={true}
            aria-label="confirm-password"
            type={showPassword ? "text" : "password"}
            placeholder="Konfirmasi password anda"
            name="repassword"
            register={register}
            error={errors.repassword?.message}
          />
          <img src={changeIcon ? iconEyeOpen : iconEyeClose} alt="iconeye" className="absolute right-[3%] top-[-4%] translate-y-[300%] cursor-pointer" onClick={toggleShowPassword} />
        </div>

        <ButtonClick id="btn-submit" aria-label="btn-submit-form" label="Kirim" className="w-full h-[3.25rem] bg-[#293066] hover:bg-[#293066] text-white" />
      </form>
      {errorMessage && <p className="text-[#FC544B] text-center mt-[-25px] font-semibold text-base">{errorMessage}</p>}
    </LayoutLogin>
  );
}

export default RePasswordPage;
