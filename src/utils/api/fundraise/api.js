import axiosWithConfig from "../axiosWithConfig";

export const getAllFundraises = async (pageIndex, pageSize) => {
  try {
    const response = await axiosWithConfig.get(
      `/fundraises?page=${pageIndex}&page_size=${pageSize}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getFundraiseByTitle = async (title) => {
  try {
    const response = await axiosWithConfig.get(`/fundraises?title=${title}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getFundraiseById = async (id) => {
  try {
    const response = await axiosWithConfig.get(`/fundraises/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addFundraise = async ({ ...data }) => {
  try {
    await axiosWithConfig.post(
      "/fundraises",
      { ...data },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return "Berhasil menambah penggalangan dana";
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const editFundraise = async (id, { ...data }) => {
  try {
    await axiosWithConfig.put(
      `/fundraises/${id}`,
      {
        ...data,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return "Berhasil mengedit penggalangan dana";
  } catch (error) {
    console.error(error);
    throw "Gagal mengedit penggalangan dana";
  }
};

export const deleteFundraise = async (id) => {
  try {
    await axiosWithConfig.delete(`/fundraises/${id}`);
    return "Berhasil menghapus penggalangan dana";
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateStatusFundraise = async (id, status, reason) => {
  try {
    await axiosWithConfig.patch(`/fundraises/${id}`, {
      status,
      rejected_reason: reason,
    });
    return "Berhasil mengupdate status penggalangan dana";
  } catch (error) {
    console.error(error);
    throw error;
  }
};
