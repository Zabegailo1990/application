import { StyledMenu, List, Item, Label } from './styles/Menu.styled'
import { useState } from 'react'
import Icon from '../Icon'

const menu_api = [
    {
        id: '1',
        name: 'item_1',
        path: '#',
    },
    {
        id: '2',
        name: 'item_2',
        path: '#',
    },
    {
        id: '3',
        name: 'item_3',
        path: '#',
    },
    {
        id: '4',
        name: 'Item_4',
        list: [
            {
                id: '4.1',
                name: 'SubItem_1',
                path: '#',
            },
            {
                id: '4.2',
                name: 'SubItem_2',
                path: '#',
            },
            {
                id: '4.3',
                name: 'SubItem_3',
                list: [
                    {
                        id: '4.3.1',
                        name: 'SubItem_1',
                        path: '#',
                    },
                    {
                        id: '4.3.2',
                        name: 'SubItem_2',
                        path: '#',
                    },
                    {
                        id: '4.3.3',
                        name: 'SubItem_3',
                    },
                ],
            },
        ],
    },
    {
        id: '5',
        name: 'item_5',
        path: '#',
    },
    {
        id: '6',
        name: 'item_6',
        list: [
            {
                id: '6.1',
                name: 'SubItem_1',
                path: '#',
            },
            {
                id: '6.2',
                name: 'SubItem_2',
                path: '#',
            },
            {
                id: '6.3',
                name: 'SubItem_3',
                path: '#',
            },
        ],
    },
]

function Menu() {
    const [isOpen, setIsOpen] = useState([])
    console.log(isOpen)

    function activeList(id, event) {
        event.stopPropagation()
        if (isOpen.includes(id)) {
            setIsOpen(() => isOpen.filter((el) => el !== id))
        } else {
            setIsOpen(() => [...isOpen, id])
        }
    }

    const renderMenu = (arr) => {
        return (
            <List>
                {arr.map((item, index) => (
                    <Item
                        key={index}
                        onClick={(event) => activeList(item.id, event)}
                    >
                        <Label>{item.name}</Label>
                        {item?.list && <Icon iconName='icon-next' />}
                        {isOpen.includes(item.id) && item?.list &&
                            renderMenu(item.list, item.id)
                        }
                    </Item>
                ))}
            </List>
        )
    }

    return <StyledMenu>{renderMenu(menu_api)}</StyledMenu>
}

export default Menu
