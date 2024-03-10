import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { productsData, ordersData } from '../Data/data';

export const Dashboard = () => {

    const [products] = useState(productsData);
    const [orders] = useState(ordersData);
   
    const totalProducts = products.length;
    const totalOrders = orders.length;

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <p className="text-2xl text-gray-800 font-bold mb-8 text-center">Welcome to the ERP System</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
                            <h3 className="text-lg font-semibold mb-2">Total Products</h3>
                            <p className="text-2xl font-bold">{totalProducts}</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
                            <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
                            <p className="text-2xl font-bold">{totalOrders}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
