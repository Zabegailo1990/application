import styled, { css } from 'styled-components/macro'

export const StyledMySwiper = styled.div`
    position: relative;
    ${({ positionNavigation }) => {
        if (positionNavigation === 'top-right')
            return css`
                .swiper {
                    display: flex;
                    flex-direction: column-reverse;
                }
            `
    }}

    .swiper-horizontal > .swiper-pagination-progressbar {
        margin-top: 1px;
        height: 1px;
        background-color: #e8ebf1;
    }

    .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
        background: #ffde00;
        height: 2px;
        top: -1px;
    }

    .my-swiper__pagination .swiper-pagination-progressbar-fill {
        transform: scaleX(0.2);
    }
`

export const CustomNavigation = styled.div`
    display: flex;

    ${({ positionNavigation }) => {
        switch (positionNavigation) {
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
                    margin-bottom: 20px;
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

export const CustomPagination = styled.div`
    position: relative;
    margin-bottom: 30px;
`
