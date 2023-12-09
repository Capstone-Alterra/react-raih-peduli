import axiosWithConfig from "../axiosWithConfig";

export const getVolunteer = async (pageIndex, pageSize, title) => {
  try {
    if (title) {
      const response = await axiosWithConfig.get(`/volunteer-vacancies?&title=${title}`);
      return response.data;
    } else {
      const response = await axiosWithConfig.get(
        `/volunteer-vacancies?page=${pageIndex}&page_size=${pageSize}`
      );
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTotalDataVolunteer = async () => {
  try {
    const response = await axiosWithConfig.get("/volunteer-vacancies");
    const { total_data } = response.data.pagination;
    return total_data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return 0;
  }
};
