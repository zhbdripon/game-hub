import useGameQueryStore from "@/store";
import { Button } from "@chakra-ui/react";

const GameReset = () => {
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const ordering = useGameQueryStore((s) => s.gameQuery.ordering);
  const showClearFilter = platformId || ordering;

  if (!showClearFilter) return null;

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => {
        setPlatformId(undefined);
        setSortOrder(undefined);
      }}
    >
      Clear
    </Button>
  );
};

export default GameReset;
