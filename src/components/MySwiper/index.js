import { StyledMySwiper, StyledNavigation } from './styles/MySwiper.styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import Icon from '../Icon'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function MySwiper(props) {
    const {
        children,
        btnClass = ['my-swiper__prev', 'my-swiper__next'],
        btnColor,
        navigation = {
            prevEl: `.${btnClass[0]}`,
            nextEl: `.${btnClass[1]}`,
        },
        icons = ['icon-prev', 'icon-next'],
        pagination,
        interval,
        slideShow,
        positionNav,
        swipe = true,
    } = props

    // Условный рендеринг панели навигации
    const MySwiperNavigation = () => {
        if (navigation)
            return (
                <StyledNavigation positionNav={positionNav}>
                    <Icon
                        iconName={icons[0]}
                        color={btnColor}
                        className={btnClass[0]}
                    />
                    <Icon
                        iconName={icons[1]}
                        color={btnColor}
                        className={btnClass[1]}
                    />
                </StyledNavigation>
            )
    }

    return (
        <StyledMySwiper>
            <Swiper
                modules={[Pagination, Navigation]}
                pagination={pagination}
                navigation={navigation}
                spaceBetween={interval}
                slidesPerView={slideShow}
                allowTouchMove={swipe}
            >
                {children?.map((slide, index) => (
                    <SwiperSlide key={index}>{slide}</SwiperSlide>
                ))}
                {MySwiperNavigation()}
            </Swiper>
        </StyledMySwiper>
    )
}

export default MySwiper
