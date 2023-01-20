import { useState, useEffect } from 'react'
import { StyledTabs, Header, Trigger, Content } from './styles/Tabs.styled'

function Tabs(props) {
    const {
        items = ['Tab one', 'Tab two', 'Tab three'],
        children,
        callback,
    } = props

    const [current, setCurrent] = useState(items[0])

    const setActiveTab = (label) => {
        if (label !== current) {
            setCurrent(label)
            callback(label)
        }
    }

    useEffect(() => {
        callback(items[0])
    }, [])

    return (
        <StyledTabs>
            <Header>
                {items?.map((trigger, index) => (
                    <Trigger 
                        key={index} 
                        onClick={() => setActiveTab(trigger)}
                    >
                        {trigger}
                    </Trigger>
                ))}
            </Header>
            <Content>{children}</Content>
        </StyledTabs>
    )
}

export default Tabs
