import styled from 'styled-components'
import Category from '../../../components/Category'
import Location from '../../../components/Location'
import MySwiper from '../../../components/MySwiper'
import Guarantee from '../../../components/Guarantee'

export const StyledHome = styled.div`
    background-color: #fff;
`

export const Container = styled.div`
    position: relative;
    max-width: 1172px;
    padding: 0 10px;
    margin: 0 auto;
`

export const Promo = styled.div`
    margin-bottom: 30px;
`

export const SwiperBanners = styled(MySwiper)`
    margin-bottom: 15px;
`

export const StyledGuarantee = styled(Guarantee)`
    margin-bottom: 15px;
`

export const Aside = styled.div``

export const Benefits = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 20px;
    row-gap: 30px;
    margin-bottom: 30px;
`

export const Categories = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 30px;
`

export const StyledCategory = styled(Category)`
    width: 1%;
    flex-grow: 1;
    &:nth-child(3n + 1) {
        width: 100%;
    }
`

export const CardsContainer = styled.div`
    padding: 52px 0 47px 0;
    background-color: #f7f8fb;
`

export const NewsSwiper = styled.div`
    position: relative;
    margin-bottom: 30px;
`

export const Title = styled.h2`
    position: absolute;
    line-height: 0.8;
    font-size: 24px;
    font-family: 'Montserrat';
    color: #292929;
    text-transform: uppercase;
    z-index: 1;
`

export const Locations = styled.div`
    position: relative;
    padding: 49px 0 30px 0;
`

export const StyledLocation = styled(Location)`
    position: relative;
    z-index: 1;
`

export const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`
