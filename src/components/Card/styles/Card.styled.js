import styled from 'styled-components'

export const StyledCard = styled.div`
    width: 300px;
    padding: 20px;
    border-radius: 4px;
`

export const Promo = styled.div`
    margin-bottom: 20px;
`

export const Img = styled.img``

export const Label = styled.div`
    text-transform: uppercase;
    font-family: 'Roboto';
`

export const Category = styled.div`
    font-family: 'Roboto';
    font-size: 13px;
    color: #818690;
    margin-bottom: 12px;
`

export const Title = styled.h3`
    font-family: 'Montserrat';
    font-size: 14px;
    text-transform: uppercase;
    color: #282828;
    margin-bottom: 20px;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;
`

export const Buttons = styled(Row)`
    column-gap: 8px;
`
