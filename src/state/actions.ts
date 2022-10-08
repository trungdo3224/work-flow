import { DragItem } from "../DragItem";

export type Action =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "ADD_TASK";
      payload: { text: string; listId: string };
    }
  | {
      type: "MOVE_ITEM";
      payload: {
        draggedId: string;
        hoverId: string;
      };
    }
  | {
      type: "SET_DRAGGED_ITEM";
      payload: DragItem | null;
    }
  | {
      type: "MOVE_TASK";
      payload: {
        draggedItemId: string;
        hoverItemId: string | null;
        sourceColumnId: string;
        targetColumnId: string;
      }
    };

export const addTask = (text: string, listId: string): Action => ({
  type: "ADD_TASK",
  payload: {
    text,
    listId,
  },
});

export const addList = (text: string): Action => ({
  type: "ADD_LIST",
  payload: text,
});

export const moveList = (draggedId: string, hoverId: string): Action => ({
  type: "MOVE_ITEM",
  payload: {
    draggedId,
    hoverId,
  },
});

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
  type: "SET_DRAGGED_ITEM",
  payload: draggedItem,
});

export const moveTask = 
(draggedItemId: string, 
  hoverItemId: string | null, 
  sourceColumnId:string, 
  targetColumnId:string,):Action => ({
    type: "MOVE_TASK",
    payload: {
      draggedItemId,
      hoverItemId,
      sourceColumnId,
      targetColumnId
    }
  })