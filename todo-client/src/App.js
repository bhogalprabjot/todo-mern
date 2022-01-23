import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NewList from './components/newList/NewList';
import ViewList from './components/viewList/ViewList';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/list" element={<NewList/>}/>
          <Route exact path ="/list/:id" element={<ViewList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
