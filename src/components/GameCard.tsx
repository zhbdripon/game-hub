import { Game } from '@/hook/useGames'
import { Card, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'

interface GameCardProps {
  game: Game
}

const GameCard = ({game}: GameCardProps) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image}/>
      <Card.Body>
        <Heading fontSize="xl">{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
      </Card.Body>
    </Card.Root>
  )
}

export default GameCard