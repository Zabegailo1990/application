import Reset from './assets/globalStyles/Reset.js'
import Fonts from './assets/globalStyles/Fonts'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog/index.js'

function App() {
    return (
        <div className='App'>
            <Fonts />
            <Reset />
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/catalog'
                    element={<Catalog />}
                />
            </Routes>
        </div>
    )
}

export default App
