import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/home/Home'
import News from '../../pages/news/News'
import Mixology from '../../pages/mixology/Mixology'
import Learning from '../../pages/learning/Learning'
import NavBar from '../../pages/home/ui/NavBar';
import Events from '../../pages/news/Events';
import NewsGrid from '../../pages/news/ui/CurrentNewsPage';
// import NewsTabaccoo from '../../pages/news/NewsTabacco';
// import NewsManufacturers from '../../pages/news/NewsManufacturers';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<NavBar />}>
                    <Route index element={<Home />} />
                    <Route path="news" element={<News />} />
                    <Route path="mixology" element={<Mixology />} />
                    <Route path="learning" element={<Learning />} />
                    {/* <Route path='tobaccoCompanies' element={<NewsTobaccoCompanies />} /> */}
                </Route>
                <Route path='/news' element={<NavBar/>}>
                    <Route index element={<News />} />
                    {/* <Route path='tobaccoCompanies' element={<NewsTabaccoo />} /> */}
                    {/* <Route path='hookahManufacturers' element={<NewsManufacturers />} /> */}
                    <Route path='events' element={<Events />} />
                </Route>
            </Routes>
        </BrowserRouter>
  );
}

export default Router;