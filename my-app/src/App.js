import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/home';
import Main from './screens/main';
import Enigma from './screens/enigma';
import Map from './screens/map';
import Detail from './screens/detail';
import { NivellProvider } from './context/nivellContext';



function AppContent(){
  return(
    
 <Routes>
      <Route path="/" element={<Home />} />
      <Route path="main" element={<Main />} />
       <Route path="enigma" element={<Enigma />} />
        <Route path="map" element={<Map />} />
        <Route path="detail" element={<Detail />} />
    </Routes>
    
   
  );
}

function App() {
  return (
    <div className='app'>
      <div className='responsive-box'>
<Router>

<NivellProvider>
<AppContent />
</NivellProvider>

</Router>

    </div>
    </div>
  );
}

export default App;


