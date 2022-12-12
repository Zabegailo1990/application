import Article from '../../components/Article'
import Banner from '../../components/Banner'
import Benefit from '../../components/Benefit'
import Custom from '../../components/Custom'
import Guarantee from '../../components/Guarantee'
import Newsletter from '../../components/Newsletter'
import Review from '../../components/Review'
import Signup from '../../components/Signup'
import Slider from '../../components/Slider'
import Social from '../../components/Social'
import { bannerData, benefitsData, categoryData, cardsData } from '../../API'
import Category from '../../components/Category'
import CardsTab from './components/CardsTab'

import styles from './scss/home.module.scss'

function Home() {

    const sortCards = (cards) => {
    }

    console.log(sortCards(cardsData()))


    return (
        <div className={styles.home}>
            <div className={styles.home__container}>
                <Slider>
                    {bannerData()?.map((banner) => (
                        <Banner
                            key={banner.id}
                            img={banner.img}
                            title={banner.title}
                            offer={banner.offer}
                            buttonText={banner.buttonText}
                        />
                    ))}
                </Slider>
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
                <Slider />
                <Social />
                <Review />
                <Newsletter />
                <CardsTab />
            </div>
        </div>
    )
}

export default Home
