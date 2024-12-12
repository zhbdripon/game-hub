import { Badge } from '@chakra-ui/react'

interface CriticScore {
  score: number
}

const CriticScore = ({ score }: CriticScore) => {

  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red'
  return (
    <Badge 
      colorPalette={color}
      fontSize={14}
      paddingX={2}
    >
      {score}
    </Badge>
  )
}

export default CriticScore