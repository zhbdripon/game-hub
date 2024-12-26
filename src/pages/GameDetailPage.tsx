import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameScreenshot from "@/components/GameScreenshot";
import GameTrailer from "@/components/GameTrailer";
import useGame from "@/hook/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router";

const GameDetailPage = () => {
  const { id: gameSlug } = useParams();
  const { data: game, isLoading, error } = useGame(gameSlug!);

  if (isLoading) return <Spinner />;
  if (error || !game || !gameSlug) throw Error("Game fetch failed");

  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText value={game.description_raw} />
      <GameAttributes game={game} />
      <GameTrailer gameSlug={gameSlug} />
      <GameScreenshot id={game.id} />
      
    </>
  );
};

export default GameDetailPage;
