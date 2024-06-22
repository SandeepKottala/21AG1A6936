import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProductsPage from './components/AllProductsPage';
import ProductDetailsPage from './components/ProductDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
