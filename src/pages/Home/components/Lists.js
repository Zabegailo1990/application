import {
    StyledLists,
    StyledProduct,
    List,
    Title,
    Row,
    Category,
} from '../styles/Lists.styled'
import Rating from '../../../components/Rating'
import { cardsData } from '../../../API'

function rangeList(key) {
    return cardsData().sort((a, b) => b[key] - a[key]).splice(0, 3)
}

let map = [
    {
        title: 'best seling',
        sort: rangeList('sales'),
    },
    {
        title: 'top rate',
        sort: rangeList('rating'),
    },
    {
        title: 'latest',
        sort: rangeList('rating'),
    },
]

function Lists() {
    return (
        <StyledLists>
            {map?.map((item, index) => (
                <List key={index}>
                    <Title>{item.title}</Title>
                    {item?.sort.map((item, index) => (
                        <StyledProduct
                            key={index}
                            img={item.img}
                            header={
                                <Row>
                                    <Category>{item.category}</Category>
                                    <Rating score={item.rating} />
                                </Row>
                            }
                            name={item.title}
                        />
                    ))}
                </List>
            ))}
        </StyledLists>
    )
}

export default Lists
