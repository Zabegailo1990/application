import {
    StyledList,
    Title,
    Item,
    Img,
    Col,
    Row,
    Name,
} from './styles/List.styled'

function List({ title, img, header, name, footer }) {
    return (
        <StyledList>
            <Title>{title}</Title>
            <Item>
                <Img src={img} />
                <Col>
                    {header && <Row>{header}</Row>}
                    <Name>{name}</Name>
                    {footer && <Row>{footer}</Row>}
                </Col>
            </Item>
        </StyledList>
    )
}

export default List
