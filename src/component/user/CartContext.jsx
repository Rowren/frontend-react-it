import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]); // เพิ่มสถานะสำหรับรายการสั่งซื้อ

    // เพิ่มสินค้าลงตะกร้า
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    // ลบสินค้าออกจากตะกร้า
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    // อัปเดตจำนวนสินค้า
    const updateQuantity = (productId, amount) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: Math.max(item.quantity + amount, 1) } : item
            )
        );
    };

    // ฟังก์ชันสำหรับสั่งซื้อสินค้า
    const checkout = () => {
        if (cart.length > 0) {
            const newOrder = {
                id: orders.length + 1,
                items: cart,
                totalAmount: cart.reduce((total, item) => total + item.price * item.quantity, 0),
                date: new Date().toLocaleString(),
            };
            setOrders([...orders, newOrder]);  // บันทึกรายการสั่งซื้อ
            setCart([]);  // ล้างตะกร้าหลังจากการสั่งซื้อ
        }
    };

    return (
        <CartContext.Provider value={{ cart, orders, addToCart, removeFromCart, updateQuantity, checkout }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
