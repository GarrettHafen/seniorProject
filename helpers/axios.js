import axios from "axios";

export default () => {
  const instance = axios.create({
    baseURL: 'https://hrfamilyranch.netlify.com/.netlify/functions'
    //can target locally by using npm run lambda-dev and use localhost:port in baseURL
  });
  return instance;
};
