import axios, { AxiosRequestConfig } from "axios";

export interface ListApiResponse<T> {
  count: number;
  results: T[];
  next?: string | null;
  previous?: string | null;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "ed43b537e80c49cd97a9afc9352b7c1a",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<ListApiResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = () => {
    return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
  };

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
