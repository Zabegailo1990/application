import {
    StyledHome,
    Container,
    Promo,
    Aside,
    Benefits,
    Categories,
    CardsContainer,
    StyledCategory,
    NewsSlider,
    Title,
    Locations,
    StyledLocation,
    Img,
} from './styles/Home.styled'
import {
    bannerData,
    benefitsData,
    categoryData,
    ReviewsData,
    newsData,
    dataLocations,
} from '../../API'
import Rating from '../../components/Rating'
import Banner from '../../components/Banner'
import Benefit from '../../components/Benefit'
import Custom from '../../components/Custom'
import Guarantee from '../../components/Guarantee'
import Reviews from '../../components/Reviews'
import Signup from '../../components/Signup'
import MySwiper from '../../components/MySwiper'
import Social from '../../components/Social'
import CardsTab from './components/CardsTab'
import List from '../../components/List'
import News from '../../components/News'

function Home() {
    return (
        <StyledHome>
            <Container>
                <Promo>
                    <MySwiper
                        interval={10}
                        pagination={false}
                        navigation={false}
                    >
                        {bannerData()?.map((banner) => (
                            <Banner
                                key={banner.id}
                                img={banner.img}
                                title={banner.title}
                                offer={banner.offer}
                                buttonText={banner.buttonText}
                            />
                        ))}
                    </MySwiper>
                    <Aside>
                        <Guarantee />
                        <Signup />
                    </Aside>
                </Promo>
                <Benefits>
                    {benefitsData()?.map((benefit) => (
                        <Benefit
                            key={benefit.id}
                            img={benefit.img}
                            title={benefit.title}
                            text={benefit.text}
                        />
                    ))}
                </Benefits>
                <Categories>
                    {categoryData()?.map((item) => (
                        <StyledCategory
                            key={item.id}
                            img={item.img}
                            title={item.title}
                        />
                    ))}
                </Categories>
            </Container>
            <CardsContainer>
                <Container>
                    <CardsTab />
                </Container>
            </CardsContainer>
            <List header={['shit', <Rating />]} />
            <Container>
                <Custom />
            </Container>
            <Social />
            <Reviews data={ReviewsData()} />
            <Container>
                <NewsSlider>
                    <Title>News</Title>
                    <MySwiper spaceBetween={10} positionNavigation="top-right">
                        {newsData()?.map((item, index) => (
                            <News
                                key={index}
                                img={item.img}
                                date={item.date}
                                countComments={item.comments}
                                countViewers={item.views}
                                title={item.title}
                                text={item.text}
                            />
                        ))}
                    </MySwiper>
                </NewsSlider>
            </Container>
            <Locations>
                <Img src="../media/img/home_locations.jpg" />
                <Container>
                    <Title>Store location</Title>
                    <MySwiper
                        spaceBetween={10}
                        positionNavigation="top-right"
                        rows={2}
                    >
                        {dataLocations()?.map((item) => (
                            <StyledLocation
                                key={item.id}
                                title={item.title}
                                address={item.address}
                                clock={item.clock}
                                phone={item.phone}
                            />
                        ))}
                    </MySwiper>
                </Container>
            </Locations>
        </StyledHome>
    )
}

export default Home
