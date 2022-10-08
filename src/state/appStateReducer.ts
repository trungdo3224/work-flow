import { Action } from "./actions";
import { nanoid } from "nanoid";

import { findItemIndexById, moveItem } from "../utils/arrayUtils";
import { DragItem } from "../DragItem";

export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
  draggedItem: DragItem | null;
};

export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case "ADD_LIST": {
      draft.lists.push({ // use draft instead of state because draft could be understand as a mutable object
        id: nanoid(),
        text: action.payload,
        tasks: [],
      }); // immer will handle and return new state after our logic action 
      // executed so we don't have to return it manually.
      break;
    }
    case "ADD_TASK": {
      const {text, listId} = action.payload;
      const targetListIndex = findItemIndexById(draft.lists, listId);
      draft.lists[targetListIndex].tasks.push({
        id:nanoid(),
        text: text,
      })
      break
    }
    case "MOVE_ITEM": {
      const {draggedId, hoverId} = action.payload;
      const dragIndex = findItemIndexById(draft.lists, draggedId);
      const hoverIndex = findItemIndexById(draft.lists,hoverId);
      draft.lists = moveItem(draft.lists, dragIndex, hoverIndex)
      break
    }
    case "SET_DRAGGED_ITEM": {
      draft.draggedItem = action.payload
      break
    }
    default: {
      break;
    }
  }
};