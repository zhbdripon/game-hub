import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/api-client";
import { Game } from "@/entities/Game";


const useGame = (slug: string) => {
  const apiClient = new APIClient<Game>(`/games/${slug}`);
  return useQuery({
    queryKey: ["game", slug],
    queryFn: apiClient.get,
  });
};

export default useGame;
