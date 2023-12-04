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