import axiosWithConfig, { externalAxiosWithConfig } from "../axiosWithConfig";

export const getVolunteerVacancies = async (pageIndex, pageSize, title) => {
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
    const response = await axiosWithConfig.get(
      `/volunteer-vacancies?title=${title}`
    );
    return response.data;
  } catch (error) {}
};

export const addVolunteerVacancy = async ({ ...data }) => {
  console.log({ ...data });
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

export const editVolunteerVacancy = async (id, { ...data }) => {
  try {
    const response = await axiosWithConfig.put(
      `/volunteer-vacancies/${id}`,
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

export const deleteVolunteerVacancy = async (id) => {
  try {
    const response = await axiosWithConfig.delete(`/volunteer-vacancies/${id}`);
    return response.data.message;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateStatusVolunteerVacancy = async (id, status, reason) => {
  try {
    const response = await axiosWithConfig.patch(`/volunteer-vacancies/${id}`, {
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

export const getVolunteerRegistrants = async (vacancyId) => {
  try {
    const response = await axiosWithConfig.get(
      `/volunteer-vacancies/${vacancyId}/registrants`
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
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
