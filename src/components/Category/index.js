import { StyledCategory, Img, Title } from "./styles/Category.styled"

function Category(props) {
    const { className, img, title } = props

    return (
        <StyledCategory className={className}>
            <Img src={img} alt="" />
            <Title>{title}</Title>
        </StyledCategory>
    )
}

export default Category
