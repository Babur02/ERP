import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ordersData } from '../Data/data';
import { Navbar } from "./Navbar";


export const CalendarView = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [orders, setOrders] = useState(ordersData); 

    const onChange = (date) => {
        setSelectedDate(date);
      };
    
      const filteredOrders = orders.filter(
        (order) => new Date(order.date).toDateString() === selectedDate.toDateString()
      );
  return (
    <div>
        <Navbar/>
        <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold my-4">Orders Calendar View</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-md p-6 col-span-1">
          <Calendar onChange={onChange} value={selectedDate} />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 col-span-1">
          <h3 className="text-lg font-semibold mb-2">Orders for {selectedDate.toDateString()}</h3>
          {filteredOrders.length === 0 ? (
            <p>No orders for this date.</p>
          ) : (
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
                {filteredOrders.map((order) => (
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
          )}
        </div>
      </div>
    </div>
    </div>
    
  )
}
