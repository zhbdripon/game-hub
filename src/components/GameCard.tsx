import { Game } from '@/hook/useGames'
import { Card, Heading, Image } from '@chakra-ui/react'

interface GameCardProps {
  game: Game
}

const GameCard = ({game}: GameCardProps) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image}/>
      <Card.Body>
        <Heading fontSize="xl">{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  )
}

export default GameCard