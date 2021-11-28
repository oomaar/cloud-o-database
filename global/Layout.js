import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from ".";

export const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};