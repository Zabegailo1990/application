import { StyledTicker, Img } from './styles/Ticker.styled'
import Marquee from 'react-fast-marquee'

function Ticker({ className, img }) {
    return (
        <StyledTicker className={className}>
            <Marquee>
                <Img src={img} />
            </Marquee>
        </StyledTicker>
    )
}

export default Ticker
