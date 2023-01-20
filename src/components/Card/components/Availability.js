import { StyledAvailability, Label } from '../styles/Availability.styled'
import Icon from '../../Icon'

function Availability({ count = 0 }) {

    const statusAvailability = {
        label: count ? 'Available for order' : 'Not available',
        icon: count ? 'icon-checkmark' : 'icon-cancel',
        iconColor: count ? '#79b816' : '#d24a43',
    }

    return (
        <StyledAvailability>
            <Icon
                iconName={statusAvailability.icon}
                color={statusAvailability.iconColor}
            />
            <Label>{statusAvailability.label}</Label>
        </StyledAvailability>
    )
}

export default Availability
