import { StyledDate } from './styles/Date.styled'

function Date({ className, date }) {
    return <StyledDate className={className}>{date}</StyledDate>
}

export default Date
