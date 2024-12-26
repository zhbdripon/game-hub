import { useQuery } from "@tanstack/react-query";
import ms from 'ms';

import platforms from "@/data/platforms";
import ApiClient from "@/services/api-client";
import { Platform } from "../entities/Platform";
const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  const { data } = useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    initialData: platforms,
    staleTime: ms('24h'),
  });

  return { data: data?.results };
};

export default usePlatforms;
