import styles from './scss/title.module.scss'
import cn from 'classnames'

function Title({ text, decor, priority, reverse }) {
    
    const Tag = `h${priority}`

    return (
        <Tag className={cn(styles.title, { [styles.title_reverse]: reverse })}>
            {text} <span className={cn(styles.decor)}>{decor}</span>
        </Tag>
    )
}

export default Title
