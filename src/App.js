
import {Routes, Route} from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top'
import Home from './pages/Home';
import Accueil from './pages/Accueil';
import Spécialités from './pages/Spécialités';
import Psychiatre from './pages/Psychiatre';
import Psychothérapeute from './pages/Psychothérapeute';
import Addictiologue from './pages/Addictiologue';
import Sexologue from './pages/Sexologue';
import GerontoPsychiatrie from './pages/GerontoPsychiatrie';
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

        <Route path='/psychiatre' element={<Psychiatre/>}/>
        <Route path='/psychothérapeute' element={<Psychothérapeute/>}/>
        <Route path='/addictiologue' element={<Addictiologue/>}/>
        <Route path='/sexologue' element={<Sexologue/>}/>
        <Route path='/gerontoPsychiatrie' element={<GerontoPsychiatrie/>}/>

      </Routes>
    </div>
  );
}

export default App;
