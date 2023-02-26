import styled from 'styled-components'

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({widthFull}) => widthFull || 'fit-content'};
    padding: 12px;
    background-color: ${({bg}) => bg || '#ffde00'};
    border-radius: 25px;
`

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({reverse}) => reverse ? 'row-reverse' : 'row'};
    column-gap: 6px;
`

export const Text = styled.p`
    font-family: 'Montserrat';
    font-size: ${({size}) => size || '12px'};
    font-weight: 700;
    line-height: 0;
    text-transform: uppercase;
`