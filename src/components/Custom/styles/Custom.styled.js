import styled from 'styled-components'

export const StyledCustom = styled.div`
    position: relative;
    font-family: 'Roboto';
    text-align: center;
    border-radius: 5px;
    overflow: hidden;
    height: 308px;
`

export const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
`

export const Inner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 18px;
`

export const Title = styled.h2`
    font-size: 24px;
    text-transform: uppercase;
    color: #fff;
    max-width: 150px;
`

export const Decor = styled.span`
    color: #ffde00;
`

export const Text = styled.p`
    font-size: 14px;
    line-height: 20px;
    max-width: 217px;
    color: #fff;
`
