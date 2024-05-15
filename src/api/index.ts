import axios from "axios";

const URL = "https://api.themoviedb.org/3";

export const getMovieList = async (page: number) => {
  const response = await axios.get(`${URL}/movie/popular`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY_AUTH,
      language: "ko-kr",
      page: page,
    },
  });
  return response.data;
};

export const getMovieDetail = async (id: number) => {
  const response = await axios.get(`${URL}/movie/${id}`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY_AUTH,
      language: "ko-kr",
      page: 1,
    },
  });
  return response.data;
};

export const getDetailMovie = async (movieId: number) => {
    const response = await axios.get(`${URL}/movie/${movieId}`, {
        params: {
            api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY_AUTH,
            language: "ko-kr",
            page: 1,
        },
    });
    return response.data;
};

export const getCredits = async (movieId: number) => {
  const response = await axios.get(`${URL}/movie/${movieId}/credits`, {
      params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY_AUTH,
          language: "ko-kr",
          page: 1,
      },
  });
  return response.data;
};