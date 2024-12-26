import useGameTrailer from "@/hook/useGametrailer";
import { Box } from "@chakra-ui/react";

interface Props {
  gameSlug: string;
}

const GameTrailer = ({ gameSlug }: Props) => {
  const { data, error, isLoading } = useGameTrailer(gameSlug!);
  const gameTrailers = data?.results;

  if (error || !gameTrailers) return null;

  const randomTrailerIndex = Math.floor(
    Math.random() * (gameTrailers.length || 0)
  );
  const randomGameTrailer = gameTrailers[randomTrailerIndex];

  return (
    <Box>
      <video
        src={randomGameTrailer.data[480]}
        poster={randomGameTrailer.preview}
        controls
      />
    </Box>
  );
};

export default GameTrailer;
