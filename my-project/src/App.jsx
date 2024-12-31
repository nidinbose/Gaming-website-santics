import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import {BrowserRouter,Routes,Route,useLocation} from 'react-router-dom'
import Cases from './Components/Cases'
import MotherBoard from './Components/MotherBoard'
import Monitors from './Components/Monitors'
import Cpu from './Components/Cpu'
import Chair from './Components/Chair'
import Gpu from './Components/Gpu'
import Psu from './Components/Psu'
import Keyboard from './Components/Keyboard'
import Audio1 from './Components/Audio'
import Accs from './Components/Accs'
import ViewCase from './Components/Cases/ViewCase'
import AdminRegester from './Components/Adminlogin/AdminRegester'
import AdminLogin from './Components/Adminlogin/AdminLogin'
import Admin from './Components/Admin'
import Register from './Components/Loginpage/Regester'
import Login from './Components/Loginpage/Login'
import Signup from './Components/Loginpage/Regester'
import Cart from './Components/Cart'
import AddProducts from './Components/AdminHandle/AddProduct'
import ViewProducts from './Components/AdminHandle/ViewProduct'
import ProductList from './Components/AdminHandle/ProductsList'
import EditProducts from './Components/AdminHandle/EditProduct'
import ResetPassword from './Components/Loginpage/ResetPassword'
import AdminForgotPassword from './Components/Adminlogin/ForgotAdmin/AdminForgotPassword'
import AdminResetPassword from './Components/Adminlogin/ForgotAdmin/AdminResetPassword'
import UserView from './Components/Navbar/UserView'
import Footer from './Components/Footer'
import ForgotPassword from './Components/Loginpage/ForgotPassword'
import UserResetPassword from './Components/Loginpage/ResetPassword'
import Address from './Components/PaymentGateway/Address'
import CardPayment from './Components/PaymentGateway/CardPayment'
import Orderes from './Components/PaymentGateway/Orderes'
import Download from './Components/Navbar/Downlord'
import AccountView from './Components/Navbar/AccountView'
import UserLists from './Components/AdminHandle/UserLists'
import Success from './Components/PaymentGateway/Sucess'
import SupportAndTerms from './Components/Home/Support'
import CustomerCare from './Components/Home/CoustmerCare'
import Community from './Components/Home/Community'




const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  const adminRoutes = [
    '/adminregester',
    '/adminlogin',
    '/adminforgotpassword',
    '/adminresetpassword',
    '/admin',
    '/admin/addproducts',
    '/admin/viewproducts/:id',
    '/admin/productslist',
    '/admin/editproducts/:id',
  ];

  const isAdminRoute = adminRoutes.some((route) => location.pathname.startsWith(route));

  return (
    <>
  
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/adminregester" Component={AdminRegester} />
        <Route path="/adminlogin" Component={AdminLogin} />
        <Route path="/adminforgotpassword" Component={AdminForgotPassword} />
        <Route path="/adminresetpassword" Component={AdminResetPassword} />
        <Route path="/admin" Component={Admin} /> 
        <Route path="/admin/addproducts" Component={AddProducts} />
        <Route path="/admin/viewproducts/:id" Component={ViewProducts} />
        <Route path="/admin/productslist" Component={ProductList} />
        <Route path="/admin/editproducts/:id" Component={EditProducts} />
        <Route path="/admin/userlists" Component={UserLists} />

        <Route path="/" Component={Home} />
        <Route path="/signup" Component={Signup} />
        <Route path="/login" Component={Login} />
        <Route path="/home" Component={UserView} />
        <Route path="/forgotpassword" Component={ForgotPassword} />
        <Route path="/resetpassword" Component={ResetPassword} />
        <Route path="/userresetpassword" Component={UserResetPassword} />

        <Route path="/cart" Component={Cart} />
        <Route path="/cases" Component={Cases} />
        <Route path="/motherboard" Component={MotherBoard} />
        <Route path="/monitors" Component={Monitors} />
        <Route path="/cpu" Component={Cpu} />
        <Route path="/chair" Component={Chair} />
        <Route path="/gpu" Component={Gpu} />
        <Route path="/psu" Component={Psu} />
        <Route path="/keyboard" Component={Keyboard} />
        <Route path="/audio" Component={Audio1} />
        <Route path="/accs" Component={Accs} />
        <Route path="/viewcase" Component={ViewCase} />
        <Route path="/viewcase/:id" Component={ViewCase} />

        <Route path="/address/:userId" Component={Address} />
        <Route path="/cardpayment" Component={CardPayment} />
        {/* <Route path="/orderes" Component={Orderes} /> */}
        <Route path="/download" Component={Download} />
        <Route path="/account" Component={AccountView} />
        {/* <Route path="/success/:orderId" component={Success} /> */}
        <Route path="/success" element={Success} />
        <Route path="/orders/:orderId" Component={Orderes} />
        <Route path="/support" Component={SupportAndTerms} />
        <Route path="/coustmercare" Component={CustomerCare} />
        <Route path="/community" Component={Community} />






      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  ) 
}

export default App
