import { HStack, Image } from "@chakra-ui/react";
import Logo from "@/assets/logo.webp";
import ColorModeSwitcher from "./ColorModeSwitcher";
import SearchInput from "./SearchInput";

interface Props {
  onSearchGames: (search: string) => void;
}

const Navbar = ({ onSearchGames }: Props) => {
  return (
    <HStack paddingX={4}>
      <Image src={Logo} width={50} height={50} />
      <SearchInput onSearchGames={onSearchGames} />
      <ColorModeSwitcher />
    </HStack>
  );
};

export default Navbar;
