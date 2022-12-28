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
    <Navbar aria-label="navbar" isBordered variant="sticky">
      <Navbar.Content
        aria-label="navbar content"
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
          <Navbar.Item
            aria-label="navbar item"
            css={{
              marginRight: "10px",
            }}
          >
            <LoginModal></LoginModal>
          </Navbar.Item>
          <Navbar.Item aria-label="navbar item">
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
