import styled from 'styled-components';
import { DragPreviewContainer } from '../../App.styles';

export const ColumnContainer = styled(DragPreviewContainer)`
    flex-grow: 0;
    width: 300px;
    min-height: 40px;
    /* margin-right: 20px; */
    border-radius: 3px;
    padding: 8px 8px;
    background-color: #ebecf0;
    cursor: pointer;
`

export const ColumnTitle = styled.div`
    padding: 6px 16px 12px;
    font-weight: bold;
`