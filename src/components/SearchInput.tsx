import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearchGames: (search: string) => void;
}

const SearchInput = ({ onSearchGames }: Props) => {
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
    onSearchGames(inputElement.value);
  };

  return (
    <InputGroup startElement={<BsSearch />} width="full">
      <Input
        borderRadius={20}
        placeholder="Search games..."
        onChange={debounce(onInputChange, 300)}
      />
    </InputGroup>
  );
};

export default SearchInput;
