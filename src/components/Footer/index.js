import { StyledFooter, Column, Title, Text } from './styles/Footer.styled'
import Social from '../Social'

function Footer() {
    return (
        <StyledFooter>
            <Column>
                <Title>ABOUT US</Title>
                <Text>
                    Quisque elementum nibh at dolor a eleifend libero pharetra.
                    Mau
                </Text>
                <Social />
            </Column>
        </StyledFooter>
    )
}

export default Footer
