import {
    StyledProduct,
    Img,
    Col,
    Header,
    Title,
    Footer,
} from './styles/Product.styled'

function Product({ className, img, header, name, footer }) {
    return (
        <StyledProduct className={className}>
            <Img src={img} />
            <Col>
                {header && <Header>{header}</Header>}
                <Title>{name}</Title>
                {footer && <Footer>{footer}</Footer>}
            </Col>
        </StyledProduct>
    )
}

export default Product
