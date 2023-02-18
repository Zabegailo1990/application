import {
    StyledLocation,
    Title,
    Address,
    Clock,
    Phone,
    Info,
} from './styles/Location.styled'
import Icon from '../Icon'

function Location({ className, title, address, clock, phone }) {
    return (
        <StyledLocation className={className}>
            <Title>{title}</Title>
            <Address>{address}</Address>
            <Clock>
                <Icon iconName="icon-clock" color="#898e97" />
                <Info>{clock}</Info>
            </Clock>
            <Phone>
                <Icon iconName="icon-phone" color="#898e97" />
                <Info>{phone}</Info>
            </Phone>
        </StyledLocation>
    )
}

export default Location
