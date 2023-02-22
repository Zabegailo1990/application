import { StyledFooter, Inner, Title, Text } from './styles/Footer.styled'
import Social from '../Social'

function Footer() {
    return (
        <StyledFooter>
            <Inner>
                <Title>ABOUT US</Title>
                <Text>
                    Quisque elementum nibh at dolor a eleifend libero pharetra.
                    Mau
                </Text>
                <Social />
            </Inner>
        </StyledFooter>
    )
}

export default Footer
