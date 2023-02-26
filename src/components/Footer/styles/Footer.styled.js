import styled from 'styled-components'

export const StyledFooter = styled.div`
    background-color: #282828;
`

export const Inner = styled.div``

export const Column = styled.div`
    max-height: 400px;
    max-width: 300px;
    &:not(:last-child) {
        margin-bottom: 50px;
    }
`

export const Title = styled.h2`
    position: relative;
    font-family: 'Montserrat';
    font-size: 14px;
    text-transform: uppercase;
    color: #fff;
    padding-bottom: 15px;
    margin-bottom: 22px;
    &::before {
        position: absolute;
        bottom: 0;
        content: '';
        width: 34px;
        height: 2px;
        background-color: #ffde00;
    }
`

export const Text = styled.p`
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 13px;
    color: #848484;
    line-height: 20px;
    /* margin-bottom: 20px; */
`

export const Tags = styled(Column)`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 10px;
`

export const Copyright = styled.div`
    text-align: center;
    background-color: #202020;
    padding: 28px 0 28px 0;
`
