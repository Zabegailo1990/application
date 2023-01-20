import {
    StyledPrice,
    Label,
    Img,
    Discount,
    Col,
    OldPrice,
    CurrentPrice,
} from '../styles/Price.styled'

function Price() {
    return (
        <StyledPrice>
            <Label>
                <Img src="../media/img/label.svg" />
                <Discount>50%</Discount>
            </Label>
            <Col>
                <OldPrice>$2434</OldPrice>
                <CurrentPrice>$1434</CurrentPrice>
            </Col>
        </StyledPrice>
    )
}

export default Price
