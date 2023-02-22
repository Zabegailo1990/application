import { StyledSocial, Item, Link } from './styles/Social.styled'
import Icon from '../Icon'

function Social({
    className,
    content = [
        {
            icon: 'icon-facebook',
            path: '#',
        },
        {
            icon: 'icon-vk',
            path: '#',
        },
        {
            icon: 'icon-instagram',
            path: '#',
        },
        {
            icon: 'icon-twitter',
            path: '#',
        },
    ],
    iconSize = ['20px', '20px'],
    indent,
}) {
    return (
        <StyledSocial
            className={className}
            spaceBetween={indent}
        >
            {content?.map((item, index) => (
                <Item key={index}>
                    <Link href={item.path}>
                        <Icon
                            iconName={item.icon}
                            size={iconSize}
                            color='#434343'
                        />
                    </Link>
                </Item>
            ))}
        </StyledSocial>
    )
}

export default Social
