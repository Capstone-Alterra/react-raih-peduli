import axiosWithConfig from "../axiosWithConfig";

export const getTotalDataCustomer = async () => {
    try {
      const response = await axiosWithConfig.get('/users');
      const { total_data } = response.data.pagination;
      return total_data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return 0;
    }
  };