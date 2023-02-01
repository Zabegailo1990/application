import Field from '../Field'
import Icon from '../Icon'
import Button from '../Button'
import {
    StyledNewsletter,
    Row,
    Title,
    Decor,
    Img,
    Text,
} from './styles/Newsletter.styled'

function Newsletter() {
    return (
        <StyledNewsletter>
            <Row>
                <Title>
                    signup
                    <Decor> for newsletter</Decor>
                </Title>
                <Img src="../media/img/mail.svg" alt="" />
            </Row>
            <Text>
                Stylish bicycle mechanic doing his professional work in workshop
            </Text>
            <Field
                button={<Button icon={<Icon iconName={'icon-right'} />} />}
                placeholder={'Enter your E-Mail'}
            />
        </StyledNewsletter>
    )
}

export default Newsletter
