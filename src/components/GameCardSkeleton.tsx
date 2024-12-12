import { Card, Skeleton } from '@chakra-ui/react'
import { SkeletonText } from './ui/skeleton';

const GameCardSkeleton = () => {
  return (
    <Card.Root >
      <Skeleton height="100px"/>
      <Card.Body>
        <SkeletonText/>
      </Card.Body>
    </Card.Root>
  )
}

export default GameCardSkeleton;