import React from "react";
import { Modal, Input, Button, Text } from "@nextui-org/react";
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
      <Button aria-label="button" flat auto onPress={handler}>
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
          <Text aria-label="text" size={25} weight="medium">
            {TypingText(
              "Sign InSign InSign InSign InSign InSign InSign InSign InSign InSign InSign In",
              40,
              Infinity
            )}
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
            onPress={closeHandler}
          >
            Close
          </Button>
          <Button aria-label="button" auto onPress={closeHandler}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
