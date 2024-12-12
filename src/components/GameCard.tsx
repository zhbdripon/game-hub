import { Game } from '@/hook/useGames'
import { Card, Heading, HStack, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import { getOptimizeImageUrl } from '@/services/image-url'

interface GameCardProps {
  game: Game
}

const GameCard = ({game}: GameCardProps) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={getOptimizeImageUrl(game.background_image)}/>
      <Card.Body>
        <Heading fontSize="xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
          <CriticScore score={game.metacritic}/>
        </HStack>
      </Card.Body>
    </Card.Root>
  )
}

export default GameCard