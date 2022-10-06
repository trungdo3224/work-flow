import { FC } from "react";
import AddNewItemButton from "../AddNewItem/AddItemButton";
import Card from "../Card/Card";
import { ColumnContainer, ColumnTitle } from "./Column.styles";

type ColumnProps = {
  title: string;
  children?: React.ReactNode;
};

const Column: FC<ColumnProps> = ({ title, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {children}
      <AddNewItemButton
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
