import { AppContainer } from "./App.styles";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Column from "./components/Column/Column";
import Navbar from "./components/Layout/Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <AppContainer>
        <Column title="Title">
          <Card />
        </Column>
      </AppContainer>
    </>
  );
}

export default App;
