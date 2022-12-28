import React, { useCallback, useMemo, useState } from "react";
import {
  Modal,
  Input,
  Row,
  Checkbox,
  Button,
  Text,
  Link,
  useInput,
} from "@nextui-org/react";
import { EmailSecurity, LockOne, Google } from "@icon-park/react";
import GoogleLogin from "../Button/GoogleLogin";

export default function LoginModal() {
  const dummy = [
    {
      email: "dannyphang64@gmail.com",
      password: "123",
    },
    {
      email: "456@gmail.com",
      password: "456",
    },
  ];
  const { value, bindings } = useInput("");
  const [visible, setVisible] = useState(false);
  const [helpertext, setHelperText] = useState("");
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  const [password, setpassword] = useState("");
  const [updated, setUpdated] = useState(password);
  var inputColor: string | undefined;
  var helperText: string | undefined;

  const helper = useMemo(() => {
    if (!value) return;
    return {
      text: helperText,
      color: inputColor,
    };
  }, [value]);

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setpassword(event.target.value);
  };
  const handleClick = () => {
    setUpdated(password);
  };

  const loginValidation = () => {
    const user = dummy.find((user) => user.password === password);
    console.log(password);
    if (user) {
      console.log("correct password");
      setVisible(true);
      // inputColor = undefined;
      helperText = undefined;
    } else {
      console.log("incorrect password");
      setVisible(true);
      // inputColor = "error";
      helperText = "Incorrect password";
      console.log("helperText: " + helperText);
    }
  };

  return (
    <div>
      <Button aria-label="button" light auto onPress={handler}>
        Login
      </Button>
      <Modal
        aria-label="modal"
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header aria-label="modal header">
          <Text id="modal-title" size={18}>
            <Text h3>{password}</Text>
          </Text>
        </Modal.Header>
        <Modal.Body aria-label="modal body">
          <div
            style={{
              marginBottom: "1.7rem",
            }}
          >
            <Input
              aria-label="input"
              clearable
              bordered
              fullWidth
              // color={helper?.color}
              helperText={helper?.text}
              // helperColor="error"
              size="lg"
              placeholder="Email"
              contentLeft={
                <EmailSecurity theme="outline" size="20" fill="#333" />
              }
            />
          </div>
          <div
            style={{
              marginBottom: "1.7rem",
            }}
          >
            <Input.Password
              aria-label="input password"
              id="password"
              clearable
              bordered
              fullWidth
              helperText={helperText}
              // helperColor={inputColor}
              // color={inputColor}
              size="lg"
              placeholder="Password"
              onChange={handleChange}
              value={password}
              contentLeft={<LockOne theme="outline" size="20" fill="#333" />}
            />
          </div>
          <Row aria-label="row" justify="space-between">
            <Checkbox aria-label="checkbox">
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Link
              aria-label="link"
              color="text"
              href="#"
              style={{
                padding: "0px 5px",
              }}
            >
              <Text size={14}>Forget Password</Text>
            </Link>
          </Row>

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
          <Button aria-label="button" auto onPress={loginValidation}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
