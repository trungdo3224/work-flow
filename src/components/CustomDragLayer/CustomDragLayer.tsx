import { useDragLayer } from "react-dnd";
import Column from "../Column/Column";
import { CustomDragLayerContainer } from "./CustomDragLayer.styles";
import { DragPreviewWrapper } from "../../App.styles";
import { useAppState } from "../../state/AppStateContext";

const CustomDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
  }));
  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        <Column id={draggedItem.id} text={draggedItem.text} isPreview />
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
};

export default CustomDragLayer;
