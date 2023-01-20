import { StyledButton, Inner, Text } from './styles/button.styled'

function Button({ className, text, textSize, icon, path, reverse, theme, widthFull, ...props }) {

    const content = (
        <Inner reverse={reverse}>
            {text && <Text size={textSize}>{text}</Text>}
            {icon}
        </Inner>
    )

    const Tag = path ? 'a' : 'button'

    return (
        <StyledButton 
            as={Tag} 
            href={path}
            widthFull={widthFull}
            bg={theme} 
            className={className}
            {...props}
        >
            {content}
        </StyledButton>
    )
}

export default Button
