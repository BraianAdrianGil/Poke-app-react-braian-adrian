import { axiosInstance } from "../api/axiosInstance";

export const getAllTypes = async () => {
  try {
    const res = await axiosInstance.get("type/");

    return res.data.results.map((type) => ({
      name: type.name,
      id: type.url.split("/")[type.url.split("/").length - 2],
    }));
  } catch (error) {
    console.error(error);
  }
};
