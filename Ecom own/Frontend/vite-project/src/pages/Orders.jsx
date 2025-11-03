import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ORDERS_KEY = 'osm_orders';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(ORDERS_KEY);
      setOrders(raw ? JSON.parse(raw) : []);
    } catch (e) {
      setOrders([]);
    }
  }, []);

  if (!orders || orders.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold mb-4">Your Orders</h1>
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <p className="text-gray-700 mb-4">You have no orders yet. Place an order and it will appear here.</p>
          <Link to="/products" className="btn-primary">Start Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Your Orders</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-sm text-gray-500">Order ID</div>
                <div className="font-medium text-gray-800">{order.id}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Placed</div>
                <div className="font-medium text-gray-800">{new Date(order.date).toLocaleString()}</div>
              </div>
            </div>
            <div className="border-t pt-3">
              <div className="text-sm text-gray-600 mb-2">Items:</div>
              <ul className="space-y-2">
                {order.items.map((it) => (
                  <li key={it.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img src={it.image} alt={it.name} className="w-12 h-12 object-cover rounded mr-3" />
                      <div>
                        <div className="font-medium">{it.name}</div>
                        <div className="text-sm text-gray-500">Qty: {it.quantity}</div>
                      </div>
                    </div>
                    <div className="font-medium">
                      {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format((it.price || 0) * (it.quantity || 0))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="text-sm text-gray-600">Total</div>
              <div className="font-bold text-lg">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(order.total)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
