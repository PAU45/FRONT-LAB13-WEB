import React from 'react';
import './App.css';
import ListProductosComponent from './components/ListProductoComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProductoComponent from './components/AddProductoComponent';
import ListClientesComponent from './components/ListClientesComponent';
import AddClienteComponent from './components/AddClienteComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<ListProductosComponent />} />
            <Route path='/productos' element={<ListProductosComponent />} />
            <Route path='/add-producto' element={<AddProductoComponent />} />
            <Route path='/edit-producto/:id' element={<AddProductoComponent />} />
            <Route path='/clientes' element={<ListClientesComponent />} />
            <Route path='/add-cliente' element={<AddClienteComponent />} />
            <Route path='/edit-cliente/:id' element={<AddClienteComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;