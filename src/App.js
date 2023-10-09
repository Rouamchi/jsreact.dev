

import {Routes, Route} from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top'
import Home from './pages/Home';
import Accueil from './pages/Accueil';
import Spécialités from './pages/Spécialités';
import Contact from './pages/Contact';
import Cabinet from './pages/Cabinet';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/accueil' element={<Accueil/>}/>
        <Route path='/spécialités' element={<Spécialités/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cabinet' element={<Cabinet/>}/>

        <ScrollToTop
        smooth
        ></ScrollToTop>
      </Routes>
    </div>
  );
}

export default App;
