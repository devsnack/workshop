import axios from "axios";

const URLS = {
  getRecipies: "https://forkify-api.herokuapp.com/api/search?q=",
};

export const getRecipes = (value) => {
  return axios.get(URLS.getRecipies + value);
};
