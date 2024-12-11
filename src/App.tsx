import { Grid, GridItem, Show } from "@chakra-ui/react"
import { useEffect, useState } from "react"

import Navbar from "./components/Navbar";


function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth])

  return (
    <Grid
      templateRows={{ base: "repeat(2, 1fr)" }}
      templateColumns={{ base: "repeat(4, 1fr)" }}
      gap={1}
    >
      <GridItem rowSpan={1} colSpan={4}>
        <Navbar />
      </GridItem>
      <Show when={width >= 992}>
        <GridItem rowSpan={1} colSpan={2} >
          <p>aside</p>
        </GridItem>
      </Show>
      <GridItem rowSpan={1} colSpan={width >= 992 ? 2 : 4}>
        <p>main</p>
      </GridItem>
    </Grid>
  )
}

export default App
