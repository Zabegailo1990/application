import styled from 'styled-components/macro'
import Date from '../../Date'
import Statistic from '../../Statistic'

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
    overflow: hidden;
    &::before{
        content: '';
        position: absolute;
        width: 100%;
        z-index: 10;
        bottom: 0;
        box-shadow: 0px -23px 34px 19px rgb(0 0 0 / 75%)
    }
`

export const StyledDate = styled(Date)`
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 100;
`

export const StyledStatistic = styled(Statistic)`
    position: absolute;
    left: 12px;
    bottom: 12px;
    z-index: 100;
`

export const Title = styled.h3`
    font-size: 15px;
    color: #282828;
    margin-bottom: 8px;
`

export const Img = styled.img`
    border-radius: 5px;
    height: 165px;
    z-index: -1;
`

export const Text = styled.p`
    font-size: 13px;
    line-height: 20px;
    color: #818690;
`
