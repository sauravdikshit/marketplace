import axiosInstance from "./rest";
import axiosInstanceCategory from "./rest";

export const getProductData = () => axiosInstance.get("/products");
export const getElectronicsData = () => axiosInstanceCategory.get("/products/category/electronics")
export const getJeweleryData = () => axiosInstanceCategory.get("/products/category/jewelery")
export const getMenClothData = () => axiosInstanceCategory.get("/products/category/men's clothing")
export const getWomenClothData = () => axiosInstanceCategory.get("/products/category/women's clothing")

