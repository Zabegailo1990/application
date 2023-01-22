import styled from 'styled-components'

export const StyledLocation = styled.div`
    font-family: 'Roboto';
    background-color: #fff;
    border-radius: 4px;
    padding: 14px;
`

export const Title = styled.div`
    font-size: 15px;
    font-weight: 700;
    color: #282828;
    margin-bottom: 14px;
    line-height: 0.8;
`

export const Address = styled.div`
    font-size: 12px;
    font-weight: 300;
    color: #818690;
    margin-bottom: 16px;
`

export const Clock = styled.div`
    display: flex;
    align-items: center;
    column-gap: 4px;
    margin-bottom: 4px;
`

export const Info = styled.div`
    font-size: 11px;
    line-height: 1;
    color: #818690;
`

export const Phone = styled(Clock)`
    margin-bottom: 0;
`