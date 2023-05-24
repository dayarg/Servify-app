import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../modules/Home/Home';
import StartPage from '../modules/StartPage/StartPage';
import LogIn from '../modules/LogIn/LogIn';
import Register from '../modules/Register/Register';
import RegisterDoc from '../modules/Register/RegisterDoc';
import SupplierHome from '../modules/Home/SupplierHome';
import RegisterClient from '../modules/Register/RegisterClient';
import ServiceDetail from '../modules/ServiceDetail/ServiceDetail';
import ProveedorPage from '../modules/ProveedorPage/ProveedorPage';
import Administrator from '../modules/Administrator/Administrator';
import LogInClient from '../modules/LogIn/LogInClient';

const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/home-supplier" Component={SupplierHome} />
      <Route path="/login" Component={LogIn} />
      <Route path="/login-client" Component={LogInClient} />
      <Route path="/register" Component={Register} />
      <Route path="/register-client" Component={RegisterClient} />
      <Route path="/register-2" Component={RegisterDoc} />
      <Route path="/start-page" Component={StartPage} />
      <Route path="/servicio/:servicePath" Component={ServiceDetail} />
      <Route path="/proveedor-page" Component={ProveedorPage} />
      <Route path="/administrator" Component={Administrator} />
    </Routes>
    </BrowserRouter>
  );
};

export default Routers;