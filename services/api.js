import axios from "axios";

// Demo REST API used by the fetch/axios exercises. Override with EXPO_PUBLIC_API_URL.
const API_URL = (process.env.EXPO_PUBLIC_API_URL || "https://jsonplaceholder.typicode.com").replace(/\/$/, "");
const TODOS_LIMIT = 10;

// axios
export const fetchTodosAxios = async () => {
  const response = await axios.get(`${API_URL}/todos`, { params: { _limit: TODOS_LIMIT } });
  return response.data;
};

// fetch
export const fetchTodosFetch = async () => {
  const response = await fetch(`${API_URL}/todos?_limit=${TODOS_LIMIT}`);
  if (!response.ok) {
    throw new Error("Erreur serveur");
  }
  return response.json();
};
