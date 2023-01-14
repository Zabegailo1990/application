import { StyledMySwiper } from './styles/MySwiper.styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import CustomNavigation from './components/CustomNavigation'
import CustomPagination from './components/CustomPagination'

// import Icon from '../Icon'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function MySwiper(props) {
    const {
        children,
        buttonsClass = ['my-swiper__prev', 'my-swiper__next'],
        icons = ['icon-prev', 'icon-next'],
        buttonsColor,
        navigation = {
            prevEl: `.${buttonsClass[0]}`,
            nextEl: `.${buttonsClass[1]}`,
        },
        pagination = {
            el: '.my-swiper__pagination',
            type: 'progressbar',
        },
        spaceBetween,
        slidesPerView,
        positionNav,
        allowTouchMove = true,
    } = props

    return (
        <StyledMySwiper positionNav={positionNav}>
            <Swiper
                modules={[Pagination, Navigation]}
                pagination={pagination}
                navigation={navigation}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                allowTouchMove={allowTouchMove}
            >
                {children?.map((slide, index) => (
                    <SwiperSlide key={index}>{slide}</SwiperSlide>
                ))}
                {pagination && <CustomPagination />}
                {navigation && (
                    <CustomNavigation
                        icons={icons}
                        buttonsClass={buttonsClass}
                        buttonsColor={buttonsColor}
                        positionNav={positionNav}
                    />
                )}
            </Swiper>
        </StyledMySwiper>
    )
}

export default MySwiper
