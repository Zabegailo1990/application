import styled, { css } from 'styled-components'

export const StyledCustomNavigation = styled.div`
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
            case 'top-right':
                return css`
                    align-self: flex-end;
                    margin-bottom: 26px;
                    column-gap: 20px;
                `
            default:
                return css`
                    justify-content: center;
                    column-gap: 20px;
                `
        }
    }};

    .swiper-button-disabled {
        opacity: 0.5;
    }
`
