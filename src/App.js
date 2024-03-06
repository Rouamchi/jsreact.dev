
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Accueil from './pages/Accueil';
import Spécialités from './pages/Spécialités';
import ConseilDeGestion from './pages/ConseilDeGestion.js';
import EtudeDeFaisabilité from './pages/EtudeDeFaisabilité.js';
import ElaborationDuBusinessPlan from './pages/ElaborationDuBusinessPlan.js';
import Domiciliation from './pages/Domiciliation.js';
import Formations from './pages/Formations';
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
        <Route path='/etudeDeFaisabilité' element={<EtudeDeFaisabilité/>}/>
        <Route path='/elaborationDuBusinessPlan' element={<ElaborationDuBusinessPlan/>}/>
        <Route path='/domiciliation' element={<Domiciliation/>}/>
        <Route path='/formations' element={<Formations/>}/>

      </Routes>
    </div>
  );
}

export default App;
