import {
    StyledNews,
    Promo,
    Inner,
    Title,
    Img,
    Text,
} from './styles/News.styled'
import Statistic from '../Statistic'
import Date from '../Date'
import MySwiper from '../MySwiper'

function News({ img, title, text }) {
    return (
        <StyledNews>
            <Promo>
                <Inner>
                    <Date />
                    <Statistic />
                </Inner>
                {img.length > 1 ? (
                    <MySwiper>
                        {img?.map((item, index) => (
                            <Img src={item} alt="" key={index} />
                        ))}
                    </MySwiper>
                ) : (
                    <Img src={img[0]} alt="" />
                )}
            </Promo>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </StyledNews>
    )
}

export default News
