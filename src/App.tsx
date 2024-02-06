import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdministracaoResturante from './paginas/Adminitracao/Restaurante';
import NovoRestaurante from './paginas/Adminitracao/Restaurante/NovoRestaurante';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path='/admin/restaurante' element={<AdministracaoResturante/>}/>
      <Route path='/admin/restaurante/novo' element={<NovoRestaurante/>}/>
      <Route path='/admin/restaurante/:id' element={<NovoRestaurante />}/>
    </Routes>
  );
}

export default App;
