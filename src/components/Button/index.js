import { Btn, Inner, Text } from './styles/button.styled'

function Button({ className, text, icon, path }) {
    
    const content = (
        <Inner>
            {text && <Text>{text}</Text>}
            {icon}
        </Inner>
    )

    const Tag = path ? 'a' : 'button'

    return (
        <Btn
            as={Tag} 
            href={path} 
            className={className}
        >
            {content}
        </Btn>
    )
}

export default Button
