import { Input } from "@nextui-org/react";
import { useState, useContext, createContext } from "react";
import CreateButton from "../Button/CreateButton";

const InputURL = () => {
  const initUrl = {
    oriUrl: "",
    newUrl: "",
    title: "",
    IP: "",
  };
  const URLContext = createContext(CreateButton);
  const urlInput = useContext(URLContext);

  const [url, setUrl] = useState({ initUrl });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUrl({ ...url, [name]: value });
    console.log(urlInput);
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
      value={url.initUrl.oriUrl}
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
};

export default InputURL;
