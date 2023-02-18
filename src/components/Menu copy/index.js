import { StyledMenu, List, Item, Label } from './styles/Menu.styled'
import Icon from '../Icon'
import { useState, useEffect } from 'react'

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
                        list: [
                            {
                                id: '4.3.3.1',
                                name: 'SubItem_1',
                                path: '#',
                            },
                            {
                                id: '4.3.3.2',
                                name: 'SubItem_2',
                                path: '#',
                            },
                            {
                                id: '4.3.3.3',
                                name: 'SubItem_3',
                                path: '#',
                            },
                        ],
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
    return <StyledMenu><RenderMenu arr={menu_api} parentIsOpen={true}/></StyledMenu>
}

export default Menu

const RenderMenu = ({arr, parentIsOpen}) => {
    const [isOpen, setIsOpen] = useState([])
    const [menu, setMenu] = useState([])

    console.log(isOpen)

    useEffect(() => {
        if(arr) setMenu(() => arr)
    }, [arr])

    function activeList (item) {
        if(isOpen.includes(item.id)){
            setIsOpen(()=> isOpen.filter(el => el !== item.id))
        }else{
            setIsOpen(()=> [...isOpen, item.id])
        }
    }

    return (
        <List>
            {menu.map((item, index) => (
                <Item
                    key={index}
                >
                    <Label onClick={() => activeList(item)}>{item.name}</Label>
                    {item.list && <Icon iconName={'icon-next'} />}
                    {isOpen.includes(item.id) && parentIsOpen && item.list && <RenderMenu arr={item.list} parentIsOpen={isOpen.includes(item.id)}/>}
                </Item>
            ))}
        </List>
    )
}
