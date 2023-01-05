import styled from 'styled-components'

export const StyledCategory = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px -82px 32px -19px rgba(0, 0, 0, 0.42) inset;
    padding: 10px;
    height: 155px;
`
export const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transform: scale(1.05);
    transition: all 1s;

    ${StyledCategory}:hover & {
        transform: scale(1);
    }
`
export const Title = styled.h2`
    position: relative;
    width: fit-content;
    font-family: 'Montserrat';
    text-transform: uppercase;
    font-size: 14px;
    color: #fff;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        transform: translateY(100%);
        background-color: #ffde00;
        height: 2px;
        width: 0;
        z-index: 2;
        transition: all 0.5s;
    }

    ${StyledCategory}:hover &::before {
        width: 100%;
    }
`
