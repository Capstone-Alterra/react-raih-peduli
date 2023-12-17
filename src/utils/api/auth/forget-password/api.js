import axiosWithConfig from "@/utils/api/axiosWithConfig";

export const ForgetPassword = async (email) => {
  try {
    const response = await axiosWithConfig.post("/users/forget-password", { email });
    return response.data;
  } catch (error) {
    throw new Error("Email tidak terdaftar");
  }
};

export const otpVerification = async (otp) => {
  try {
    const response = await axiosWithConfig.post("/users/verify-otp", { otp });
    return response.data;
  } catch (error) {
    throw new Error("Kesalahan saat memverifikasi OTP. Silakan coba lagi nanti.");
  }
};

export const ResetPassword = async (password) => {
  try {
    const email = localStorage.getItem("email");

    if (!email) {
      throw new Error("Email not found in localStorage");
    }

    const response = await axiosWithConfig.post("/users/reset-password", {
      email: email,
      password: password,
    });
    localStorage.removeItem("resetEmail");
    console.log("terkirim");
    return response.data;
  } catch (error) {
    console.error("Gagal mereset kata sandi:", error.message);
    throw new Error("Gagal mereset kata sandi");
  }
};
