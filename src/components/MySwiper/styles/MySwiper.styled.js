import styled, { css } from 'styled-components/macro'

export const StyledMySwiper = styled.div`
    position: relative;
`

export const StyledNavigation = styled.div`
    display: flex;
    
    ${({ positionNav }) => {
        switch (positionNav) {
            case 'center':
                return css`
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 100%;
                    justify-content: space-between;
                    padding: 0 12px;
                    z-index: 1000;
                `
            default:
                return css`
                    justify-content: center;
                    column-gap: 20px;
                `
        }
    }}
`

export const Control = styled.div`
    position: static;
`
