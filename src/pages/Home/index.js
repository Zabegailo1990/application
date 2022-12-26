import Article from '../../components/Article'
import Banner from '../../components/Banner'
import Benefit from '../../components/Benefit'
import Custom from '../../components/Custom'
import Guarantee from '../../components/Guarantee'
import Newsletter from '../../components/Newsletter'
import Review from '../../components/Review'
import Signup from '../../components/Signup'
import MySwiper from '../../components/MySwiper'
import Social from '../../components/Social'
import { bannerData, benefitsData, categoryData } from '../../API'
import Category from '../../components/Category'
import CardsTab from './components/CardsTab'

import styles from './scss/home.module.scss'
import TestComponent from '../../components/TestComponent'

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
                            parentClass={styles.home__category}
                            img={item.img}
                            title={item.title}
                        />
                    ))}
                </div>
                <Article />
                <Custom />
                <MySwiper />
                <Social />
                <Review />
                <Newsletter />
                <CardsTab />
                <TestComponent active={false}></TestComponent>
            </div>
        </div>
    )
}

export default Home
