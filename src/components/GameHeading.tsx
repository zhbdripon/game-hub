import { GameQuery } from "@/App";
import useGenres from "@/hook/useGenres";
import usePlatforms from "@/hook/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { platform_id, genre_id } = gameQuery;

  const { data: platforms } = usePlatforms();
  const { data: genres } = useGenres();
  const selectedPlatform = platforms?.find((item) => item.id === platform_id);
  const selectedGenre = genres?.find((item) => item.id === genre_id);

  const header = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return <Heading size="5xl">{header}</Heading>;
};

export default GameHeading;
