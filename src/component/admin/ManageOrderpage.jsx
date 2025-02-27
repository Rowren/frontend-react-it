import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import c1 from '../../assets/c1.jpg';
import c2 from '../../assets/c2.jpg';
import cpu1 from '../../assets/cpu1.jpg';
import g1 from '../../assets/g1.jpg';
import k1 from '../../assets/k1.jpg';
import k2 from '../../assets/k2.jpg';
import k3 from '../../assets/k3.jpg';
import m1 from '../../assets/m1.jpg';

const mockOrders = [
    {
        id: 1,
        date: "2025-02-28",
        totalAmount: 450.00,
        status: "กำลังดำเนินการ",
        items: [
            {
                id: 101,
                name: "Mechanical Keyboard",
                price: 150.00,
                quantity: 2,
                image: k1 // ใช้ภาพจาก import
            },
            {
                id: 102,
                name: "Gaming Mouse",
                price: 150.00,
                quantity: 1,
                image: m1 // ใช้ภาพจาก import
            }
        ]
    },
    {
        id: 2,
        date: "2025-02-27",
        totalAmount: 299.00,
        status: "จัดส่งแล้ว",
        items: [
            {
                id: 103,
                name: "USB-C Hub",
                price: 299.00,
                quantity: 1,
                image: c1 // ใช้ภาพจาก import
            }
        ]
    }
];

const ManageOrderpage = () => {
    const [orders, setOrders] = useState(mockOrders);

    // ฟังก์ชันลบคำสั่งซื้อ
    const removeOrder = (orderId) => {
        setOrders(orders.filter(order => order.id !== orderId));
    };

    // ฟังก์ชันอัปเดตสถานะ
    const updateStatus = (orderId, newStatus) => {
        setOrders(orders.map(order => 
            order.id === orderId ? { ...order, status: newStatus } : order
        ));
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">จัดการคำสั่งซื้อ</h2>

            {orders.length === 0 ? (
                <p className="text-center text-gray-500">ไม่มีคำสั่งซื้อ</p>
            ) : (
                <div>
                    {orders.map((order) => (
                        <div key={order.id} className="bg-white p-4 shadow-md rounded-lg mb-4">
                            <h3 className="text-xl font-semibold">คำสั่งซื้อที่ {order.id}</h3>
                            <p className="text-gray-600">วันที่: {order.date}</p>
                            <p className="font-bold">ยอดรวม: ฿{order.totalAmount.toFixed(2)}</p>

                            <div className="mt-2">
                                <label className="font-semibold">สถานะ: </label>
                                <select
                                    value={order.status}
                                    onChange={(e) => updateStatus(order.id, e.target.value)}
                                    className="ml-2 p-1 border rounded bg-gray-100"
                                >
                                    <option value="กำลังดำเนินการ">กำลังดำเนินการ</option>
                                    <option value="จัดส่งแล้ว">จัดส่งแล้ว</option>
                                    <option value="ยกเลิก">ยกเลิก</option>
                                </select>
                            </div>

                            <div className="space-y-4 mt-4">
                                {order.items.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
                                            <div>
                                                <h3 className="font-semibold">{item.name}</h3>
                                                <p className="text-gray-600">฿{item.price} x {item.quantity}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button
                                className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
                                onClick={() => removeOrder(order.id)}
                            >
                                <Trash2 size={20} />
                                ลบคำสั่งซื้อ
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ManageOrderpage;
