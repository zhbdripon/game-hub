import { GameQuery } from "@/App";
import useGenre from "@/hook/useGenre";
import usePlatform from "@/hook/usePlatform";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { platform_id, genre_id } = gameQuery;
  const selectedPlatform = usePlatform(platform_id);
  const selectedGenre = useGenre(genre_id);

  const header = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return <Heading size="5xl">{header}</Heading>;
};

export default GameHeading;
