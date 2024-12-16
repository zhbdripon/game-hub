import { useEffect, useState } from "react"
import { Grid, GridItem, Show } from "@chakra-ui/react"

import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hook/useGenres";

const LARGE_SCREEN_WIDTH = 992

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth])

  return (
    <Grid
      height="100vh"
      templateRows={{ base: "repeat(10, 1fr)" }}
      templateColumns={{ base: "200px repeat(9, 1fr)" }}
      gap={1}
    >
      <GridItem rowSpan={1} colSpan={10}>
        <Navbar />
      </GridItem>
      <Show when={width >= LARGE_SCREEN_WIDTH}>
        <GridItem rowSpan={9} colSpan={1} paddingX={5}>
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem rowSpan={9} colSpan={width >= LARGE_SCREEN_WIDTH ? 9 : 10}>
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  )
}

export default App
