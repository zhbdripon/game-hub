import apiClient, { ListApiResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./useGames";

const usePlatforms = () => {
  const { data } = useQuery({
    queryKey: ["platforms"],
    queryFn: () => {
      return apiClient
        .get<ListApiResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data);
    },
  });

  return { data: data?.results };
};

export default usePlatforms;
