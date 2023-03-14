import {
    StyledRange,
    Сontroller,
    Track,
    Progress,
    Row,
    Price,
    Decor
} from './styles/Range.styled'
import { useState } from 'react'

function Range() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(100)

    console.log(minValue)

    return (
        <StyledRange>
            <Track>
                <Сontroller
                    type='range'
                    value={minValue}
                    onChange={(e) => setMinValue(e.target.value)}
                />
                <Сontroller
                    type='range'
                    value={maxValue}
                    onChange={(e) => setMaxValue(e.target.value)}
                />
                <Progress />
            </Track>
            <Row>
                <Price
                    type='number'
                    value={minValue}
                    min='0'
                    onChange={(e) => setMinValue(e.target.value)}
                />
                <Decor>-</Decor>
                <Price
                    type='number'
                    value={maxValue}
                    min='0'
                    onChange={(e) => setMaxValue(e.target.value)}
                />
                <Decor>$</Decor>
            </Row>
        </StyledRange>
    )
}

export default Range
