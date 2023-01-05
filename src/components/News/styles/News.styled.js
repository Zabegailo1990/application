import styled from 'styled-components'

export const StyledNews = styled.div`
    font-family: 'Roboto';
`

export const Promo = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 165px;
    margin-bottom: 14px;
`

export const Inner = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    z-index: 10;
    padding: 12px;
`

export const Title = styled.h3`
    font-size: 15px;
    color: #282828;
    margin-bottom: 8px;
`

export const Img = styled.img`
    border-radius: 5px;
    height: 165px;
`

export const Text = styled.p`
    font-size: 13px;
    line-height: 20px;
    color: #818690;
`
