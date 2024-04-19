// src/axios.d.ts
import axios from 'axios';

declare module "./axios" {
  export type AxiosInstance = typeof axios;
  const instance: AxiosInstance;
  export default instance;
}
