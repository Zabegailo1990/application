import Button from '../Button'
import { useState } from 'react'
import {
    StyledCard,
    Promo,
    Img,
    Category,
    Title,
    Row,
    Buttons,
} from './styles/Card.styled'
import Price from './components/Price'
import Availability from './components/Availability'
import Icon from '../Icon'

function Card({ img, category, title, count }) {

    const [isActiveFavorite, setFavorite] = useState(false)

    return (
        <StyledCard>
            <Promo>
                <Img src={img} alt="" />
            </Promo>
            <Category>{category}</Category>
            <Title>{title}</Title>
            <Row>
                <Price />
                <Availability count={count} />
            </Row>
            <Buttons>
                <Button
                    widthFull={true}
                    reverse={true}
                    icon={<Icon iconName="icon-cart" />}
                    text="ADD TO CART"
                />
                <Button
                    onClick={() => setFavorite(!isActiveFavorite)}
                    theme='#e8ebf1'
                    icon={
                        <Icon
                            iconName="icon-heart"
                            color={isActiveFavorite ? 'red' : '#818690'}
                        />
                    }
                />
            </Buttons>
        </StyledCard>
    )
}

export default Card
