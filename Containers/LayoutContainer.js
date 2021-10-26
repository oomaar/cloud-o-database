import { GlobalStyle } from "../Global";

export const LayoutContainer = ({ children }) => {
    return (
        <div>
            <GlobalStyle />
            {children}
        </div>
    );
};