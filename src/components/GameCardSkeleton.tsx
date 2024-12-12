import { Card, Skeleton } from '@chakra-ui/react'
import { SkeletonText } from './ui/skeleton';

const GameCardSkeleton = () => {
  return (
    <Card.Root width="265px" borderRadius={10} overflow="hidden">
      <Skeleton height="100px"/>
      <Card.Body>
        <SkeletonText/>
      </Card.Body>
    </Card.Root>
  )
}

export default GameCardSkeleton;