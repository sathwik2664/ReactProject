import './App.css';
import { Route,Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Law from './components/MainPage';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import MyChatbot from './components/Chatbot/Chat1';
import LawTypes from './components/KeyFeatures/LawTypes';
import Constitution from './components/TypesofLaws/Constitution';
import Civil from './components/TypesofLaws/Civil';
import Corporate from './components/TypesofLaws/Corporate';
import Criminal from './components/TypesofLaws/Criminal';
import Cyber from './components/TypesofLaws/Cyber';
import Environmental from './components/TypesofLaws/Environmental';
import Family from './components/TypesofLaws/Family';
import Intellectual from './components/TypesofLaws/Intellectual';
import Labor from './components/TypesofLaws/Labor';
import Tax from './components/TypesofLaws/Tax';
import KnowyourRights from './components/KeyFeatures/KnowyourRights';
import Automatedlegal from './components/KeyFeatures/Automatedlegal';
import Integratedcase from './components/KeyFeatures/Integratedcase';
import LatestlegalNews from './components/KeyFeatures/LatestlegalNews';
import OndemandLegal from './components/KeyFeatures/OndemandLegal';
import Onlineappointment from './components/KeyFeatures/Onlineappointment';
import RealtimeLegal from './components/KeyFeatures/RealtimeLegal';
function App() {
  return (
    <div className="App">
      <div>
        <Nav/>
        <Routes>
          <Route path='/' element={ <Law/>}/>
          <Route path='/about' element={ <About/>}/>
          <Route path='/cont' element={ <Contact/>}/>
          <Route path='/serv' element={ <Service/>}/>
          <Route path='/chatbot' element={ <MyChatbot/>}/>
          <Route path='/laws' element={ <LawTypes/>}/>
          <Route path='/constitution' element={ <Constitution/>}/>
          <Route path='/civil' element={ <Civil/>}/>
          <Route path='/corporate' element={ <Corporate/>}/>
          <Route path='/criminal' element={ <Criminal/>}/>
          <Route path='/cyber' element={ <Cyber/>}/>
          <Route path='/environment' element={ <Environmental/>}/>
          <Route path='/family' element={ <Family/>}/>
          <Route path='/intellectual' element={ <Intellectual/>}/>
          <Route path='/labor' element={ <Labor/>}/>
          <Route path='/tax' element={ <Tax/>}/>
          <Route path='/rights' element={ <KnowyourRights/>}/>
          <Route path='/automatedlegalfilling' element={ <Automatedlegal/>}/>
          <Route path='/integratedcase' element={ <Integratedcase/>}/>
          <Route path='/latestlegalnews' element={ <LatestlegalNews/>}/>
          <Route path='/ondemand' element={ <OndemandLegal/>}/>
          <Route path='/onlineappoinment' element={ <Onlineappointment/>}/>
          <Route path='/realtimelegaladvice' element={ <RealtimeLegal/>}/>
        </Routes>
      </div>
    </div>    
  );
}
export default App;