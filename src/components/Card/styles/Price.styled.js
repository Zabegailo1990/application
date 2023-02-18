import styled from 'styled-components'

export const StyledPrice = styled.div`
    font-family: 'Roboto';
    display: flex;
    align-items: center;
`

export const Label = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 33px;
    width: 34px;
    margin-right: 6px;
`

export const Image = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`

export const Discount = styled.span`
    position: relative;
    font-weight: 500;
    font-size: 10px;
    color: #fff;
    z-index: 1;
`

export const Col = styled.div``

export const OldPrice = styled.div`
    font-size: 11px;
    color: #9a9a9a;
`

export const CurrentPrice = styled.div`
    font-size: 20px;
    color: #282828;
    line-height: 1;
`
