import styled from 'styled-components'

export const StyledList = styled.div``

export const Title = styled.h2`
    position: relative;
    font-family: 'Montserrat';
    line-height: 1;
    color: #282828;
    font-size: 14px;
    padding-bottom: 15px;
    
    margin-bottom: 22px;

    &::before {
        position: absolute;
        content: '';
        height: 2px;
        width: 34px;
        background-color: #ffde00;
        bottom: 0;
    }
`

export const Item = styled.div`
    display: flex;
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`

export const Img = styled.img`
    flex-shrink: 0;
    width: 70px;
    height: 70px;
    margin-right: 13px;
    border-radius: 4px;
    overflow: hidden;
`

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 2px;
`

export const Row = styled.div`
    display: flex;
    column-gap: 10px;
    font-size: 12px;
    color: #818690;
`

export const Name = styled.h3`
    font-family: 'Roboto';
    font-size: 15px;
    color: #282828;
    line-height: 22px;
`
