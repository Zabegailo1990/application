import cn from 'classnames'
import styles from './scss/test.module.scss'

function TestComponent(props) {
    const { active } = props

    return (
        <div className={styles.test}>
            <button className={cn(styles.test__button, styles.test__link, {[styles.test__button_active]: active})}></button>
            <p className={styles.test__text}>text</p>
        </div>
    )
}

export default TestComponent
