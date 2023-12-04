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

export const getVolunterById = async (id) => {
  try {
    const response = await axiosWithConfig.get(`/volunteer-vacancies/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addVolunter = async ({ ...data }) => {
  try {
    const response = await axiosWithConfig.post(
      "/volunteer-vacancies",
      { ...data },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data.message;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const editVolunter = async (id, { ...data }) => {
  try {
    const response = await axiosWithConfig.put(
      `/volunteer-vacancies/${id}`,
      ...data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data.message;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteVolunter = async (id) => {
  try {
    const response = await axiosWithConfig.delete(`/volunteer-vacancies/${id}`);
    return response.data.message;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateStatusVolunter = async (id, status) => {
  try {
    const response = await axiosWithConfig.patch(`/volunteer-vacancies/${id}`, {
      status,
    });
    return response.data.message;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
