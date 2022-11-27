import { Dropdown, User, Text } from "@nextui-org/react";

export default function LoggedInIcon() {
  var name = "Danny Phang";
  var src = "https://i.pravatar.cc/150?u=a042581f4e29026024d";
  return (
    <Dropdown placement="bottom-left" data-blobity-magnetic="true">
      <Dropdown.Trigger data-blobity-tooltip={name + "..."}>
        <User
          bordered
          src={src}
          name={name}
          style={{
            display: "flex",
          }}
        />
      </Dropdown.Trigger>
      <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
        <Dropdown.Item key="profile" css={{ height: "$18" }}>
          <Text b color="inherit" css={{ d: "flex" }}>
            Signed in as
          </Text>
          <Text b color="inherit" css={{ d: "flex" }}>
            zoey@example.com
          </Text>
        </Dropdown.Item>

        <Dropdown.Item
          key="logout"
          color="error"
          withDivider
          // onClick={!isLoggedIn}
        >
          Log Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
