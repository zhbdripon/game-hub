import { Grid, GridItem, Show } from "@chakra-ui/react"
import { useEffect, useState } from "react"


function App() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth])

  return (
    <Grid
      h="100vh"
      templateRows={{ base: "repeat(2, 1fr)" }}
      templateColumns={{ base: "repeat(4, 1fr)" }}
      gap={1}
    >
      <GridItem background="red" rowSpan={1} colSpan={4}>
        <p>navbar</p>
      </GridItem>
      <Show when={width >= 992}>
        <GridItem background="blue" rowSpan={1} colSpan={[0, null, null, 2]} >
          <p>aside</p>
        </GridItem>
      </Show>
      <GridItem background="green" rowSpan={1} colSpan={width > 992 ? 2 : 4}>
        <p>main</p>
      </GridItem>
    </Grid>
  )
}

export default App
