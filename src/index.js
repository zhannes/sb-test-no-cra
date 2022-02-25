import React, { useState } from "react";
import { render } from "react-dom";
import Button from "@mui/material/Button";
//import { Button } from "@material-ui/core";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";

export function MyButton({ children, ...props }) {
  return (
    <Button variant="contained" {...props}>
      {children}
    </Button>
  );
}

function App() {
  const [toggle, setToggle] = useState(false);
  const onClick = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <MyButton onClick={onClick}>{toggle ? "Clicked" : "Click Me"}</MyButton>
    </>
  );
}

render(<App />, document.getElementById("root"));
