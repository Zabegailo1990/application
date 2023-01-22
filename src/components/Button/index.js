import { StyledButton, Inner, Text } from './styles/button.styled'

function Button({ className, text, textSize, icon, path, reverse, theme, width, ...props }) {

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
            widthFull={width}
            bg={theme} 
            className={className}
            {...props}
        >
            {content}
        </StyledButton>
    )
}

export default Button
