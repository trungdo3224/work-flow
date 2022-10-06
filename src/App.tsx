import { AppContainer } from "./App.styles";
import AddNewItemButton from "./components/AddNewItem/AddItemButton";
import Card from "./components/Card/Card";
import Column from "./components/Column/Column";
import Navbar from "./components/Layout/Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      <AppContainer>
        <Column title="Todo">
          <Card text="Generate app scaffold" />
        </Column>
        <Column title="In Progress">
          <Card text="Learn Typescript" />
        </Column>
        <Column title="Done">
          <Card text="Begin to use static typing" />
        </Column>
        <AddNewItemButton toggleButtonText="+ Add another list" onAdd={console.log} />
      </AppContainer>
    </>
  );
}

export default App;
