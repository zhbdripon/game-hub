import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import usePlatforms, { Platform } from "@/hook/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onPlatformSelect: (platform: Platform | null) => void;
  selectedPlatformId: number | undefined;
}

const PlatformSelector = ({ onPlatformSelect, selectedPlatformId }: Props) => {
  const { data: platforms } = usePlatforms();
  const selectedPlatform = platforms?.find(
    (platform) => platform.id === selectedPlatformId
  );

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform ? selectedPlatform.name : "All"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {platforms?.map((platform) => {
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
