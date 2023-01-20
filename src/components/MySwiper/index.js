import {
    StyledMySwiper,
    CustomNavigation,
    CustomPagination,
} from './styles/MySwiper.styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import Icon from '../Icon'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function MySwiper(props) {
    const {
        children,
        icons = ['icon-prev', 'icon-next'],
        buttonsClass = ['my-swiper__prev', 'my-swiper__next'],
        buttonsColor,
        positionNavigation,
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
        allowTouchMove,
    } = props

    const renderPagination = () => {
        if (pagination) {
            return <CustomPagination className="my-swiper__pagination" />
        }
    }

    const renderNavigation = () => {
        if (navigation) {
            return (
                <CustomNavigation positionNavigation={positionNavigation}>
                    {icons?.map((item, index) => (
                        <Icon
                            key={index}
                            iconName={item}
                            color={buttonsColor}
                            className={buttonsClass[index]}
                        />
                    ))}
                </CustomNavigation>
            )
        }
    }

    return (
        <StyledMySwiper positionNavigation={positionNavigation}>
            <Swiper
                modules={[Pagination, Navigation]}
                pagination={pagination}
                navigation={navigation}
                spaceBetween={spaceBetween}
                allowTouchMove={allowTouchMove}
                slidesPerView={slidesPerView}
            >
                {children?.map((slide, index) => (
                    <SwiperSlide key={index}>{slide}</SwiperSlide>
                ))}
                {renderPagination()}
                {renderNavigation()}
            </Swiper>
        </StyledMySwiper>
    )
}

export default MySwiper
