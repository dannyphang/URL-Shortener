import { Input } from "@nextui-org/react";
import CreateButton from "../Button/CreateButton";

export default function InputURL() {
  return (
    <Input
      clearable
      size="xl"
      rounded
      contentRightStyling={false}
      placeholder="Type your URL..."
      contentRight={<CreateButton></CreateButton>}
      css={{
        width: "100%",
        margin: "20px 0",
      }}
    />
  );
}
