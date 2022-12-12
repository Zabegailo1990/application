import classNames from 'classnames'
import styles from './scss/button.module.scss'

function Button(props) {
    const { className, text, icon, theme = 'default' } = props
    const classes = classNames({
        [styles.button]: true,
        [styles.button__yellow]: theme === 'yellow',
        [className]: true,
    })

    return (
        <button className={classes}>
            <p className={styles.button__text}>{text}</p>
            <i className={`icon ${styles.button__icon}`}>{icon}</i>
        </button>
    )
}

export default Button
