import { GameQuery } from "@/App"; 
import ApiClient, { ListApiResponse } from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
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
  return useInfiniteQuery<ListApiResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.ordering,
          search: gameQuery.search,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
  });
};

export default useGames;
