import React from "react";
import {
  Modal,
  Input,
  Row,
  Checkbox,
  Button,
  Text,
  Link,
} from "@nextui-org/react";
import { EmailSecurity, LockOne, Woman } from "@icon-park/react";
import GoogleLogin from "../Button/GoogleLogin";
import TypingText from "../Label/TypingText";

export default function LoginModal() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      <Button aria-label="button" flat auto onClick={handler}>
        Sign In
      </Button>
      <Modal
        aria-label="modal"
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text h3 aria-label="text">
              {TypingText(
                "Sign InSign InSign InSign InSign InSign InSign InSign InSign InSign InSign In",
                40,
                Infinity
              )}
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body aria-label="modal body">
          <Input
            aria-label="input"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Username"
            contentLeft={<Woman theme="outline" size="20" fill="#333" />}
          />
          <Input
            aria-label="input"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={
              <EmailSecurity theme="outline" size="20" fill="#333" />
            }
          />
          <Input
            aria-label="input"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Input.Password
            aria-label="input password"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<LockOne theme="outline" size="20" fill="#333" />}
          />
          <Input.Password
            aria-label="input password"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Confirm Password"
            contentLeft={<LockOne theme="outline" size="20" fill="#333" />}
          />

          <GoogleLogin />
        </Modal.Body>
        <Modal.Footer aria-label="modal footer">
          <Button
            aria-label="button"
            auto
            flat
            color="error"
            onClick={closeHandler}
          >
            Close
          </Button>
          <Button aria-label="button" auto onClick={closeHandler}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
