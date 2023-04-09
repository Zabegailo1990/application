import Button from "../Button";
import { useState } from "react";
import {
    StyledCard,
    Promo,
    Img,
    Category,
    Title,
    Row,
    Buttons,
} from "./styles/Card.styled";
import Price from "./components/Price";
import Availability from "./components/Availability";
import Icon from "../Icon";
import Rating from "../Rating";

function Card({ img, category, title, count }) {
    const [isActiveFavorite, setFavorite] = useState(false);

    return (
        <StyledCard>
            <Promo>
                <Img src={img} />
            </Promo>
            <Category>{category}</Category>
            <Title>{title}</Title>
            <Rating />
            <Row>
                <Price />
                <Availability count={count} />
            </Row>
            <Buttons className={"buttons"}>
                <Button
                    width={"100%"}
                    reverse={true}
                    icon={<Icon iconName="icon-cart" />}
                    text="ADD TO CART"
                />
                <Button
                    onClick={() => setFavorite(!isActiveFavorite)}
                    theme="#e8ebf1"
                    icon={
                        <Icon
                            iconName="icon-heart"
                            color={isActiveFavorite ? "red" : "#818690"}
                        />
                    }
                />
            </Buttons>
        </StyledCard>
    );
}

export default Card;
