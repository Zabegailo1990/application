import classNames from 'classnames'
import styles from './scss/article.module.scss'

function Article() {

    const classes = classNames({
        article: {
            [styles.article] : true,
            [styles.article__img] : true,
        },
        
    })

    return (
        <div className={classes}>
            <img className={classes} src="" alt="" />
        </div>
    )
}

export default Article
