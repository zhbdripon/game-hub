import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Platform } from "@/hook/useGames";
import usePlatforms from "@/hook/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onPlatformSelect: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onPlatformSelect, selectedPlatform }: Props) => {
  const { data: platforms } = usePlatforms();

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform ? selectedPlatform.name : "All"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {platforms.map((platform) => {
          return (
            <MenuItem
              key={platform.id}
              value="new-txt"
              onClick={() => onPlatformSelect(platform)}
            >
              {platform.name}
            </MenuItem>
          );
        })}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
