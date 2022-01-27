import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from ".";
import { SessionProvider } from "next-auth/react"

export const Layout = ({ children }) => {
    return (
        <SessionProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </SessionProvider>
    );
};