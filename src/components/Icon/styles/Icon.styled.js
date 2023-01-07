import styled from 'styled-components'

export const StyledIcon = styled.svg`
    width: 16px;
    height: 16px;
    display: block;
    fill: ${({theme}) => theme.length > 0 ? theme : '#282828'};
`
