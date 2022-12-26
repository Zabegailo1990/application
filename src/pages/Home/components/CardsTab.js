import { useState } from 'react'
import Tabs from '../../../components/Tabs'
import Card from '../../../components/Card'
import MySwiper from '../../../components/MySwiper'
import { cardsData } from '../../../API'

function CardsTab() {
    const [current, setCurrent] = useState()

    const handleSwitchTab = (label) => {
        setCurrent(label)
    }

    return (
        <Tabs
            callback={handleSwitchTab}
            items={['new', 'hit', 'stock', 'most popular']}
        >
            <MySwiper>
                {cardsData()
                    .filter((card) => {
                        switch (current) {
                            case 'new':
                                return Date.now() - card.date <= 1000 * 3600 * 24 * 7
                            case 'hit':
                                return card.rating > 4
                            case 'most popular':
                                return card.sales > 30
                            default:
                                return true
                        }
                    })
                    .map((card) => (
                        <Card
                            key={card.id}
                            img={card.img}
                            title={card.title}
                            price={card.price}
                        />
                    ))}
            </MySwiper>
        </Tabs>
    )
}

export default CardsTab
