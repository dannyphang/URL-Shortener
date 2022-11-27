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
import { FcGoogle } from "react-icons/fc";
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
  // var helper: string | undefined;

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
      <Button light auto onClick={handler}>
        Login
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text h3>{password}</Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              marginBottom: "1.7rem",
            }}
          >
            <Input
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
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Link color="text" href="#">
              <Text size={14}>Forget Password</Text>
            </Link>
          </Row>

          <GoogleLogin />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={loginValidation}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
