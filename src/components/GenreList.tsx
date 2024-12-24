import useGenres, { Genre } from "@/hook/useGenres";
import { getOptimizeImageUrl } from "@/services/image-url";
import { Button, Heading, HStack, Image, List, Text } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genres: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres } = useGenres();

  if (!genres) return null;

  return (
    <>
      <Heading size="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List.Root variant="plain">
        {genres.map((genre) => (
          <List.Item key={genre.id}>
            <HStack>
              <Image
                objectFit="cover"
                src={getOptimizeImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                variant="plain"
                paddingX="3px"
                onClick={() => onSelectGenre(genre)}
              >
                <Text>{genre.name}</Text>
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
