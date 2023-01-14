import { StyledCustom, Img, Title, Decor, Text } from './styles/Custom.styled'
import Button from '../Button'

function Custom() {
    return (
        <StyledCustom>
            <Img src="../media/img/custom.jpg" alt="" />
            <Title>
                <Decor>the custom</Decor> collection
            </Title>
            <Text>
                Carefully Curated Build Kits, Paired with Premium Frames,
                Delivered at Unbelievable Prices
            </Text>
            <Button text="VIEW COLLECTION" path={'#'}/>
        </StyledCustom>
    )
}

export default Custom
