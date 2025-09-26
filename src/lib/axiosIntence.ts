import axios from "axios";

export const axiosIntence = axios.create({
  baseURL: `https://posbacknedtest-git-main-somaliatechs-projects.vercel.app/`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
