import { StyledReview, Img, Inner, Title, Text } from './styles/Review.styled'
import MySwiper from '../MySwiper'

function Review({ data }) {
    return (
        <StyledReview>
            <Img src="../media/img/review.png" />
            <MySwiper pagination={false}>
                {data?.map((item) => (
                    <Inner key={item.id}>
                        <Title>{item.name}</Title>
                        <Text>{item.text}</Text>
                    </Inner>
                ))}
            </MySwiper>
        </StyledReview>
    )
}

export default Review
