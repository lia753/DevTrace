import axios from "axios";

const API = "http://localhost:5000/api/github";

export const getRepository = async (owner, repo) => {
  const response = await axios.get(`${API}/${owner}/${repo}`);
  return response.data;
};