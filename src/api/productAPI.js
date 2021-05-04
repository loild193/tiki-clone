import axiosClient from "./axiosClient";

const productAPI = {
  getProducts: page => {
    const url = "/products";
    const params = {
      _page: page,
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