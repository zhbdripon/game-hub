import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data: genres } = useGenres();

  return genres?.find((item) => item.id === id);
};

export default useGenre;
