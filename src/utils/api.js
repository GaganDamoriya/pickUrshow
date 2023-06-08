import axios from "axios";

const Base_url = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_KEY;
export const fetchDatafromApi = async (url, params) => {
  const headers = {
    Authorization: `Bearer ${TMDB_TOKEN}`,
  };

  try {
    const response = await axios.get(`${Base_url}${url}`, {
      headers,
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
