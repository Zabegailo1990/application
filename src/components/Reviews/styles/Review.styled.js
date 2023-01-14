import styled from 'styled-components'

export const StyledReview = styled.div`
    position: relative;
    font-family: 'Roboto';
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 338px;
    overflow: hidden;
    background-color: #f7f8fb;
    border-radius: 5px;
`

export const Img = styled.img`
    position: absolute;
    object-fit: contain;
    height: 388px;
    width: 380px;
    top: -40px;
    left: -192px;
    z-index: 0;
`

export const Inner = styled.div`
    position: relative;
`

export const Title = styled.h2`
    font-size: 15px;
    margin-bottom: 34px;
`

export const Text = styled.p`
    font-style: italic;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 54px;
`
