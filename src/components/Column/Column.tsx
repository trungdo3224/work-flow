import { FC } from 'react';
import Card from "../Card/Card"
import { ColumnContainer, ColumnTitle } from "./Column.styles"

type ColumnProps = {
    title: string;
    children?: React.ReactNode;
}

const Column: FC<ColumnProps> = ({title, children}) => {
  return (
    <ColumnContainer>
        <ColumnTitle>{title}</ColumnTitle>
        {children}
    </ColumnContainer>
  )
}

export default Column;
