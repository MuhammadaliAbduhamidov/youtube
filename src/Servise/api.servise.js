import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    order: "date",
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "e367b5f076msh0a93b253b4bcfb4p1efedcjsna452141289b4",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const Apiservise = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data.items;
  },
};
