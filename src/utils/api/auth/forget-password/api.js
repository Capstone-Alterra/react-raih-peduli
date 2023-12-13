import axiosWithConfig from "../../axiosWithConfig";

export const ForgetPassword = async ( email ) => {
    try {
        const response = await axiosWithConfig.post("/users/forget-password", { email });
        return response.data;
    } catch (error) {
        throw new Error("Email belom terdaftar");
    }
}