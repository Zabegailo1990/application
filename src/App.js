import Reset from './assets/globalStyles/Reset.js'
import Fonts from './assets/globalStyles/Fonts'
import router  from './routes/index.js'
import { RouterProvider } from 'react-router-dom'

function App() {
    return (
        <div className='App'>
            <Fonts />
            <Reset />
            <RouterProvider router={router} />
        </div>
    )
}

export default App
