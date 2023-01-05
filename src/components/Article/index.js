import cn from 'classnames'
import styles from './scss/article.module.scss'

function Article(theme) {

    return (
        <div className={cn(styles.article, {[styles.article_theme] : theme})}>
            <img className={cn(styles.img)} src="" alt="" />
        </div>
    )
}

export default Article
