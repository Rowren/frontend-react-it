import React from "react";
import { useCart } from "../../component/user/CartContext";
import { Trash2 } from "lucide-react";

const Orderpage = () => {
  const { cart, removeFromCart, updateQuantity, checkout } = useCart();

  // คำนวณยอดรวมทั้งหมด
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
      <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4 text-center">ตะกร้าสินค้า</h2>

          {cart.length === 0 ? (
              <p className="text-center text-gray-500">ไม่มีสินค้าในตะกร้า</p>
          ) : (
              <div>
                  <div className="space-y-4">
                      {cart.map((item) => (
                          <div key={item.id} className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg">
                              <div className="flex items-center space-x-4">
                                  <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
                                  <div>
                                      <h3 className="font-semibold">{item.name}</h3>
                                      <p className="text-gray-600">฿{item.price}</p>
                                  </div>
                              </div>

                              <div className="flex items-center space-x-4">
                                  <button
                                      className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                                      onClick={() => updateQuantity(item.id, -1)}
                                  >
                                      -
                                  </button>
                                  <span>{item.quantity}</span>
                                  <button
                                      className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                                      onClick={() => updateQuantity(item.id, 1)}
                                  >
                                      +
                                  </button>
                              </div>

                              <button
                                  className="text-red-500 hover:text-red-700"
                                  onClick={() => removeFromCart(item.id)}
                              >
                                  <Trash2 size={20} />
                              </button>
                          </div>
                      ))}
                  </div>

                  {/* แสดงยอดรวมทั้งหมด */}
                  <div className="mt-6 p-4 bg-gray-100 rounded-lg text-right">
                      <h3 className="text-xl font-bold">
                          ยอดรวมทั้งหมด: <span className="text-blue-500">฿{totalAmount.toFixed(2)}</span>
                      </h3>
                  </div>

                  {/* ปุ่มสั่งซื้อ */}
                  <div className="text-center mt-4">
                      <button
                          className="px-6 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600"
                          onClick={checkout}
                      >
                          สั่งซื้อสินค้า
                      </button>
                  </div>
              </div>
          )}
      </div>
  );
};

export default Orderpage;
