import { useRef } from "react";
import { useDrop } from "react-dnd";
import AddNewItemButton from "../AddNewItem/AddItemButton";
import Card from "../Card/Card";
import { ColumnContainer, ColumnTitle } from "./Column.styles";
import { useAppState } from "../../state/AppStateContext";
import {
  addTask,
  moveList,
  moveTask,
  setDraggedItem,
} from "../../state/actions";
import { useItemDrag } from "../../utils/useItemDrag";
import { isHidden } from "../../utils/isHidden";
import { DragItem } from "../../DragItem";

type ColumnProps = {
  text: string;
  id: string;
  isPreview?: boolean;
};

const Column = ({ text, id, isPreview }: ColumnProps) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const tasks = getTasksByListId(id);
  const { drag } = useItemDrag({ type: "COLUMN", id, text });
  const [, drop] = useDrop({
    accept: ["COLUMN", "CARD"],
    hover(item: DragItem) {
      if (item.type === "COLUMN") {
        if (!draggedItem) {
          return;
        }
        if (draggedItem.type === "COLUMN") {
          if (draggedItem.id === id) {
            return;
          }
          dispatch(moveList(draggedItem.id, id));
        }
      } else {
        if (draggedItem?.type === "CARD") {
          if (draggedItem.columnId === id) {
            return;
          }
          if (tasks.length) {
            return;
          }
          dispatch(moveTask(draggedItem.id, null, draggedItem.columnId, id));
          dispatch(setDraggedItem({ ...draggedItem, columnId: id }));
        }
      }
    },
  });
  drag(drop(ref));
  return (
    <ColumnContainer
      ref={ref}
      isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} columnId={id} />
      ))}
      <AddNewItemButton
        toggleButtonText="+ Add another task"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
