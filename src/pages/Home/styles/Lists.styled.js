import styled from 'styled-components'
import Product from '../../../components/Product'

export const StyledLists = styled.div`
    padding: 50px 0 30px 0;
`

export const List = styled.div`
    &:not(:last-child){
        margin-bottom: 50px;
    }
`

export const Title = styled.h2`
    position: relative;
    font-family: 'Montserrat';
    font-size: 14px;
    text-transform: uppercase;
    color: #282828;
    padding-bottom: 15px;
    margin-bottom: 22px;

    &:before{
        position: absolute;
        content: '';
        bottom: 0;
        height: 2px;
        width: 34px;
        background-color: #ffde00;
    }
`

export const StyledProduct = styled(Product)`
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`

export const Row = styled.div`
    display: flex;
    align-items: center;
`

export const Category = styled.div`
    font-family: 'Roboto';
    font-size: 12px;
    color: #818690;
    margin-right: 10px;
`
