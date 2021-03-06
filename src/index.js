import React, { useState } from "react";
import { render } from "react-dom";
import Button from "@mui/material/Button";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";

export const theme = {
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "#fff",
          color: "red",
          borderWidth: "1px",
          borderColor: "blue",
        },
      },
    },
  },
};

const defaultTheme = createTheme(theme); // or your custom theme

export const ThemeProviderComponent = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export function MyButton({ children, ...props }) {
  return (
    <Button variant="outlined" {...props}>
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
    <ThemeProviderComponent>
      <MyButton onClick={onClick}>{toggle ? "Clicked" : "Click Me"}</MyButton>
    </ThemeProviderComponent>
  );
}

render(<App />, document.getElementById("root"));
