import {
    StyledPrice,
    Label,
    Image,
    Discount,
    Col,
    OldPrice,
    CurrentPrice,
} from "../styles/Price.styled";

const background = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 34 33"
        width="34"
        height="33"
    >
        <path
            fill="#d24a43"
            d="m27.97855,2.03609l5.84976,14.55386l-5.84976,14.40648q-1.16577,1.98964 -3.13862,1.98964l-20.9839,0q-1.52447,0 -2.69024,-1.3817t-1.16577,-3.2608l0,-23.65463q0,-1.87911 1.16577,-3.2608t2.69024,-1.3817l20.9839,0q1.97285,0 3.13862,1.98964l0,0.00001z"
        />
    </svg>
);

function Price({ currentPrice = 1485, oldPrice = 2845, discount = 50 }) {
    return (
        <StyledPrice>
            {oldPrice && (
                <Label>
                    <Image>{background}</Image>
                    <Discount>{discount}%</Discount>
                </Label>
            )}
            <Col>
                <OldPrice>{oldPrice}$</OldPrice>
                <CurrentPrice>{currentPrice}$</CurrentPrice>
            </Col>
        </StyledPrice>
    );
}

export default Price;
