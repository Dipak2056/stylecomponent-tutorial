import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyle from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#000",
    footer: "#003333",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Container>
          <h1>Hello world</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
