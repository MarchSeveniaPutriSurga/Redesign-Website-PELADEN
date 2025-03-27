import axios from "axios";

const API_URL = "http://localhost:8000/api"; // Ganti dengan URL backend kamu

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    throw new Error("Login gagal!");
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};
