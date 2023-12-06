import axiosWithConfig from "../axiosWithConfig";

export const getTotalDataCustomer = async () => {
  try {
    const response = await axiosWithConfig.get("/users");
    const { total_data } = response.data.pagination;
    return total_data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return 0;
  }
};

export const getCustomers = async (pageIndex, pageSize, fullname) => {
  try {
    if (fullname) {
      const response = await axiosWithConfig.get(`/users?fullname=${fullname}`);
      return response.data;
    } else {
      const response = await axiosWithConfig.get(
        `/users?page=${pageIndex}&page_size=${pageSize}&fullname=${fullname}`
      );
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getDetailCustomer = async (id) => {
  try {
    const response = await axiosWithConfig.get(`/users/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addCustomer = async ({ ...data }) => {
  try {
    const response = await axiosWithConfig.post(
      "/users",
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
export const editCustomer = async (id, { ...data }) => {
  try {
    const response = await axiosWithConfig.put(
      `/users/${id}`,
      {
        ...data,
      },
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

export const deleteCustomer = async (id) => {
  try {
    const response = await axiosWithConfig.delete(`/users/${id}`);
    return response.data.message;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateStatusCustomer = async (id, status) => {
  try {
    const response = await axiosWithConfig.patch(`/users/${id}`, {
      status,
    });
    return response.data.message;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
