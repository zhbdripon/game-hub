import useGame from "@/hook/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router";

const GameDetailPage = () => {
  const { id: gameId } = useParams();

  const { data: game, isLoading, error } = useGame(gameId!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw Error("Game fetch failed");

  return (
    <>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
