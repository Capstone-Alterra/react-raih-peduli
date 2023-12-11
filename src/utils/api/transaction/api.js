import axiosWithConfig from "../axiosWithConfig";

export const getTransaction = async (pageIndex, pageSize, title) => {
  try {
    if (title) {
      const response = await axiosWithConfig.get(`/transactions?&title=${title}`);
      return response.data;
    } else {
      const response = await axiosWithConfig.get(
        `/transactions?page=${pageIndex}&page_size=${pageSize}&title=${title}`
      );
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getDetailTransaction = async (id) => {
  try {
    const response = await axiosWithConfig.get(`/transactions/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
