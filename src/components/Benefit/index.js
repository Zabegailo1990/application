import { StyledBenefit, Img, Title, Text } from './styles/Benefit.styled'

function Benefit(props) {
    const { img, title, text } = props
    return (
        <StyledBenefit>
            <Img
                src={img}
                alt=''
            />
            <Title>{title}</Title>
            <Text>{text}</Text>
        </StyledBenefit>
    )
}

export default Benefit
