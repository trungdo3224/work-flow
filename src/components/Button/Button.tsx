import { AddItemButton } from "./Button.styles";

type ButtonProps = {
    dark?: boolean
    children: string,
}

const Button = ({dark, children}:ButtonProps) => {
  return (
    <AddItemButton>
        {children}
    </AddItemButton>
  )
}

export default Button
