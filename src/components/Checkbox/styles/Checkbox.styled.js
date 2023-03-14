import styled from 'styled-components'
import Icon from '../../Icon'

export const StyledCheckbox = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
`

export const Column = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16px;
    width: 16px;
    overflow: hidden;
`

export const Input = styled.input`
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    z-index: 0;

    &[type='checkbox'] {
        appearance: none;
        -webkit-appearance: none;
        height: 100%;
        width: 100%;
        border-radius: 2px;
        background-color: #e8ebf1;
        cursor: pointer;
        &:checked {
            border: 2px solid #ffde00;
            background-color: transparent;
        }
    }
`

export const StyledIcon = styled(Icon)`
    position: relative;
    cursor: pointer;
    z-index: 1;
`

export const Label = styled.label`
    cursor: pointer;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 13px;
    margin-left: 12px;
`
