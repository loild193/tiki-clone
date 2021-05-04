import axiosClient from "./axiosClient";

const productAPI = {
  getProducts: () => {
    const url = "/products";
    const params = {
      _limit: 25,
    }

		return axiosClient.get(url, { params });
  },
  getProductWithId: (id) => {
    const url = "/products";
    const params = {
      id: id,
    };

		return axiosClient.get(url, { params });
  },
};

export default productAPI;