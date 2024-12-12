import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hook/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={[1, 1, 2, 3, 4]} columnGap={2} rowGap={2} padding={3}>
        {games.map((game) => {
          return <GameCard key={game.id} game={game}/>
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
