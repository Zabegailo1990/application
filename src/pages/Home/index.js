import {
    StyledHome,
    Container,
    Promo,
    SwiperBanners,
    StyledGuarantee,
    Aside,
    Benefits,
    Categories,
    CardsContainer,
    NewsSwiper,
    StyledCategory,
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
import Banner from '../../components/Banner'
import Benefit from '../../components/Benefit'
import Custom from '../../components/Custom'
import Reviews from '../../components/Reviews'
import Newsletter from '../../components/Newsletter'
import MySwiper from '../../components/MySwiper'
import CardsTab from './components/CardsTab'
import Ticker from '../../components/Ticker'
import Lists from './components/Lists'
import News from '../../components/News'
import Footer from '../../components/Footer'

function Home() {
    return (
        <StyledHome>
            <Container>
                <Promo>
                    <SwiperBanners
                        interval={10}
                        spaceBetween={15}
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
                    </SwiperBanners>
                    <Aside>
                        <StyledGuarantee />
                        <Newsletter />
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
            <Ticker />
            <Container>
                <NewsSwiper>
                    <Title>News</Title>
                    <MySwiper
                        spaceBetween={10}
                        positionNavigation='top-right'
                    >
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
                </NewsSwiper>
                <Custom />
            </Container>
            <Container>
                <Reviews data={ReviewsData()} />
            </Container>
            <Locations>
                <Img src='../media/img/home_locations.jpg' />
                <Container>
                    <Title>Store location</Title>
                    <MySwiper
                        spaceBetween={10}
                        positionNavigation='top-right'
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
            <Container>
                <Lists />
            </Container>
            <Footer />
        </StyledHome>
    )
}

export default Home
