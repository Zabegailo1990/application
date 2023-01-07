import {
    StyledNews,
    Promo,
    StyledDate,
    StyledStatistic,
    Title,
    Img,
    Text,
} from './styles/News.styled'
import MySwiper from '../MySwiper'

function News({ img, date, countComments, countViewers, title, text }) {
    return (
        <StyledNews>
            <Promo>
                <StyledDate date={date} />
                <StyledStatistic
                    countComments={countComments}
                    countViewers={countViewers}
                />
                {img.length > 1 ? (
                    <MySwiper
                        interval={10}
                        positionNav="center"
                        btnColor='#fff'
                        btnClass={[
                            'my-swiper__prev-news',
                            'my-swiper__next-news',
                        ]}
                        swipe={false}
                    >
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
