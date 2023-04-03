import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AutoShop from './Components/Auto Shop/Autoshop';
import Contacts from './Components/Contacts/Contacts';
import Customization from './Components/Customization/Customization';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import AirCondition from './Components/Services/AirCondition';
import Belts from './Components/Services/Belts';
import Brake from './Components/Services/Brake';
import CarWash from './Components/Services/CarWash';
import Engine from './Components/Services/Engine';
import OilFilters from './Components/Services/OilFilters';
import Services from './Components/Services/Services';
import TyreWheel from './Components/Services/TyreWheel';
import Wheels from './Components/Wheel/Wheels';


function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Site Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path= "/vista wheels" element={<Wheels />} />
          <Route path='/Auto Shop' element={<AutoShop />} />
          <Route path='/Customization' element={<Customization/>} />

          <Route path="/engine diagnostics" element={<Engine />} />
          <Route path="/tyre wheel" element={<TyreWheel />} />
          <Route path="/brake repair" element={<Brake />} />
          <Route path="/heating and cooling" element={<AirCondition />} />
          <Route path="/belts and hoses" element={<Belts />} />
          <Route path="/lube oil filters" element={<OilFilters />} />
          <Route path="/car wash" element={<CarWash />} />


          <Route path="/contact us" element={<Contacts />} />
        </Routes>

      </Suspense>

      <Footer />
      
      
    </div>
  );
}

export default App;
