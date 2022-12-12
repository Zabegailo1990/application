import '../scss/cards-tab.scss'
import Tabs from '../../../components/Tabs'
import { cardsData } from '../../../API'
import Slider from '../../../components/Slider'
import Card from '../../../components/Card'

function CardsTab() {
    const sortingCards = (data, config) => {
    
    }

    console.log(sortingCards(cardsData()))

    return (
        <div className="cards-tab">
            <Tabs items={[
                {
                    label: 'new',
                },
                {
                    label: 'hit',
                },
                {
                    label: 'stock',
                },
                {
                    label: 'most popular',
                }
            ]}/>
        </div>
    )
}

export default CardsTab
