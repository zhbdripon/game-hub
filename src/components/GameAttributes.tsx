import { Game } from "@/entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Score">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genre">
        {game.genres?.map((g) => (
          <Text key={g.id}>{g.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publisher">
        {game.publishers?.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
