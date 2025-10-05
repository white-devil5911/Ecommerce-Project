import { Header } from '../../components/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import './OrdersPage.css'
import { OrdersGrid } from './OrdersGrid';

export function OrdersPage({cart}){
    const [orders, setOrders] = useState([]); 

    useEffect(() => {
      const getOrderData = async () => {
        const response = await axios.get('/api/orders?expand=products')
        setOrders(response.data)
      };

      getOrderData();
}, []);

    return (
    <>
      <link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />
      <Header cart={ cart }/>
        <title>Orders</title>
  
      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid orders={orders} />
      </div>
    </>
    );
}