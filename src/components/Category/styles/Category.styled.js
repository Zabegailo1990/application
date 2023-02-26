import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledCategory = styled(Link)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 6px;
    overflow: hidden;
    height: 155px;
`

export const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    transform: scale(1.05);
    transition: all 1s;

    ${StyledCategory}:hover & {
        transform: scale(1);
    }
`

export const Inner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-shadow: 0px -82px 32px -19px rgba(0, 0, 0, 0.42) inset;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
`

export const Title = styled.h2`
    position: relative;
    width: fit-content;
    font-family: 'Montserrat';
    text-transform: uppercase;
    font-size: 14px;
    color: #fff;
    padding-bottom: 6px;
    margin-bottom: 6px;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: #ffde00;
        height: 2px;
        width: 52px;
    }
`

export const Count = styled.div`
    font-size: 13px;
    color: #fff;
    font-weight: 500;
`
