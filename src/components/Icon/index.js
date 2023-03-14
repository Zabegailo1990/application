import { StyledIcon } from './styles/Icon.styled'
import Sprite from './sprite/icons-sprite.svg'

function Icon({
    className,
    iconName,
    color = '#282828',
    size = [],
    ...props
}) {
    return (
        <StyledIcon
            className={className}
            colorIcon={color}
            widthSize={size[0]}
            heightSize={size[1]}
            {...props}
        >
            <use xlinkHref={`${Sprite}#${iconName}`} />
        </StyledIcon>
    )
}

export default Icon
