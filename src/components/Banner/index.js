import Icon from '../Icon'
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
                <StyledButton
                    text={buttonText}
                    icon={<Icon iconName={'icon-right'} />}
                    path={'#'}
                />
            </Row>
        </StyledBanner>
    )
}

export default Banner
