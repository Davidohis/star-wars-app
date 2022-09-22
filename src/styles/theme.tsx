import { ThemeProvider } from "styled-components";
import theme from "../themes/default";
import GlobalStyle from "./globals";

const Theme = ({ children }: any) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Theme;
