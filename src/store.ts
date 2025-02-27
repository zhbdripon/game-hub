import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering?: string;
  search?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (search: string) => void;
  setGenreId: (genreId: number | undefined) => void;
  setPlatformId: (platformId: number | undefined) => void;
  setSortOrder: (sortOrder: string | undefined) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (search) =>
    set((store) => ({ ...store, gameQuery: { search } })),
  setGenreId: (genreId) =>
    set((store) => ({ ...store, gameQuery: { ...store.gameQuery, genreId: genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({
      ...store,
      gameQuery: { ...store.gameQuery, platformId: platformId },
    })),
  setSortOrder: (sortOrder) =>
    set((store) => ({
      ...store,
      gameQuery: { ...store.gameQuery, ordering: sortOrder },
    })),
}));

export default useGameQueryStore;
