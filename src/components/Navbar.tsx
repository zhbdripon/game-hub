import Logo from "@/assets/logo.webp";
import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router";
import ColorModeSwitcher from "./ColorModeSwitcher";
import SearchInput from "./SearchInput";

interface Props {
  onSearchGames: (search: string) => void;
}

const Navbar = () => {
  return (
    <HStack paddingX={4}>
      <Link to="/">
        <Image src={Logo} height="50px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitcher />
    </HStack>
  );
};

export default Navbar;
