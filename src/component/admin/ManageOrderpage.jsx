import React from 'react';
import { useCart } from '../../component/user/CartContext';
import { Trash2 } from 'lucide-react';

const ManageOrderpage = () => {
    const { orders, removeOrder } = useCart();  // ดึงข้อมูล orders และ removeOrder จาก CartContext

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
                                className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md"
                                onClick={() => removeOrder(order.id)}  // ใช้ removeOrder ที่มาจาก CartContext
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
