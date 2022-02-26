import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeProvider as Emotion10ThemeProvider } from "emotion-theming";
import { theme } from "../src/index";
import { addDecorator } from "@storybook/react";

/*  setup below is for vanilla Storybook, without React theming add on*/

const defaultTheme = createTheme(theme); //or your custom theme
export const ThemeProviderComponent = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

const withThemeProvider = (Story, context) => {
  return (
    <Emotion10ThemeProvider theme={defaultTheme}>
      <ThemeProvider theme={defaultTheme}>
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
