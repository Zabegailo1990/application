import {
    StyledGuarantee,
    Img,
    Title,
    DecorText,
    Text,
} from './styles/Guarantee.styled'

function Guarantee({ className }) {

    return (
        <StyledGuarantee className={className}>
            <Img src="../media/img/guarantee.jpg" alt="" />
            <Title>
                <DecorText>free</DecorText> guarantee
            </Title>
            <Text>
                Stylish bicycle mechanic doing his professional work in workshop
            </Text>
        </StyledGuarantee>
    )
}

export default Guarantee
