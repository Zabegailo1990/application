import {
    StyledCheckbox,
    Input,
    StyledIcon,
    Column,
    Label,
} from './styles/Checkbox.styled'

import { useState } from 'react'

function Checkbox({
    className,
    id,
    icon = 'icon-checkmark',
    text,
    status = false,
    ...props
}) {
    const [active, setActive] = useState(status)
    return (
        <StyledCheckbox
            className={className}
            {...props}
        >
            <Column>
                <Input
                    type='checkbox'
                    id={id}
                    checked={active}
                    onChange={() => setActive(!active)}
                />
                {active && (
                    <StyledIcon
                        iconName={icon}
                        color='#ffde00'
                        size={['10px', '10px']}
                        onClick={() => setActive(!active)}
                    />
                )}
            </Column>
            <Label htmlFor={id}>{text}</Label>
        </StyledCheckbox>
    )
}

export default Checkbox
