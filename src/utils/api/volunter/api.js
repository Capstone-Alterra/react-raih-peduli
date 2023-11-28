import axiosWithConfig from "../axiosWithConfig";

export const getVolunters = async (pageIndex, pageSize, title) => {
  try {
    if (title) {
      const response = await axiosWithConfig.get(`/volunteer-vacancies`);
      return response.data;
    } else {
      const response = await axiosWithConfig.get(
        `/volunteer-vacancies?page=${pageIndex}&page_size=${pageSize}&title=${title}`
      );
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getDetailVolunter = async (id) => {
  try {
    const response = await axiosWithConfig.get(`/volunteer-vacancies/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
