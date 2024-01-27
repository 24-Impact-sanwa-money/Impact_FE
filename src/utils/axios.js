import axios from "axios";
import { getToken } from "./Token";

const BASE_URL = `https://apiv2.mycut4cut.click`;

export const instance = axios.create({
  baseURL: BASE_URL
});

instance.interceptors.request.use(
  async function (config) {
    const { accessToken } = getToken();
    //토큰 매니저 함수를 통해 토큰을 가져옵니다.

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    } // 헤더에 토큰을 넣어주는 작업입니다.

    return config;
  },
  function (error) {
    return Promise.reject(error);
    //에러를 반환해줍니다.
  }
);

export default instance;
