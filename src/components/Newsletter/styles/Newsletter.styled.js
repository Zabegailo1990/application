import styled from 'styled-components'

export const StyledNewsletter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #1e1e1e;
    border-radius: 6px;
    overflow: hidden;
    height: 226px;
    padding: 20px;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.h2`
    font-family: 'Montserrat';
    font-weight: 700;
    line-height: 30px;
    font-size: 20px;
    color: #fff;
    text-transform: uppercase;
`

export const Decor = styled.span`
    color: #ffde00;
`

export const Img = styled.img`
    flex-shrink: 0;
    height: 46px;
    width: 68px;
`

export const Text = styled.p`
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
    color: #666666;
`

