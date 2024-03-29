import styled from 'styled-components'

export const StyledField = styled.div`
    display: flex;
    justify-content: space-between;
    height: 48px;
    overflow: hidden;
    background-color: #181818;
    border-radius: 50px;
    border-top: 1px solid #0d0d0d;
    border-bottom: 1px solid #292929;
    padding: 4px;
`

export const Input = styled.input`
    font-family: 'Montserrat';
    font-weight: 500;
    width: 100%;
    background-color: transparent;
    font-size: 14px;
    color: #fff;
    padding: 0 10px;
    outline: none;
    border: none;

    &::placeholder {
        font-family: 'Montserrat';
        font-size: 14px;
        color: #fff;
    }
`
