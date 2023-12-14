import axiosWithConfig, { externalAxiosWithConfig } from "../axiosWithConfig";

export const getVolunteerVacancies = async (pageIndex, pageSize) => {
  try {
    const response = await axiosWithConfig.get(
      `/volunteer-vacancies?page=${pageIndex}&page_size=${pageSize}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getVolunteerVacancyById = async (id) => {
  try {
    const response = await axiosWithConfig.get(`/volunteer-vacancies/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getVolunteerByTitle = async (title) => {
  try {
    const response = await axiosWithConfig.get(`/volunteer-vacancies?title=${title}`);
    return response.data;
  } catch (error) {
    console.error;
    throw error;
  }
};

export const addVolunteerVacancy = async (data) => {
  try {
    const formData = new FormData();
    for (const key in data) {
      if (data[key]) {
        if (Array.isArray(data[key])) {
          for (let i = 0; i < data[key].length; i++) {
            formData.append(`${key}`, data[key][i]);
          }
        } else {
          formData.append(`${key}`, data[key]);
        }
      }
    }

    await axiosWithConfig.post("/volunteer-vacancies", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return "Berhasil menambah lowongan relawan";
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const editVolunteerVacancy = async (id, data) => {
  try {
    const formData = new FormData();
    for (const key in data) {
      if (data[key]) {
        if (Array.isArray(data[key])) {
          for (let i = 0; i < data[key].length; i++) {
            formData.append(`${key}`, data[key][i]);
          }
        } else {
          formData.append(`${key}`, data[key]);
        }
      }
    }

    await axiosWithConfig.put(`/volunteer-vacancies/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return "Berhasil mengedit lowongan relawan";
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteVolunteerVacancy = async (id) => {
  try {
    await axiosWithConfig.delete(`/volunteer-vacancies/${id}`);
    return "Berhasil menghapus lowongan relawan";
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateStatusVolunteerVacancy = async (id, status, reason) => {
  try {
    await axiosWithConfig.patch(`/volunteer-vacancies/${id}`, {
      status,
      rejected_reason: reason,
    });
    return "Berhasil mengupdate status lowongan relawan";
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSkills = async () => {
  try {
    const response = await axiosWithConfig.get("/skills");
    const data = response.data.data.map((data) => ({
      label: data.name,
      value: data.name,
    }));

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProvinces = async () => {
  try {
    const response = await externalAxiosWithConfig.get("/provinces.json");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getRegencies = async (id) => {
  try {
    const response = await externalAxiosWithConfig.get(`/regencies/${id}.json`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getDistricts = async (id) => {
  try {
    const response = await externalAxiosWithConfig.get(`/districts/${id}.json`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getVillages = async (id) => {
  try {
    const response = await externalAxiosWithConfig.get(`/villages/${id}.json`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getVolunteerRegistrants = async (vacancyId, page, pageSize) => {
  try {
    const response = await axiosWithConfig.get(
      `/volunteer-vacancies/${vacancyId}/registrants?page=${page}&page_size=${pageSize}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getVolunteerRegistrantById = async (vacancyId, volunteerId) => {
  try {
    const response = await axiosWithConfig.get(
      `/volunteer-vacancies/${vacancyId}/registrants/${volunteerId}`
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateStatusVolunteerRegistrant = async (id, volunteerId, status, reason) => {
  try {
    await axiosWithConfig.patch(`/volunteer-vacancies/${id}/registrants/${volunteerId}`, {
      status,
      rejected_reason: reason,
    });
    return "Berhasil mengupdate status pendaftar";
  } catch (error) {
    console.error(error);
    throw error;
  }
};
