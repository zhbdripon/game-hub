import useGenre from "@/hook/useGenre";
import usePlatform from "@/hook/usePlatform";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const { platformId, genreId } = gameQuery;
  const selectedPlatform = usePlatform(platformId);
  const selectedGenre = useGenre(genreId);

  const header = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return <Heading size="5xl">{header}</Heading>;
};

export default GameHeading;
