import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ViewList from './components/viewList/ViewList';
import SignUp from './components/signup/SignUp';
import Login from './components/login/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path="/home" element={<Home />} />
          {/* <Route exact path="/list" element={<NewList/>}/> */}
          <Route exact path="/list/:id" element={<ViewList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
