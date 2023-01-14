import styled from 'styled-components'

export const Btn = styled.button`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    padding: 12px;
    background-color: var(--btn-color-yellow);
    border-radius: 25px;
`

export const Inner = styled.div`
    display: flex;
    align-items: center;
    column-gap: 6px;
`

export const Text = styled.p`
    font-family: 'Montserrat';
    font-size: ${({size}) => size ? size : '12px'};
    font-weight: 700;
    text-transform: uppercase;
`