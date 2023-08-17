import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import { Provider } from 'react-redux';

// Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
import HomePage from './components/HomePage';

// Redux
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/products" element={<Store/>} />
        <Route path="/cart" element={<ShopCart/>} />
        <Route path='/' element={ <HomePage/> } />
        <Route path="/*" element={<Navigate to="/"/>} />
      </Routes>
    </Provider>
  );
}

export default App;
