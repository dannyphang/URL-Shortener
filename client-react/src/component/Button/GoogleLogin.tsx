import { Row, Button, Text } from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleLogin() {
  return (
    <div className="OtherLogin">
      <Row>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#ddd",
            flex: 1,
            marginTop: "8px",
          }}
        ></div>
        <span
          style={{
            color: "#888",
            fontSize: "12px",
            padding: "0 16px",
            textTransform: "uppercase",
          }}
        >
          or
        </span>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#dbdbdb",
            flex: 1,
            marginTop: "8px",
          }}
        ></div>
      </Row>

      <Row
        justify="center"
        style={{
          marginTop: "16px",
        }}
      >
        <Button
          bordered
          style={{
            color: "#e5e5e5",
            borderColor: "#e5e5e5",
          }}
        >
          <FcGoogle size="26px" />
          <Text
            size={18}
            h5
            style={{
              marginLeft: "0.5rem",
              marginTop: "7px",
              color: "#555",
              fontWeight: 550,
            }}
          >
            Google
          </Text>
        </Button>
      </Row>
    </div>
  );
}
