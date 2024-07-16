// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Home from './components/Home';
// import Cart from './components/Cart';

// function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <div>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/cart' element={<Cart />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import CartProvider from './context/Context'; // Import the context provider

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
