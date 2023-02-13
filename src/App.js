import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios';
import Casos from './pages/Casos';
import Nosotros from './pages/Nosotros';
import VideoDrone from './pages/services/VideoDrone';
import Seo from './pages/services/Seo';
import Commerce from './pages/services/E-commerce';
import Desarrollo from './pages/services/Desarrollo';
import Mantenimiento from './pages/services/Mantenimiento';

export const App = () => {
  return(<div>
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Inicio/>}/>
        <Route path='contacto' element={<Contacto/>}/>
        <Route path="servicios" element={<Servicios/>}/>
        <Route path="servicios/video-drone" element={<VideoDrone/>}/>
        <Route path="servicios/seo" element={<Seo/>}/>
        <Route path="servicios/e-commerce" element={<Commerce/>}/>
        <Route path="servicios/desarrollo-web" element={<Desarrollo/>}/>
        <Route path="servicios/mantenimiento-web" element={<Mantenimiento/>}/>
        <Route path="casos-de-exito" element={<Casos/>}/>
        <Route path='nosotros' element={<Nosotros/>}/>
      </Route>
    </Routes>
  </div>)
}
