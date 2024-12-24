import { GameQuery } from "@/App";
import apiClient, { ListApiResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  const { data, error, isLoading } = useQuery<ListApiResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => {
      return apiClient
        .get<ListApiResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.ordering,
            search: gameQuery.search,
          },
        })
        .then((res) => res.data);
    },
  });

  return { data: data?.results, error, isLoading };
};

export default useGames;
