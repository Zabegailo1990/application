import { StyledTag, Label } from './styles/Tag.styled'

function Tag({ label }) {
    return (
        <StyledTag>
            <Label>{label}</Label>
        </StyledTag>
    )
}

export default Tag
