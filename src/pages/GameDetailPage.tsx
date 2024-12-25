import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { id: gameId } = useParams();

  return <div>GameDetailPage {gameId}</div>;
};

export default GameDetailPage;
