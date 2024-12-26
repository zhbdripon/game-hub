import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";

export const LARGE_SCREEN_WIDTH = 992;

function homepage() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <Grid templateColumns={{ base: "200px 1fr" }} gap={1}>
      <Show when={width >= LARGE_SCREEN_WIDTH}>
        <GridItem colSpan={1} paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem colSpan={{lg: 1, base: 2}} paddingX={3}>
        <GameHeading />
        <HStack paddingY={3} marginBottom={2}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default homepage;
