import platforms from "@/data/platforms";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  const { data } = useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    initialData: platforms,
  });

  return { data: data?.results };
};

export default usePlatforms;
