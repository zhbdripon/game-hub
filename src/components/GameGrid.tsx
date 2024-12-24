import React from "react";
import { Button, SimpleGrid, Text } from "@chakra-ui/react";

import { GameQuery } from "@/App";
import useGames from "@/hook/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGames(gameQuery);
  const skeletonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (!data || !data.pages) {
    return null;
  }
  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} gap={6} paddingY={3}>
        {isLoading &&
          skeletonIds.map((item) => (
            <GameCardContainer key={item}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data?.pages.map((page, index) => {
          return (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          );
        })}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginBottom={3}>
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </Button>
      )}
    </>
  );
};

export default GameGrid;
