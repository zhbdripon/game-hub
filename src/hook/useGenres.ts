import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () => {
  const { data } = useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
  });

  return { data: data?.results };
};

export default useGenres;
