import { GameQuery } from "@/App";
import ApiClient, { ListApiResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
  apiClient.setConfig({
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.ordering,
      search: gameQuery.search,
    }
  });

  const { data, error, isLoading } = useQuery<ListApiResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: apiClient.getAll,
  });

  return { data: data?.results, error, isLoading };
};

export default useGames;
