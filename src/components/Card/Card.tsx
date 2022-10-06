import { CardContainer } from "./Card.styles"

type CardProps = {
  text:string
}

const Card = ({text}:CardProps) => {
  return (
    <CardContainer>
        {text}
    </CardContainer>
  )
}

export default Card
