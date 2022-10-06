import styled from "styled-components";

export const NewItemFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 300px;
`;

export const NewItemButton = styled.div`
  text-align: center;
  padding: 6px 12px;
  border: none;
  border-radius: 3px;
  box-shadow: none;
  background-color: #5acc44;
  color: #fff;
`;

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
  height: 50px;
  outline: none;
`;
