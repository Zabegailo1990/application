import { StyledRating, Item } from './styles/Rating.styled'
import { useState } from 'react'
import Icon from '../Icon'

function Rating(props) {
    const {
        icons = [
            'icon-star',
            'icon-star',
            'icon-star',
            'icon-star',
            'icon-star',
        ],
    } = props

    const [value, setValue] = useState(3)
    console.log(value)

    return (
        <StyledRating>
            {icons?.map((item, index) => (
                <Item
                    key={index}
                    onClick={() => setValue(index + 1)}
                >
                    <Icon
                        color={index < value ? '#ffc600' : '#d4d4d4'}
                        size={['10px', '10px']}
                        iconName={item}
                    />
                </Item>
            ))}
        </StyledRating>
    )
}

export default Rating
