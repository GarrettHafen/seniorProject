import axios from "axios";

export default () => {
  const instance = axios.create({
    baseURL: "https://hrfamilyranch.netlify.com/.netlify/functions/"
  });
  return instance;
};
