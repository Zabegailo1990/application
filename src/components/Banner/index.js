import Icon from '../Icon'
import Button from '../Button'
import {
    StyledBanner,
    Image,
    Row,
    Col,
    Title,
    Offer,
    StyledButton,
} from './styles/Banner.styled'

function Banner({ img, title, offer, buttonText }) {
    
    return (
        <StyledBanner>
            <Image src={img} alt="" />
            <Row>
                <Col>
                    <Title>{title}</Title>
                    <Offer>{offer}</Offer>
                </Col>
                <Button
                    text={buttonText}
                    textSize={'10px'}
                    icon={<Icon iconName={'icon-right'} />}
                    path={'#'}
                />
            </Row>
        </StyledBanner>
    )
}

export default Banner
