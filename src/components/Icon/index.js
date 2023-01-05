import { StyledIcon } from "./styles/Icon.styled"

function Icon({ iconName, className, color }) {
    return (
        <StyledIcon className={className} theme={color}>
            <use xlinkHref={`../media/sprite/icons-sprite.svg#${iconName}`} />
        </StyledIcon>
    )
}

export default Icon
