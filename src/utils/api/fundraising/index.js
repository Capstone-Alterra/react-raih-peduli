import axiosWithConfig from "../axiosWithConfig";

export const getFundraises = async () => {
  try {
    const response = await axiosWithConfig.get("/fundraises");
    console.log("test", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getDetailFundraise = async (id) => {
  try {
    const response = await axiosWithConfig.get(`/fundraises${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const addFundraise = async ({ accessToken, ...data }) => {
  try {
    const response = await axiosWithConfig.post(
      "/fundraise",
      { ...data },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(response.data.message);
  } catch (error) {
    console.error(error);
  }
};
