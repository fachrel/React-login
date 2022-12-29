// import { Col, Row } from 'react-bootstrap';
import Login from './pages/Login';
import Register from './pages/Register';
import Forget from './pages/Forget';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
      <Route path='/' element={<Login />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Register' element={<Register />}/>
        <Route path='/Forget' element={<Forget />}/>
      </Routes>
    </div>

  );
}

export default App;
