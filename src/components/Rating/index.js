import { StyledRating, Item } from './styles/Rating.styled'
import { useState } from 'react'
import Icon from '../Icon'

function Rating({score = 3}) {
    const [value, setValue] = useState(score)

    const estimates = [1, 2, 3, 4, 5]

    return (
        <StyledRating>
            {estimates?.map((item, index) => (
                <Item
                    key={index}
                    onClick={() => setValue(item)}
                >
                    <Icon
                        color={index < value ? '#ffc600' : '#d4d4d4'}
                        size={['10px', '10px']}
                        iconName='icon-star'
                    />
                </Item>
            ))}
        </StyledRating>
    )
}

export default Rating
