import React, { useState } from "react";
import { useFocus } from "../../utils/useFocus";
import {
  NewItemFormContainer,
  NewItemButton,
  NewItemInput,
} from "./NewItemForm.styles";

type NewItemFormProps = {
  onAdd(text: string): void;
};

const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [input, setInput] = useState("");
  const inputRef = useFocus();
  const setInputHandle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };
  const onAddHandle = () => {
    onAdd(input);
  };
  return (
    <NewItemFormContainer>
      <NewItemInput placeholder="Add a task..." ref={inputRef} value={input} onChange={setInputHandle} />
      <NewItemButton onClick={onAddHandle}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  );
};

export default NewItemForm;
