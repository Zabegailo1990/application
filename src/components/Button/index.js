import cn from 'classnames'
import styles from './scss/button.module.scss'
import React from 'react'

function Button(props) {
    const { className, text, iconPath, path } = props

    //* условный рендер иконки
    const iconButton = () => {
        if (iconPath)
            return (
                <svg className={cn('icon', styles.button__icon)}>
                    <use xlinkHref={`../media/sprite/icons-sprite.svg#${iconPath}`} />
                </svg>
            )
    }

    //* условный рендер текста
    const textButton = () => {
        if(text) return <p className={styles.button__text}>{text}</p>
    }

    // * тип кнопки link or button
    const typeButton = (className, text, icon) => {
        return path ? (
            <a className={className} href={path}>
                {text}
                {icon}
            </a>
        ) : (
            <button className={className}>
                {text}
                {icon}
            </button>
        )
    }

    return (
        <React.Fragment >
            {typeButton(
                cn(styles.button, className),
                textButton(),
                iconButton()
            )}
        </React.Fragment>
    )
}

export default Button
