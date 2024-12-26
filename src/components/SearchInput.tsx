import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "@/components/ui/popover";
import useGames from "@/hook/useGames";
import useGameQueryStore from "@/store";
import { Input, List, PopoverArrow, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router";
import { InputGroup } from "./ui/input-group";

const SearchInput = () => {
  const location = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  const [showSearchPopover, setShowSearchPopover] = useState(false);

  const setGameSearch = useGameQueryStore((s) => s.setSearchText);

  const { data: gameSearchData } = useGames();
  const searchResults = gameSearchData?.pages[0].results || [];
  const isGameDetailsPage = location.pathname.includes("/games");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
      setGameSearch("");
    }
  }, [location.pathname]);

  function debounce(func: Function, wait: number) {
    let timeout: NodeJS.Timeout;

    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, wait);
    };
  }

  const onInputChange = (e: InputEvent) => {
    const inputElement = e.target as HTMLInputElement;
    setGameSearch(inputElement.value);
    setShowSearchPopover(
      Boolean(
        isGameDetailsPage && inputElement.value && searchResults?.length > 0
      )
    );
  };

  const onSearchGameSelect = () => {
    setShowSearchPopover(false);
    setGameSearch("");
    if (inputRef.current) inputRef.current.value = "";
  };

  const searchBar = (
    <InputGroup startElement={<BsSearch />} width="full">
      <Input
        ref={inputRef}
        borderRadius={20}
        placeholder="Search games..."
        onChange={debounce(onInputChange, 300)}
        onBlur={() => setShowSearchPopover(false)}
      />
    </InputGroup>
  );

  const popoverBody = (
    <List.Root variant="plain">
      {searchResults?.map((game) => (
        <List.Item key={game.id}>
          <Link to={`/games/${game.slug}`} onClick={onSearchGameSelect}>
            <Text textStyle="lg">{game.name}</Text>
          </Link>
        </List.Item>
      ))}
    </List.Root>
  );

  return (
    <>
      <PopoverRoot
        open={showSearchPopover}
        autoFocus={false}
        positioning={{ sameWidth: true }}
      >
        <PopoverTrigger asChild>{searchBar}</PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>{popoverBody}</PopoverBody>
        </PopoverContent>
      </PopoverRoot>
    </>
  );
};

export default SearchInput;
