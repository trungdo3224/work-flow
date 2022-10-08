import { AppContainer } from "./App.styles";
import AddNewItemButton from "./components/AddNewItem/AddItemButton";
import Column from "./components/Column/Column";
import Navbar from "./components/Layout/Navbar";
import { addList } from "./state/actions";

import { useAppState } from "./state/AppStateContext";
import CustomDragLayer from "./components/CustomDragLayer/CustomDragLayer"

function App() {
  const { lists, dispatch } = useAppState();
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      <AppContainer>
        <CustomDragLayer />
        {lists.map((list) => (
          <Column text={list.text} key={list.id} id={list.id}/>
        ))}

        <AddNewItemButton
          toggleButtonText="+ Add another list"
          onAdd={text => dispatch(addList(text))}
        />
      </AppContainer>
    </>
  );
}

export default App;
