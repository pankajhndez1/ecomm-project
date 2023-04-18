import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Main from './components/Main';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;
