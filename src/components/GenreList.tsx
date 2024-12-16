import useGenres, { Genre } from "@/hook/useGenres";
import { getOptimizeImageUrl } from "@/services/image-url";
import { HStack, Image, List, Button } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genres: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres } = useGenres();
  return (
    <List.Root variant="plain">
      {genres.map((genre) => (
        <List.Item key={genre.id}>
          <HStack>
            <Image
              src={getOptimizeImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button variant="plain" onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
