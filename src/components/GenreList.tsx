import useGenres from "@/hook/useGenres";
import { getOptimizeImageUrl } from "@/services/image-url";
import useGameQueryStore from "@/store";
import { Button, Heading, HStack, Image, List, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data: genres } = useGenres();
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

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
                onClick={() => setGenreId(genre.id)}
              >
                <Text
                  fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                >
                  {genre.name}
                </Text>
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
