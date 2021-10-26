import { LayoutContainer } from "../Containers";

const App = ({ Component, pageProps }) => {
  return (
    <LayoutContainer>
      <Component {...pageProps} />
    </LayoutContainer>
  );
};

export default App;