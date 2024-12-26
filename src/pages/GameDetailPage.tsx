import { useParams } from "react-router";

const GameDetailPage = () => {
  const { id: gameId } = useParams();

  return <div>GameDetailPage {gameId}</div>;
};

export default GameDetailPage;
