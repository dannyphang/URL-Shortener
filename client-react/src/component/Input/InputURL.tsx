import { Input } from "@nextui-org/react";
import { useState } from "react";
import CreateButton from "../Button/CreateButton";

export default function InputURL() {
  const [url, setUrl] = useState({ oriUrl: "" });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUrl({ ...url, [name]: value });
    // console.log(url);
  };

  return (
    <Input
      aria-label="input"
      clearable
      size="xl"
      rounded
      contentRightStyling={false}
      placeholder="Type your URL..."
      name="url"
      value={url.oriUrl}
      onChange={handleInputChange}
      contentRight={<CreateButton inputUrl={url}></CreateButton>}
      contentLeft={
        <div
          style={{
            width: "20px",
          }}
        ></div>
      }
      contentLeftStyling={false}
      css={{
        width: "100%",
        margin: "20px 0",
      }}
    />
  );
}
