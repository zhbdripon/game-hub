import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hook/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={[1, 1, 2, 3, 4]} columnGap={2} rowGap={2} padding={3}>
        {isLoading && skeletonIds.map(item => <GameCardSkeleton key={item}/>)}
        {games.map((game) => {
          return <GameCard key={game.id} game={game}/>
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
