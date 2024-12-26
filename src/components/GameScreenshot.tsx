import useGameScreenshot from "@/hook/useGameScreenshot";
import { getOptimizeImageUrl } from "@/services/image-url";
import { Grid, GridItem, Image, Spinner } from "@chakra-ui/react";

interface Props {
  id: number;
}

const GameScreenshot = ({ id }: Props) => {
  const { data, isLoading, error } = useGameScreenshot(id);
  const screenshots = data?.results;

  if (!data || error || !screenshots) return null;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Grid templateColumns={{ lg: "1fr 1fr 1fr", md: "1fr 1fr", base: "1fr" }}>
      {screenshots.map((ss) => (
        <GridItem key={ss.image} colSpan={1}>
          <Image src={getOptimizeImageUrl(ss.image)} padding={1} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default GameScreenshot;
