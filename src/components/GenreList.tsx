import useGenres from "@/hook/useGenres";
import { getOptimizeImageUrl } from "@/services/image-url";
import { HStack, Image, List } from "@chakra-ui/react";

const GenreList = () => {
  const { data: genres } = useGenres();
  return (
    <List.Root variant="plain">
      {genres.map((genre) => (
        <List.Item key={genre.id} paddingY={1}>
          <HStack>
            <Image src={getOptimizeImageUrl(genre.image_background)} boxSize="32px" borderRadius={8} />
            {genre.name} 
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
