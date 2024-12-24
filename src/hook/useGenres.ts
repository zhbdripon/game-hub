import apiClient, { ListApiResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}
const useGenres = () => {
  const fetchQuery = () => {
    return apiClient
      .get<ListApiResponse<Genre>>("/genres")
      .then((res) => res.data);
  };

  const { data } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchQuery,
  });

  return { data: data?.results };
};

export default useGenres;
