import { StyledCustomNavigation } from '../styles/CustomNavigation.styled'
import Icon from '../../Icon'

function CustomNavigation({ icons, buttonsClass, buttonsColor, positionNav }) {
    return (
        <StyledCustomNavigation positionNav={positionNav}>
            {icons?.map((item, index) => (
                <Icon
                    iconName={item}
                    color={buttonsColor}
                    className={buttonsClass[index]}
                />
            ))}
        </StyledCustomNavigation>
    )
}

export default CustomNavigation
