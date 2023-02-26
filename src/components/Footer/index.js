import {
    StyledFooter,
    Inner,
    Column,
    Title,
    Text,
    Tags,
    Copyright,
} from './styles/Footer.styled'
import Container from '../Container'
import Social from '../Social'
import Product from '../Product'
import Tag from '../Tag'
import Field from '../Field'
import Button from '../Button'
import Icon from '../Icon'

const tags = [
    'Bag classic',
    'Converse',
    'Diesel fit',
    'Jack and Jones jeans',
    'Jumper leather',
    'Lee levis man nypd party',
    'Pink River',
    'Bag classic',
    'Converse',
    'Diesel fit',
    'Jack and Jones jeans',
    'Jumper leather',
    'Lee levis man nypd party',
    'Pink River',
]

function Footer() {
    return (
        <StyledFooter>
            <Container>
                <Inner>
                    <Column>
                        <Title>ABOUT US</Title>
                        <Text>
                            Quisque elementum nibh at dolor a eleifend libero
                            pharetra. Mau
                        </Text>
                        <Social />
                    </Column>
                    <Column>
                        <Title>LATEST NEWS</Title>
                        <Product />
                    </Column>
                    <Column>
                        <Title>TAGS</Title>
                        <Tags>
                            {tags?.map((item, index) => (
                                <Tag
                                    key={index}
                                    label={item}
                                />
                            ))}
                        </Tags>
                    </Column>
                    <Column>
                        <Title>SIGNUP FOR NEWSLETTER</Title>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed
                        </Text>
                        <Field
                            placeholder='Enter your E-Mail'
                            button={
                                <Button icon={<Icon iconName='icon-next' />} />
                            }
                        />
                    </Column>
                </Inner>
            </Container>
            <Copyright>
                <Container>
                    <Text>Copyright 2017 Shoppint ui kit template</Text>
                </Container>
            </Copyright>
        </StyledFooter>
    )
}

export default Footer
