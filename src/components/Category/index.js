import { StyledCategory, Img, Inner, Row, Title, Count } from './styles/Category.styled'

function Category(props) {
    const { className, img, title, link } = props

    return (
        <StyledCategory
            className={className}
            to={link}
        >
            <Img
                src={img}
                alt=''
            />
            <Inner>
                <Row>
                    <Title>{title}</Title>
                </Row>
                <Count>23545</Count>
            </Inner>
        </StyledCategory>
    )
}

export default Category
