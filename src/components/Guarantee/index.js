import {
    StyledGuarantee,
    Img,
    Inner,
    Title,
    DecorText,
    Text,
} from './styles/Guarantee.styled'

function Guarantee({ className }) {
    return (
        <StyledGuarantee className={className}>
            <Img
                src='../media/img/guarantee.jpg'
                alt=''
            />
            <Inner>
                <Title>
                    <DecorText>free</DecorText> guarantee
                </Title>
                <Text>
                    Stylish bicycle mechanic doing his professional work in
                    workshop
                </Text>
            </Inner>
        </StyledGuarantee>
    )
}

export default Guarantee
