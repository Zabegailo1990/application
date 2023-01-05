import styles from './scss/footer.module.scss'
import Title from '../Title'
import cn from 'classnames'

function Footer() {
    return (
        <div className={cn(styles.footer)}>
            <Title 
                priority={1} 
                text={'Title'} 
                decor={'decor'} 
                // reverse={true}
            />
        </div>
    )
}

export default Footer
