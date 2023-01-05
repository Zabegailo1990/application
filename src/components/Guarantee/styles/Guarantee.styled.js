import styled from 'styled-components'

export const StyledGuarantee = styled.div`
    position: relative;
    font-family: 'Montserrat';
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 6px;
    overflow: hidden;
    padding: 20px;
    height: 226px;
`

export const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 14px;
`

export const DecorText = styled.span`
    color: #ffde00;
    display: block;
`

export const Text = styled.p`
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: #fff;
`
