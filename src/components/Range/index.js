import {
    StyledRange,
    Slider,
    Track,
    Progress,
    Row,
    Price,
    Decor,
} from "./styles/Range.styled";
import { useState, useEffect, useRef } from "react";

function Range({
    initialMin = 0,
    initialMax = 100,
    min = 0,
    max = 100,
    step = 1,
    priceCap = 10,
}) {
    const progressRef = useRef(null);

    const [minValue, setMinValue] = useState(initialMin);
    const [maxValue, setMaxValue] = useState(initialMax);

    const handleMin = (event) => {
        setMinValue(event.target.value)
        if(event.target.value <= maxValue) {
            setMinValue(event.target.value - priceCap)
        }
    };

    const handleMax = (event) => {
        setMaxValue(event.target.value)
    };

    useEffect(() => {
        progressRef.current.style.left = (minValue / max) * step + "%";
        progressRef.current.style.right = step - (maxValue / max) * step + "%";
    }, [minValue, maxValue]);

    return (
        <StyledRange>
            <Track>
                <Slider
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    priceCap={priceCap}
                    value={minValue}
                    onChange={handleMin}
                />
                <Slider
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    priceCap={priceCap}
                    value={maxValue}
                    onChange={handleMax}
                />
                <Progress ref={progressRef} />
            </Track>
            <Row>
                <Price type="number" value={minValue} onChange={handleMin} />
                <Decor>-</Decor>
                <Price type="number" value={maxValue} onChange={handleMax} />
                <Decor>$</Decor>
            </Row>
        </StyledRange>
    );
}

export default Range;
