import { Btn, Inner, Text } from './styles/button.styled'

function Button({ className, text, textSize='12px', icon, path }) {
    
    const content = (
        <Inner>
            {text && <Text size={textSize}>{text}</Text>}
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
