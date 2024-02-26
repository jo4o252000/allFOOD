import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdministracaoResturante from './paginas/Adminitracao/Restaurante';
import NovoRestaurante from './paginas/Adminitracao/Restaurante/NovoRestaurante';
import PaginaPadrao from './paginas/Adminitracao/PaginaPadrao';
import AdministracaoPratos from './paginas/Adminitracao/Pratos/AdministracaoPratos';
import NovoPrato from './paginas/Adminitracao/Pratos/FormulatioPratos';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />

      <Route path='/admin' element={<PaginaPadrao />}>
        <Route path='restaurante' element={<AdministracaoResturante/>}/>
        <Route path='restaurante/novo' element={<NovoRestaurante/>}/>
        <Route path='restaurante/:id' element={<NovoRestaurante />}/> 
        <Route path='pratos' element={<AdministracaoPratos />} /> 
        <Route path='pratos/novo' element={<NovoPrato/>}/>    
      </Route>
    </Routes>
  );
}

export default App;
