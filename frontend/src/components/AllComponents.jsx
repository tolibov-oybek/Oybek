import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import Excursions from './Excursions'
import NoPage from './NoPage'

function AllComponents() {
    const location = useLocation()
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />} >
                <Route index element={<Home />} />
                <Route path="/excursions" element={<Excursions />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    );
}

export default AllComponents;