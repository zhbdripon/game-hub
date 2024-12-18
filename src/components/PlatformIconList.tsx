import { Platform } from "@/hook/useGames";
import { HStack, Icon } from "@chakra-ui/react";

import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { GrStatusUnknown } from "react-icons/gr";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { ReactNode } from "react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: ReactNode } = {
    pc: <FaWindows />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    nintendo: <SiNintendo />,
    mac: <FaApple />,
    linux: <FaLinux />,
    ios: <MdPhoneIphone />,
    web: <BsGlobe />,
    android: <FaAndroid />,
    sega: <SiSega />,
  };

  const getPlatformIcon = (slug: string): ReactNode => {
    if (iconMap.hasOwnProperty(slug)) {
      return iconMap[slug];
    }

    return <GrStatusUnknown />;
  };

  return (
    <HStack spaceY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} color="gray.500">
          {getPlatformIcon(platform.slug)}
        </Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
