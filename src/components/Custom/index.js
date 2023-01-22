import { StyledCustom, Img, Inner, Title, Decor, Text } from './styles/Custom.styled'
import Button from '../Button'

function Custom() {
    return (
        <StyledCustom>
            <Img src="../media/img/custom.jpg" alt="" />
            <Inner>
                <Title>
                    <Decor>the custom</Decor> collection
                </Title>
                <Text>
                    Carefully Curated Build Kits, Paired with Premium Frames,
                    Delivered at Unbelievable Prices
                </Text>
                <Button text="VIEW COLLECTION" path={'#'}/>
            </Inner>
        </StyledCustom>
    )
}

export default Custom
