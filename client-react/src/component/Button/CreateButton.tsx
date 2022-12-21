import { Button } from "@nextui-org/react";
import { Clipboard, AddFour } from "@icon-park/react";

export default function CreateButton() {
  return (
    <Button.Group
      aria-label="button group"
      light
      size="md"
      css={{
        marginRight: "5px",
      }}
    >
      <Button aria-label="button" data-blobity-tooltip="Paste..">
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
      <Button aria-label="button" data-blobity-tooltip="SHORTEN IT!">
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
  );
}
