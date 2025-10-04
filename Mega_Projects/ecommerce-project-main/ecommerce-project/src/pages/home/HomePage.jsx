import axios from 'axios'
import { useEffect, useState} from 'react';
import { Header } from '../../components/Header';
import CheckmarkIcon from '../../assets/images/icons/checkmark.png'; 
import './HomePage.css';
import { ProductsGrid } from './ProductsGrid'

export function HomePage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
        axios.get('/api/products')
        .then((response) => {
          setProducts(response.data)
        });

        axios.get('/api/cart-items')
        .then((response) => {
          setCart(response.data)
        });
  }, []);


    return (
    <>
        <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
    <Header cart={cart}/>
      <title>Ecommerce Project</title>
  
        <div className="home-page">
          <ProductsGrid products={products}/>
        </div>
    </>
    );
}