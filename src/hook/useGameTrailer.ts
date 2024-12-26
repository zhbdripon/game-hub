import { GameTrailer } from '@/entities/GameTrailer'
import APIClient from '@/services/api-client'
import { useQuery } from '@tanstack/react-query'


const useGameTrailer = (uniqueKey: number | string) => {
  const apiClient = new APIClient<GameTrailer>(`games/${uniqueKey}/movies`)

  return useQuery({
    queryKey: ['game_trailer', uniqueKey],
    queryFn: apiClient.getAll
  })
}

export default useGameTrailer