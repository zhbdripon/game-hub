import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import usePlatform from "@/hook/usePlatform";
import usePlatforms from "@/hook/usePlatforms";
import useGameQueryStore from "@/store";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data: platforms } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

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
              onClick={() => setPlatformId(platform.id)}
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
