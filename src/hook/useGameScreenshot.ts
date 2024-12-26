import { GameScreenshot } from "@/entities/GameScreenshot";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useGameScreenshot = (id: number) => {
  const apiClient = new APIClient<GameScreenshot>(`games/${id}/screenshots`);

  return useQuery({
    queryKey: ["game_screenshots", id],
    queryFn: apiClient.getAll,
  });
};

export default useGameScreenshot;
