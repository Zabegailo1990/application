import { StyledCategory, Inner, Img, Title } from './styles/Category.styled'

function Category(props) {
    const { className, img, title } = props

    return (
        <StyledCategory className={className}>
            <Img src={img} alt="" />
            <Inner>
                <Title>{title}</Title>
            </Inner>
        </StyledCategory>
    )
}

export default Category
