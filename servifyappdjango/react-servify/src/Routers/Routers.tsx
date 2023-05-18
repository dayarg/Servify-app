import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../modules/Home/Home';
import StartPage from '../modules/StartPage/StartPage';
import LogIn from '../modules/LogIn/LogIn';
import Register from '../modules/Register/Register';
import RegisterDoc from '../modules/Register/RegisterDoc';
import SupplierHome from '../modules/Home/SupplierHome';
import RegisterClient from '../modules/Register/RegisterClient';

const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/home-supplier" Component={SupplierHome} />
      <Route path="/login" Component={LogIn} />
      <Route path="/register" Component={Register} />
      <Route path="/register-client" Component={RegisterClient} />
      <Route path="/register-2" Component={RegisterDoc} />
      <Route path="/start-page" Component={StartPage} />
    </Routes>
    </BrowserRouter>
  );
};

export default Routers;