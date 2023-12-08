import axiosWithConfig from "../axiosWithConfig";

export const getTotalDataNews = async () => {
    try {
      const response = await axiosWithConfig.get('/news');
      const { total_data } = response.data.pagination;
      return total_data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return 0;
    }
  };

export const getNews = async (pageIndex, pageSize, title) => {
  try {
    if (title) {
      const response = await axiosWithConfig.get(`/news?&title=${title}`);
      return response.data;
    } else {
      const response = await axiosWithConfig.get(
        `/news?page=${pageIndex}&page_size=${pageSize}&title=${title}`
      );
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getDetailNews = async (id) => {
  try {
    const response = await axiosWithConfig.get(`/news/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addNews = async ({ ...data }) => {
  try {
    const response = await axiosWithConfig.post(
      "/news",
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
export const editNews = async (id, { ...data }) => {
  try {
    const response = await axiosWithConfig.put(
      `/news/${id}`,
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

export const deleteNews = async (id) => {
  try {
    const response = await axiosWithConfig.delete(`/news/${id}`);
    return response.data.message;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
