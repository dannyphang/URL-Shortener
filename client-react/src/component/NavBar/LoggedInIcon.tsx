import { Dropdown, User, Text } from "@nextui-org/react";

export default function LoggedInIcon() {
  var name = "Danny Phang";
  var src = "https://i.pravatar.cc/150?u=a042581f4e29026024d";
  return (
    <Dropdown
      aria-label="dropdown"
      placement="bottom-left"
      data-blobity-magnetic="true"
    >
      <Dropdown.Trigger
        aria-label="dropdown trigger"
        data-blobity-tooltip={name + "..."}
      >
        <User
          aria-label="user"
          bordered
          src={src}
          name={name}
          style={{
            display: "flex",
          }}
        />
      </Dropdown.Trigger>
      <Dropdown.Menu aria-label="dropdown menu" color="secondary">
        <Dropdown.Item
          aria-label="dropdown item"
          key="profile"
          css={{ height: "$18" }}
        >
          <Text aria-label="text" b color="inherit" css={{ d: "flex" }}>
            Signed in as
          </Text>
          <Text aria-label="text" b color="inherit" css={{ d: "flex" }}>
            zoey@example.com
          </Text>
        </Dropdown.Item>

        <Dropdown.Item
          aria-label="dropdown item"
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
