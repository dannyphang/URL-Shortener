import { Table, Button, Link } from "@nextui-org/react";
import { Copy } from "@icon-park/react";
import { HiQrCode } from "react-icons/hi2";

export default function ResultTable() {
  const title = "Google";
  const link = "https://www.google.com";
  return (
    <Table>
      <Table.Header>
        <Table.Column>Title</Table.Column>
        <Table.Column>Link</Table.Column>
        <Table.Column width={"30px"}>Action</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{title}</Table.Cell>
          <Table.Cell
            css={{
              padding: "0 10px",
            }}
          >
            <Link block color="primary" href={link} target="_blank">
              {link}
            </Link>
          </Table.Cell>
          <Table.Cell
            css={{
              paddingLeft: "5px",
            }}
          >
            <Button.Group>
              <Button
                auto
                light
                icon={
                  <Copy
                    size="20"
                    style={{
                      marginTop: "7px",
                    }}
                  />
                }
                data-blobity-tooltip="Copy.."
              />
              <Button
                auto
                light
                icon={
                  <HiQrCode
                    size="20"
                    style={{
                      marginBottom: "2px",
                    }}
                  />
                }
                data-blobity-tooltip="QR"
              />
            </Button.Group>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
