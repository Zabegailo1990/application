import ContainerNewsTab from './components/ContainerNewsTab'
import Rating from '../../components/Rating'
import Article from '../../components/Article'
import Banner from '../../components/Banner'
import Benefit from '../../components/Benefit'
import Custom from '../../components/Custom'
import Guarantee from '../../components/Guarantee'
import Newsletter from '../../components/Newsletter'
import Reviews from '../../components/Reviews'
import Signup from '../../components/Signup'
import MySwiper from '../../components/MySwiper'
import Social from '../../components/Social'
import { bannerData, benefitsData, categoryData, ReviewsData } from '../../API'
import Category from '../../components/Category'
import CardsTab from './components/CardsTab'
import List from '../../components/List'
import Footer from '../../components/Footer'

import styles from './scss/home.module.scss'

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.home__container}>
                <MySwiper interval={10} pagination={false} navigation={false}>
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
                <Guarantee />
                <Signup />
                <div className={styles.home__benefits}>
                    {benefitsData()?.map((benefit) => (
                        <Benefit
                            key={benefit.id}
                            img={benefit.img}
                            title={benefit.title}
                            text={benefit.text}
                        />
                    ))}
                </div>
                <div className={styles.home__categories}>
                    {categoryData()?.map((item) => (
                        <Category
                            key={item.id}
                            className={styles.home__category}
                            img={item.img}
                            title={item.title}
                        />
                    ))}
                </div>
                <List header={['shit', <Rating />]} />
                <Custom />
                <Social />
                <Reviews data={ReviewsData()} />
                <Newsletter />
                <CardsTab />
                <ContainerNewsTab />
                <Article />
                <Footer />
            </div>
        </div>
    )
}

export default Home
