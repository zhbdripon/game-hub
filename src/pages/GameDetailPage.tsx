import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import useGame from "@/hook/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router";

const GameDetailPage = () => {
  const { id: gameId } = useParams();
  const { data: game, isLoading, error } = useGame(gameId!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw Error("Game fetch failed");

  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText value={game.description_raw} />
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
