import axios from "axios";

const baseURLFromEnv = process.env.AXIOS_URL;

export default () => {
  const instance = axios.create({
    baseURL: `${baseURLFromEnv}`
    //can target locally by using npm run lambda-dev and use localhost:port in baseURL
  });
  return instance;
};
