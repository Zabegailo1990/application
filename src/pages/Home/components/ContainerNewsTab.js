import MySwiper from '../../../components/MySwiper'
import News from '../../../components/News'
import { newsData } from '../../../API'

function ContainerNewsTab() {
    return (
            <MySwiper interval={10}>
                {newsData()?.map((item, index) => (
                    <News 
                        key={index}
                        img={item.img}
                        date={item.date}
                        countComments={item.comments}
                        countViewers={item.views}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </MySwiper>
    )
}

export default ContainerNewsTab
