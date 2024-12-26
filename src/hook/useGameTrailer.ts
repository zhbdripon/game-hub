import { useQuery } from '@tanstack/react-query'
import APIClient, { ListApiResponse } from '@/services/api-client'
import { GameTrailer } from '@/entities/GameTrailer'


const useGameTrailer = (uniqueKey: number | string) => {
  const apiClient = new APIClient<ListApiResponse<GameTrailer>>(`games/${uniqueKey}/movies`)

  return useQuery({
    queryKey: ['game_trailer', uniqueKey],
    queryFn: apiClient.get
  })
}

export default useGameTrailer