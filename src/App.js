
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Accueil from './pages/Accueil';
import Spécialités from './pages/Spécialités';
import ConseilDeGestion from './pages/ConseilDeGestion.js';
import Psychothérapeute from './pages/Psychothérapeute';
import Addictiologue from './pages/Addictiologue';
import Sexologue from './pages/Sexologue';
import GerontoPsychiatrie from './pages/GerontoPsychiatrie';
import Contact from './pages/Contact';
import SalleDeFormation from './pages/SalleDeFormation';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/accueil' element={<Accueil/>}/>
        <Route path='/spécialités' element={<Spécialités/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/salleDeFormation' element={<SalleDeFormation/>}/>
        <Route path='/conseilDeGestion' element={<ConseilDeGestion/>}/>
        <Route path='/psychothérapeute' element={<Psychothérapeute/>}/>
        <Route path='/addictiologue' element={<Addictiologue/>}/>
        <Route path='/sexologue' element={<Sexologue/>}/>
        <Route path='/gerontoPsychiatrie' element={<GerontoPsychiatrie/>}/>

      </Routes>
    </div>
  );
}

export default App;
