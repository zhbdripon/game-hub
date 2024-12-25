import React from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";

import { GameQuery } from "@/App";
import useGames from "@/hook/useGames";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } =
    useGames(gameQuery);
  const skeletonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (!data || !data.pages) {
    return null;
  }
  if (error) return <Text>{error.message}</Text>;

  const itemFetchedCount = data.pages.reduce(
    (sum, page) => (sum += page.results.length),
    0
  );

  console.log(isLoading)

  return (
    <InfiniteScroll
      dataLength={itemFetchedCount}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
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
    </InfiniteScroll>
  );
};

export default GameGrid;
