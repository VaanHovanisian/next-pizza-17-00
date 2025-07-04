import { ApiRoutes } from "./constans";
import { axsiosInstance } from "./instences";

export const getProducts = async (search: string) => {
  return (
    await axsiosInstance.get(ApiRoutes.PRODUCTS, {
      params: { search },
    })
  ).data;
};
