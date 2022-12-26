import { useState, useEffect } from 'react'
import styles from './scss/tabs.module.scss'

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
        <div className={styles.tabs}>
            <div className={styles.tabs__header}>
                {items?.map((trigger, index) => (
                    <div
                        key={index}
                        className={styles.tabs__trigger}
                        onClick={() => setActiveTab(trigger)}
                    >
                        {trigger}
                    </div>
                ))}
            </div>
            <div className={styles.tabs__content}>{children}</div>
        </div>
    )
}

export default Tabs
