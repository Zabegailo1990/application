import { useState } from 'react'
import styles from './scss/tabs.module.scss'

function Tabs(props) {
    const { items = [{label: 'Tab one'}, {label: 'Tab two'}, {label: 'Tab three'}] } = props
    const [current, setCurrent] = useState(items[0].label)

    return (
        <div className={styles.tabs}>
            <div className={styles.tabs__header}>
                {items?.map((trigger, index) => (
                    <div
                        key={index}
                        className={styles.tabs__trigger}
                        onClick={() => setCurrent(trigger.label)}
                    >
                        {trigger.label}
                    </div>
                ))}
            </div>
            {items?.map((content, index) => (
                current === content.label ? <div key={index} className={styles.tabs__content}>{content.children}</div> : null
            ))}
        </div>
    )
}

export default Tabs
