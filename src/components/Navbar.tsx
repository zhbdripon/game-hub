import Logo from "@/assets/logo.webp";
import useGameQueryStore from "@/store";
import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";
import SearchInput from "./SearchInput";

interface Props {
  onSearchGames: (search: string) => void;
}

const Navbar = () => {

  return (
    <HStack paddingX={4}>
      <Image src={Logo} width={50} height={50} />
      <SearchInput />
      <ColorModeSwitcher />
    </HStack>
  );
};

export default Navbar;
