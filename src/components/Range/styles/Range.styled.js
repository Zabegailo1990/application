import styled from 'styled-components'

export const StyledRange = styled.div`
    width: 232px;
`
export const Track = styled.div`
    position: relative;
    height: 5px;
    border-radius: 5px;
    background-color: #e8ebf1;
    margin-bottom: 20px;
`

export const Slider = styled.input`
    position: absolute;
    height: inherit;
    width: 100%;
    appearance: none;
    background: none;
    pointer-events: none;
    z-index: 1;
    &[type="range"]{
        &::-webkit-slider-thumb{
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='18' height='18' xmlns='http://www.w3.org/2000/svg'%3e%3cellipse stroke='%23d7dbe3' ry='8.4942' rx='8.49421' cy='8.99227' cx='9' fill='%23fff'/%3e%3cellipse stroke='%23d7dbe3' stroke-width='0' ry='4' rx='4' cy='9' cx='9' fill='%23ffe00e'/%3e%3c/svg%3e");
            height: 18px;
            width: 18px;
            appearance: none;
            pointer-events: auto;
            cursor: pointer;
        }
    }
`

export const Progress = styled.div`
    position: absolute;
    height: inherit;
    border-radius: inherit;
    background-color: #ffde00;
    z-index: 0;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    column-gap: 8px;
`

export const Price = styled.input`
    font-family: 'Montserrat';
    font-size: 10px;
    font-weight: 600;
    color: #8b9099;
    border: 2px solid #e8ebf1;
    border-radius: 25px;
    height: 38px;
    width: 81px;
    padding: 0 12px;
    &[type='number']::-webkit-inner-spin-button{
        appearance: none;
    }
`

export const Decor = styled.span`
    font-family: 'Montserrat';
    font-size: 10px;
    font-weight: 600;
    color: #8b9099;
`
