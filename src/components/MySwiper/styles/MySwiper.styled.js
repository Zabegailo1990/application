import styled, { css } from 'styled-components/macro'

export const StyledMySwiper = styled.div`
    position: relative;
    ${({ positionNav }) => {
        if (positionNav === 'top-right')
            return css`
                .swiper {
                    display: flex;
                    flex-direction: column-reverse;
                }
            `
    }}
    
    .swiper-horizontal>.swiper-pagination-progressbar{
        margin-top: 1px;
        height: 1px;
        background-color: #e8ebf1;
    }

    .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
        background: #ffde00;
        height: 2px;
        top: -1px;
        
    }
`
