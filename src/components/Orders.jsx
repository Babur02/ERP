import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { productsData, ordersData } from '../Data/data';

export const Orders = () => {
  const [orders] = useState(ordersData);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold my-4">Orders Management</h2>
        <table className="min-w-full bg-white shadow-md rounded my-4">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">Customer</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-2 px-4">{order.id}</td>
                <td className="py-2 px-4">{order.customer}</td>
                <td className="py-2 px-4">{order.date}</td>
                <td className="py-2 px-4">
                  <span
                    className={
                      order.status === "Pending"
                        ? "bg-yellow-500 text-white py-1 px-2 rounded-full"
                        : order.status === "Shipped"
                          ? "bg-blue-500 text-white py-1 px-2 rounded-full"
                          : "bg-green-500 text-white py-1 px-2 rounded-full"
                    }
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
