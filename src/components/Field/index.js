import { StyledField, Input } from './styles/Field.styled'

function Field({ button, placeholder }) {
    return (
        <StyledField>
            <Input placeholder={placeholder} />
            {button}
        </StyledField>
    )
}

export default Field
