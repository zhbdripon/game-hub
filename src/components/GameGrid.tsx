import { SimpleGrid, Text } from "@chakra-ui/react";

import { GameQuery } from "@/App";
import useGames from "@/hook/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (!games) {
    return null;
  }

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid columns={[1, 1, 2, 3, 4]} gap={6} paddingY={3}>
      {isLoading &&
        skeletonIds.map((item) => (
          <GameCardContainer key={item}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {games.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
