import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "animate.css"
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios';
import Casos from './pages/Casos';
import Nosotros from './pages/Nosotros';

export const App = () => {
  return(<div>
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Inicio/>}/>
        <Route path='contacto' element={<Contacto/>}/>
        <Route path="servicios" element={<Servicios/>}/>
        <Route path="casos-de-exito" element={<Casos/>}/>
        <Route path='nosotros' element={<Nosotros/>}/>
      </Route>
    </Routes>
  </div>)
}
