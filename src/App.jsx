import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home'
import { ROUTE } from './constants';

export function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE.LOGIN} element={<Login />} />
          <Route path={ROUTE.REGISTER} element={<Register />} />
          <Route path={ROUTE.HOME} element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}