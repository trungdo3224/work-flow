import { useRef } from "react";
import { useDrop } from "react-dnd";
import AddNewItemButton from "../AddNewItem/AddItemButton";
import Card from "../Card/Card";
import { ColumnContainer, ColumnTitle } from "./Column.styles";
import { useAppState } from "../../state/AppStateContext";
import { addTask, moveList } from "../../state/actions";
import { useItemDrag } from "../../utils/useItemDrag";
import { isHidden } from "../../utils/isHidden";

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
    accept: "COLUMN",
    hover() {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) {
          return;
        }
        dispatch(moveList(draggedItem.id, id));
      }
    },
  });
  drag(drop(ref));
  console.log(isPreview)
  return (
    <ColumnContainer
      ref={ref}
      isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
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
