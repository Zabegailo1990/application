import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import Icon from '../Icon'

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
    } = props

    // Условный рендеринг панели навигации
    const MySwiperNavigation = () => {
        if (navigation)
            return (
                <div className="my-swiper__navigation">
                    <Icon iconName={'icon-prev'} className={'my-swiper__prev'}/>
                    <Icon iconName={'icon-next'} className={'my-swiper__next'}/>
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
