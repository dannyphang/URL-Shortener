import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import LoginModal from "../Modal/LoginModal";
import SignUpModal from "../Modal/SignUpModal";
import LoggedInIcon from "./LoggedInIcon";

export default function NavBar() {
  var loginDisplay: string = "hidden";
  var userDisplay: string = "hidden";
  var isLoggedIn: boolean = false;

  if (!isLoggedIn) {
    loginDisplay = "flex";
    userDisplay = "none";
  } else {
    loginDisplay = "none";
    userDisplay = "flex";
  }

  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Content
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            display: loginDisplay,
          }}
        >
          <Navbar.Item>
            <LoginModal></LoginModal>
          </Navbar.Item>
          <Navbar.Item>
            <SignUpModal></SignUpModal>
          </Navbar.Item>
        </div>
        <div
          style={{
            display: userDisplay,
          }}
        >
          <LoggedInIcon />
        </div>
      </Navbar.Content>
    </Navbar>
  );
}
