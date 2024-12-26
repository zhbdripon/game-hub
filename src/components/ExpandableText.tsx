import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  value: string;
}

const ExpandableText = ({ value }: Props) => {
  const [expand, setExpand] = useState(false);

  if (!value) return null;

  const TEXT_THRESHOLD = 400;
  const isLargeText = value.length > TEXT_THRESHOLD;

  return (
    <Text>
      {isLargeText && !expand ? value.slice(0, TEXT_THRESHOLD)+"... " : value}{" "}
      {isLargeText && (
        <Button
          marginLeft={2}
          size="xs"
          fontWeight="bold"
          colorPalette="yellow"
          onClick={() => setExpand(!expand)}
        >
          {expand ? "Show Less" : "Show More"}
        </Button>
      )}
    </Text>
  );
};

export default ExpandableText;
