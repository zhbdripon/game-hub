import { Switch } from "@/components/ui/switch";
import { useColorMode } from "./ui/color-mode";
import { Text } from "@chakra-ui/react";

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch checked={colorMode === "dark"} onChange={toggleColorMode}>
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </Switch>
  );
};

export default ColorModeSwitcher;
