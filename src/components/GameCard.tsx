import { Game } from '@/hook/useGames'
import { Card, Heading, HStack, Image, Skeleton, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import { getOptimizeImageUrl } from '@/services/image-url'

interface GameCardProps {
  game: Game
}

const GameCard = ({game}: GameCardProps) => {

  if (!game)  return;

  return (
    <Card.Root>
      <Image src={getOptimizeImageUrl(game.background_image)}/>
      <Card.Body>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
          <CriticScore score={game.metacritic}/>
        </HStack>
        <Heading fontSize="xl">{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  )
}

export default GameCard