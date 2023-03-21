import {
    StyledRange,
    Slider,
    Track,
    Progress,
    Row,
    Price,
    Decor
} from './styles/Range.styled'
import { useState, useEffect, useRef } from 'react'

function Range({initialMin, initialMax, min, max, step, priceCap}) {
    const progressRef = useRef(null)

    const [minValue, setMinValue] = useState(initialMin)
    const [maxValue, setMaxValue] = useState(initialMax)

    const handleMin = (e) => {
        if(maxValue - minValue >= priceCap && maxValue <= max){
            if(parseInt(e.target.value) > parseInt(maxValue)){
            }else{
                setMinValue(parseInt(e.target.value))
            }
        }else{
            if(parseInt(e.target.value) < minValue){
                setMinValue(parseInt(e.target.value))
            }
        }
    }

    const handleMax = (e) => {
        if(maxValue - minValue >= priceCap && maxValue <= max){
            if(parseInt(e.target.value) < parseInt(minValue)){
            }else{
                setMaxValue(parseInt(e.target.value))
            }
        }else{
            if(parseInt(e.target.value) > maxValue){
                setMaxValue(parseInt(e.target.value))
            }
        }
    }

    useEffect(() =>{
        progressRef.current.style.left = (minValue / max) * step + "%"
        progressRef.current.style.right = step - (maxValue / max) * step + "%"
    }, [minValue, maxValue])

    return (
        <StyledRange>
            <Track>
                <Slider
                    type='range'
                    min={min}
                    max={max}
                    step={step}
                    priceCap={priceCap}
                    value={minValue}
                    onChange={handleMin}
                />
                <Slider
                    type='range'
                    min={min}
                    max={max}
                    step={step}
                    priceCap={priceCap}
                    value={maxValue}
                    onChange={handleMax}
                />
                <Progress ref={progressRef}/>
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
