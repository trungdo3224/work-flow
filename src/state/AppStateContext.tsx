import { createContext, useContext, FC, Dispatch } from "react";
import { useImmerReducer } from "use-immer";
import { DragItem } from "../DragItem";
import { Action } from "./actions";
import { appStateReducer, AppState, List, Task } from "./appStateReducer";

const appData: AppState = {
  // appData will be use as initial state of the reducer and have type AppState
  lists: [],
  draggedItem: null,
};

type AppStateContextProps = {
  // define context props types
  lists: List[];
  draggedItem : DragItem | null;
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};

const AppStateContext = createContext<AppStateContextProps>( // init App Context with createContext from react
  {} as AppStateContextProps
);

type AppStateProviderProps = {
  children?: any;
};

export const AppStateProvider: FC<AppStateProviderProps> = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists, draggedItem } = state;
  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider
      value={{
        draggedItem,
        lists,
        getTasksByListId,
        dispatch,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
