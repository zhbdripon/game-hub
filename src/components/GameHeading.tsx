import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { platform, genre } = gameQuery;

  const header = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return <Heading size="5xl">{header}</Heading>;
};

export default GameHeading;
