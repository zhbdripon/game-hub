import ms from "ms";

import genres from "@/data/genres";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Genre } from "../entities/Genre";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () => {
  const { data } = useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    initialData: genres,
    staleTime: ms('24h')
  });

  return { data: data?.results };
};

export default useGenres;
