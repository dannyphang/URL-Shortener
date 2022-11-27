import * as React from "react";
import "./App.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import InputURL from "./component/Input/InputURL";
import NavBar from "./component/NavBar/NavBar";
import ResultTable from "./component/Table/ResultTable";
import useBlobity from "blobity/lib/useBlobity";

function App() {
  useBlobity({
    zIndex: 10000,
    opacity: 0.5,
    dotColor: "rgb(59, 89, 153)",
    color: "rgb(59, 89, 153)",
    radius: 10,
    fontSize: 14,
    fontColor: "rgb(255, 255, 255)",
    magnetic: false,
    mode: "bouncy",
  });

  const defaultTheme = createTheme({
    type: "default",
    theme: {
      colors: {
        color1: "red",
      },
      fonts: {
        mono: "Menlo, monospace",
        courier: "Courier, monospace",
        anonymous: "'Anonymous Pro', monospace",
      },
    },
  });

  return (
    <NextUIProvider theme={defaultTheme}>
      <div
        className="App"
        style={{
          minWidth: "650px",
        }}
      >
        <NavBar />
        <div
          style={{
            width: "70%",
            marginLeft: "15%",
          }}
        >
          <InputURL />
          <ResultTable />
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
