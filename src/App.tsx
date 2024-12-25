import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

const LARGE_SCREEN_WIDTH = 992;

export interface GameQuery {
  genre_id?: number;
  platform_id?: number;
  ordering: string;
  search: string;
}

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    ordering: "",
  } as GameQuery);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <Grid
      height="100vh"
      templateRows={{ base: "repeat(10, 1fr)" }}
      templateColumns={{ base: "200px repeat(9, 1fr)" }}
      gap={1}
    >
      <GridItem rowSpan={1} colSpan={10}>
        <Navbar
          onSearchGames={(search) => setGameQuery({ ...gameQuery, search })}
        />
      </GridItem>
      <Show when={width >= LARGE_SCREEN_WIDTH}>
        <GridItem rowSpan={9} colSpan={1} paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genre_id}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre_id: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem
        rowSpan={9}
        colSpan={width >= LARGE_SCREEN_WIDTH ? 9 : 10}
        paddingX={3}
      >
        <GameHeading gameQuery={gameQuery} />
        <HStack paddingY={3} marginBottom={2}>
          <PlatformSelector
            selectedPlatformId={gameQuery.platform_id}
            onPlatformSelect={(platform) =>
              setGameQuery({ ...gameQuery, platform_id: platform?.id })
            }
          />
          <SortSelector
            selectedSortOrder={gameQuery.ordering}
            onSelectSortOrder={(order) =>
              setGameQuery({ ...gameQuery, ordering: order })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
