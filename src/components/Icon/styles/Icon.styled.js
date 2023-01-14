import styled from 'styled-components'

export const StyledIcon = styled.svg`
    width: 12px;
    height: 12px;
    display: block;
    fill: ${({theme}) => theme.length > 0 ? theme : '#282828'};
`
