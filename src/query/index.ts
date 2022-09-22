import axios from "axios";
import { config } from "../utils/config";

const api = axios.create({
  baseURL: config.API_BASE_URL,
});

// Get Film details
export const queryFilms = async () => {
  const response = await api.get(`/films`);

  return response.data;
};

// Get People details
export const queryPeople = async () => {
  const response = await api.get(`/people`);

  return response.data;
};

// Get Species details
export const querySpecies = async () => {
  const response = await api.get(`/species`);

  return response.data;
};

// Get Starships details
export const queryStarships = async () => {
  const response = await api.get(`/starships`);

  return response.data;
};
