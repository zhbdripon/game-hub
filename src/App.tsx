import { Grid, GridItem, Show } from "@chakra-ui/react"
import { useEffect, useState } from "react"

import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";


function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth])

  return (
    <Grid
      height="100vh"
      templateRows={{ base: "repeat(10, 1fr)" }}
      templateColumns={{ base: "repeat(10, 1fr)" }}
      gap={1}
    >
      <GridItem rowSpan={1} colSpan={10}>
        <Navbar />
      </GridItem>
      <Show when={width >= 992}>
        <GridItem rowSpan={9} colSpan={2}>
          <p>aside</p>
        </GridItem>
      </Show>
      <GridItem rowSpan={9} colSpan={width >= 992 ? 8 : 10}>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
