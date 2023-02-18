import styled from 'styled-components'

export const StyledIcon = styled.svg`
    width: ${({ widthSize }) => widthSize || '12px'};
    height: ${({ heightSize }) => heightSize || '12px'};
    display: block;
    fill: ${({ colorIcon }) => colorIcon};
`
