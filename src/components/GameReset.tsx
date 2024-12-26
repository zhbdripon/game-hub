import useGameQueryStore from "@/store";
import { Button } from "@chakra-ui/react";

const GameReset = () => {
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const ordering = useGameQueryStore((s) => s.gameQuery.ordering);
  const genre = useGameQueryStore((s) => s.gameQuery.genreId);

  const showClearFilter = platformId || ordering || genre;

  if (!showClearFilter) return null;

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => {
        setPlatformId(undefined);
        setSortOrder(undefined);
        setGenreId(undefined);
      }}
    >
      Show All / Reset Filter
    </Button>
  );
};

export default GameReset;
