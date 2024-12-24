import axios, { AxiosRequestConfig } from "axios";

export interface ListApiResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "ed43b537e80c49cd97a9afc9352b7c1a",
  },
});

class APIClient<T> {
  endpoint: string;
  config: AxiosRequestConfig;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.config = {};
  }

  getAll = () => {
    return axiosInstance
      .get<ListApiResponse<T>>(this.endpoint, this.config)
      .then((res) => res.data);
  };

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };

  setConfig = (config: AxiosRequestConfig) => {
    this.config = config
  };
}

export default APIClient;
