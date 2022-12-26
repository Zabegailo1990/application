import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import cn from 'classnames'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './scss/my-swiper.scss'

function MySwiper(props) {

    const {
        children,
        navigation={
            prevEl: '.my-swiper__prev',
            nextEl: '.my-swiper__next',
        },
        pagination,
        interval,
        slideShow,
        iconPath={
            prev: 'icon-prev',
            next: 'icon-next'
        }
    } = props

    // Условный рендеринг панели навигации
    const MySwiperNavigation = () => {
        if (navigation)
            return (
                <div className="my-swiper__navigation">
                    <svg className="icon my-swiper__button my-swiper__prev">
                        <use xlinkHref={`../media/sprite/icons-sprite.svg#${iconPath.prev}`} />
                    </svg>
                    <svg className="icon my-swiper__button my-swiper__next">
                        <use xlinkHref={`../media/sprite/icons-sprite.svg#${iconPath.next}`} />
                    </svg>
                </div>
            )
    }

    return (
        <div className="my-swiper">
            <Swiper
                modules={[Pagination, Navigation]}
                pagination={pagination}
                navigation={navigation}
                spaceBetween={interval}
                slidesPerView={slideShow}
            >
                {children?.map((slide, index) => (
                    <SwiperSlide key={index}>{slide}</SwiperSlide>
                ))}
                {MySwiperNavigation()}
            </Swiper>
        </div>
    )
}

export default MySwiper
