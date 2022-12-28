import { Button } from "@nextui-org/react";
import { Clipboard, AddFour } from "@icon-park/react";
import { useState, createContext } from "react";
// import { getTitleAtUrl } from "get-title-at-url";

const URLContext = createContext({ oriUrl: "" });

const CreateButton = (props: { inputUrl: any }) => {
  const initUrl = {
    oriUrl: "",
    newUrl: "",
    title: "",
    IP: "",
  };

  const [url, setUrl] = useState(initUrl);

  const getTitle = (url: string) => {
    return url;
    // return await getTitleAtUrl(url);
  };

  const createShotenUrl = () => {
    // console.log("inputUrl: " + props.inputUrl.url);

    var data = {
      oriUrl: props.inputUrl.url,
      title: getTitle(props.inputUrl.url),
      IP: "",
    };

    // console.log("data title: " + data.title);
  };

  async function paste() {
    const text = await navigator.clipboard.readText();
    console.log(text);
  }

  return (
    <URLContext.Provider value={url}>
      <Button.Group
        aria-label="button group"
        light
        size="md"
        css={{
          marginRight: "5px",
        }}
      >
        <Button
          aria-label="button"
          data-blobity-tooltip="Paste.."
          onPress={paste}
        >
          <Clipboard
            size="20"
            style={{
              marginTop: "7px",
            }}
          />
        </Button>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              borderLeft: "1.5px solid #b5b5b5",
              backgroundColor: "#b5b5b5",
              height: "70%",
            }}
          ></span>
        </div>
        <Button
          aria-label="button"
          data-blobity-tooltip="SHORTEN IT!"
          onPress={createShotenUrl}
        >
          <AddFour
            theme="outline"
            size="20"
            strokeLinejoin="bevel"
            strokeLinecap="square"
            style={{
              marginTop: "7px",
            }}
          />
        </Button>
      </Button.Group>
    </URLContext.Provider>
  );
};

export default CreateButton;
