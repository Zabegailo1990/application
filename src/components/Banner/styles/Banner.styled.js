import styled from 'styled-components'

export const StyledBanner = styled.div`
    position: relative;
    font-family: 'Montserrat';
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    overflow: hidden;
    height: 200px;
    padding: 10px;
`

export const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;
`

export const Col = styled.div``

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 14px;
`

export const Offer = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: #fff;
`