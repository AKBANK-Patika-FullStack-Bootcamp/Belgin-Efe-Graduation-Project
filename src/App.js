import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminHome from './pages/Admin/AdminHome';
import Login from './pages/Login';
import Home from './pages/Home';
import Error from './pages/Error';
import User from './pages/Admin/User';
import Block from './pages/Admin/Block';
import Flat from './pages/Admin/Flat';
import Payment from './pages/Admin/Payment';
import AdminDashBoard from './pages/Admin/AdminDashBoard';
import Messages from './pages/Admin/Messages';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='admindashboard' element={<AdminDashBoard />} >
            <Route path='adminhome' element={<AdminHome />} />
            <Route path='user' element={<User />} />
            <Route path='block' element={<Block />} />
            <Route path='flat' element={<Flat />} />
            <Route path='payment' element={<Payment />} />
            <Route path='messages' element={<Messages />} />
          </Route>
          <Route path='*' element={<Error />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
